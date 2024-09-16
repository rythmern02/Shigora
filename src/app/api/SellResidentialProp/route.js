import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique file names
import ConnectMongodb from "../../libs/mongodb";
import SellResidentialProp from "../../models/SellresidantialProp";

// Helper function to save the file
async function saveFile(file) {
  const data = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public/assets/sellResidentialProp/", `${uuidv4()}-${file.name}`);
  await fs.writeFile(filePath, data);
  return `/assets/sellResidentialProp/${path.basename(filePath)}`; // Return the relative file path
}


// POST method to handle form data submission
export async function POST(request) {
  const formData = await request.formData();

  const name = formData.get('name');
  const mob_Number = formData.get('mob_Number');
  const village = formData.get('village');
  const project_Name = formData.get('project_Name');
  const area = formData.get('area');
  const plot_Number = formData.get('plot_Number');
  const description = formData.get('description');
  const file = formData.get('file'); // This is the uploaded file

  try {
    // Connect to MongoDB
    await ConnectMongodb();

    // Validation: Ensure all required fields are provided
    if (!name || !mob_Number || !village || !project_Name || !area || !description || !file) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Save the uploaded file
    const fileUrl = await saveFile(file);

    // Create a new land project document
    const newProject = new SellResidentialProp({
      name,
      mob_Number,
      village,
      project_Name,
      area,
      plot_Number,
      description,
      file_url: fileUrl
    });

    // Save the document to the database
    await newProject.save();

    return NextResponse.json({ message: "Residential Prop Sent Successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating land project:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// GET method to fetch all projects
export async function GET() {
  try {
    await ConnectMongodb();
    const projects = await SellResidentialProp.find();
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
