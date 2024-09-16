import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique file names
import ConnectMongodb from "../../libs/mongodb";
import SellLandPlot from "../../models/SellLandPlot";

// Helper function to save the file
async function saveFile(file) {
  const data = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public/assets/sellLandPlot/", `${uuidv4()}-${file.name}`);
  await fs.writeFile(filePath, data);
  return `/assets/sellLandPlot/${path.basename(filePath)}`; // Return the relative file path
}

export async function POST(request) {
  try {
    // Connect to MongoDB
    await ConnectMongodb();

    // Parse the form data
    const formData = await request.formData();

    // Extract fields from the form data
    const name = formData.get("name");
    const mob_Number = formData.get("mob_Number");
    const area = formData.get("area");
    const survey_Number = formData.get("survey_Number");
    const FP = formData.get("FP");
    const zone = formData.get("zone");
    const description = formData.get("description");
    const file = formData.get("file"); // Extract the file from form data

    // Ensure all required fields are present
    if (!name || !mob_Number || !area || !survey_Number || !FP || !zone || !description || !file) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save the uploaded file
    const fileUrl = await saveFile(file);

    // Create a new document in MongoDB
    const newProperty = new SellLandPlot({
      name,
      mob_Number,
      area,
      survey_Number,
      FP,
      zone,
      description,
      file_url: fileUrl, 
    });

    // Save the document to the database
    await newProperty.save();

    return NextResponse.json({ message: "SELL Land Plot Created Successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    await ConnectMongodb();

    // Retrieve all properties from the database
    const properties = await SellLandPlot.find();

    return NextResponse.json({ properties });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
