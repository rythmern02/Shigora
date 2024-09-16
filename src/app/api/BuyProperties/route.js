import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid"; // For generating unique file names
import ConnectMongodb from "../../libs/mongodb";
import BuyProperties from "../../models/BuyProperties";

// Helper function to save the file
async function saveFile(file) {
  const data = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public/assets/BuyProperties/", `${uuidv4()}-${file.name}`);
  await fs.writeFile(filePath, data);
  return `/assets/BuyProperties/${path.basename(filePath)}`; // Return the relative file path
}
// Helper function to save the file
async function saveInfoFile(filess) {
  const data = Buffer.from(await filess.arrayBuffer());
  const filePath = path.join(process.cwd(), "public/assets/BuyProperties/Info/", `${uuidv4()}-${filess.name}`);
  await fs.writeFile(filePath, data);
  return `/assets/BuyProperties/Info/${path.basename(filePath)}`; // Return the relative file path
}

export async function POST(request) {
  try {
    // Connect to MongoDB
    await ConnectMongodb();

    // Parse the form data
    const formData = await request.formData();

    // Extract fields from the form data
    const title = formData.get("title");
    const FP = formData.get("FP");
    const village = formData.get("village");
    const zone = formData.get("zone");
    const tag = formData.get("tag");
    const file = formData.get("file"); // Extract the file from form data
    const info = formData.get("info");

    // Ensure all required fields are present
    if (!title || !FP || !village || !zone || !tag || !file || !info) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save the uploaded file
    const fileUrl = await saveFile(file);

    // Save the uploaded file
    const infoUrl = await saveInfoFile(info);
    console.log("the infourl is : ". infoUrl);
    // Create a new document in MongoDB
    const newProperty = new BuyProperties({
      title,
      imageUrl: fileUrl, // Store the file URL
      infoUrl: infoUrl,
      FP,
      village,
      zone,
      tag,
    });

    // Save the document to the database
    await newProperty.save();

    return NextResponse.json({ message: "Buy Home Property Created Successfully" }, { status: 201 });

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
    const properties = await BuyProperties.find();

    return NextResponse.json({ properties });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
