"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";

const SellResidentialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mob_Number: "",
    village: "Select Village",
    project_Name: "",
    area: "",
    plot_Number: "",
    description: "",
    file: null,
  });

  const [filePreview, setFilePreview] = useState<string | null>(null);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));

    if (file) {
      setFilePreview(URL.createObjectURL(file)); // To preview the file if needed
    }
  };
  const router = useRouter();
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("mob_Number", formData.mob_Number);
      form.append("village", formData.village);
      form.append("project_Name", formData.project_Name);
      form.append("area", formData.area);
      form.append("plot_Number", formData.plot_Number);
      form.append("description", formData.description);
      if (formData.file) {
        form.append("file", formData.file); // Append file to FormData
      }

      const res = await fetch("/api/SellResidentialProp", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        const result = await res.json();
        alert("Form submitted successfully: " + result.message);
        router.push('/');
        
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
    <form className="space-y-4" onSubmit={handleSubmit}>
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
        type="text"
        name="mob_Number"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Phone Number"
        value={formData.mob_Number}
        onChange={handleInputChange}
        required
      />
      <select
        name="village"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={formData.village}
        onChange={handleInputChange}
        required
      >
        <option value="Select Village">Select Village</option>
        <option value="Village 1">Village 1</option>
        <option value="Village 2">Village 2</option>
      </select>
      <input
        type="text"
        name="project_Name"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Project Name"
        value={formData.project_Name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="area"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Area"
        value={formData.area}
        onChange={handleInputChange}
        required
      />
       <input
        type="text"
        name="plot_Number"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter Plot Number"
        value={formData.plot_Number}
        onChange={handleInputChange}
        required
      />
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
      <button
        type="submit"
        className="bg-[#FF9500] text-white w-full py-2 rounded-md hover:bg-yellow-800"
      >
        Submit
      </button>
    </form>
  );
};

export default SellResidentialForm;
