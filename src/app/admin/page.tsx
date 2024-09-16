"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the BuyProperty type
interface BuyProperty {
  _id: string;
  title: string;
  imageUrl: string;
  infoUrl: string;
  FP: string;
  village: string;
  zone: string;
  tag: string;
}

const AdminPage: React.FC = () => {
  const [properties, setProperties] = useState<BuyProperty[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    FP: "",
    village: "",
    zone: "Zone 1",
    tag: "",
    file: null as File | null,
    info: null as File | null, // Handles both file and info as distinct fields
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/BuyProperties", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setProperties(data.properties);
        } else {
          setErrorMessage("Failed to fetch properties");
        }
      } catch (error) {
        setErrorMessage("Error occurred while fetching properties");
      }
    };
    fetchProperties();
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// Handle main file input change
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0] || null;
  setFormData((prevData) => ({
    ...prevData,
    file: file, // Set the main file
  }));
};

// Handle info file input change
const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0] || null;
  setFormData((prevData) => ({
    ...prevData,
    info: file, // Set the info file
  }));
};

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("FP", formData.FP);
      form.append("village", formData.village);
      form.append("zone", formData.zone);
      form.append("tag", formData.tag);

      // Append files if they exist
      if (formData.file) {
        form.append("file", formData.file); // Append the main file
      }

      if (formData.info) {
        form.append("info", formData.info); // Append the additional info file
      }

      const res = await fetch("/api/BuyProperties", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        const result = await res.json();
        alert("Property added successfully: " + result.message);
        router.push("/admin"); // Refresh the page to show the new property
      } else {
        const errorData = await res.json();
        alert("Error: " + errorData.error);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 mt-24">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Form to Add New Property */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-12">
        <h2 className="text-xl font-semibold">Add New Property</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="FP"
          placeholder="Enter FP Number"
          value={formData.FP}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="village"
          placeholder="Village"
          value={formData.village}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <select
          name="zone"
          value={formData.zone}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Zone 1">Zone 1</option>
          <option value="Zone 2">Zone 2</option>
        </select>
        <input
          type="text"
          name="tag"
          placeholder="Tag (e.g., For Sale)"
          value={formData.tag}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="file"
          name="file" // Main file input
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="file"
          name="info" // Additional info file input
          onChange={handleInfoChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 text-white p-2 rounded-md w-full ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          {loading ? "Submitting..." : "Add Property"}
        </button>
      </form>

      {/* Display the list of properties */}
      <h2 className="text-2xl font-semibold mb-4">Available Properties</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id} className="border p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-40 object-cover mt-2"
              />
              <p>FP: {property.FP}</p>
              <p>Village: {property.village}</p>
              <p>Zone: {property.zone}</p>
              <p>Tag: {property.tag}</p>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
