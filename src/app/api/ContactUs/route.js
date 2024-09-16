import { NextResponse } from "next/server";
import ConnectMongodb from "../../libs/mongodb";
import ContactForm from "../../models/Contact"

export async function POST(request) {
  try {
    // Connect to MongoDB
    await ConnectMongodb();

    // Parse the form data
    const formData = await request.formData();

    // Extract fields from the form data
    const name = formData.get("name");
    const mob_Number = formData.get("mob_Number");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("data: ", name, mob_Number, email, message)
    // Ensure all required fields are present
    if (!name || !mob_Number || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create a new document in MongoDB
    const newProperty = new ContactForm({
      name,
      mob_Number,
      email,
      message
    });

    // Save the document to the database
    await newProperty.save();

    return NextResponse.json({ message: "Conact message Sent Successfully" }, { status: 201 });

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
    const properties = await ContactForm.find();

    return NextResponse.json({ properties });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
