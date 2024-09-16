"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SellLandForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mob_Number: "",
    area: "",
    survey_Number: "",
    FP: "",
    zone: "Zone 1",
    description: "",
    file: null,
  });
  const router = useRouter()
  const [filePreview, setFilePreview] = useState<string | null>(null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file : any= e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));

    if (file) {
      setFilePreview(URL.createObjectURL(file)); // To preview the file if needed
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("mob_Number", String(formData.mob_Number));
      form.append("area", formData.area);
      form.append("survey_Number", String(formData.survey_Number));
      form.append("FP", String(formData.FP));
      form.append("zone", formData.zone);
      form.append("description", formData.description);
  
      if (formData.file) {
        form.append("file", formData.file); // Append file to FormData
      }
  
      const res = await fetch("/api/SellLandPlot", {
        method: "POST",
        body: form,
      });
  
      if (res.ok) {
        const result = await res.json();
        alert("Form submitted successfully: " + result.message);
        router.push('/')
      } else {
        const errorData = await res.json();
        alert("Error: " + errorData.error);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="mob_Number"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Phone Number"
        value={formData.mob_Number}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="area"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Village"
        value={formData.area}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="survey_Number"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Survey No"
        value={formData.survey_Number}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="FP"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter NTP No"
        value={formData.FP}
        onChange={handleInputChange}
        required
      />
      <select
        name="zone"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={formData.zone}
        onChange={handleInputChange}
        required
      >
        <option value="Zone 1">Zone 1</option>
        <option value="Zone 2">Zone 2</option>
      </select>
      <textarea
        name="description"
        className="w-full p-2 border border-gray-300 rounded-md"
        rows={4}
        placeholder="Enter extra information from your side"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="file"
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={handleFileChange}
      />
      {filePreview && <img src={filePreview} alt="File preview" className="mt-2" />}
      <button type="submit" className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600">
        Submit
      </button>
    </form>
  );
};

export default SellLandForm;
