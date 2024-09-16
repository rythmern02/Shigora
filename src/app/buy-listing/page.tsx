"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface Property {
  _id: string; // MongoDB's ID is typically a string
  title: string;
  description: string;
  FP: string; // Assuming FP is something like the price
  imageUrl: string;
  village: string;
  zone: string;
  tag: string; // The tag for filtering (e.g., Residential, Commercial, Industrial)
}

const BuyProperties: FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/BuyProperties");
        const data = await res.json();
        if (res.ok) {
          setProperties(data.properties); // Assuming the API returns a properties field
          setFilteredProperties(data.properties); // Initially show all properties
        } else {
          console.error("Failed to fetch properties", data);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFilteredProperties(properties); // Show all properties
    } else {
      setFilteredProperties(
        properties.filter((property) => property.tag === filter)
      );
    }
  };

  if (loading) {
    return <p className="text-center mt-[10rem]">Loading properties...</p>;
  }

  if (properties.length === 0) {
    return <p className="text-center mt-[10rem]">No properties found</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 mt-10 md:mt-16 lg:mt-18">
      <div className="bg-white">
        <h1 className="text-4xl font-extrabold text-[#FF9500] mb-8 text-center">
          Buy Your Dream Property
        </h1>

        {/* Category Filters */}
        <div className="text-center mb-8">
          <button
            onClick={() => handleFilterChange("All")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedFilter === "All"
                ? "bg-[#FF9500] text-white"
                : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("residential")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedFilter === "residential"
                ? "bg-[#FF9500] text-white"
                : "bg-gray-200"
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => handleFilterChange("commercial")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedFilter === "commercial"
                ? "bg-[#FF9500] text-white"
                : "bg-gray-200"
            }`}
          >
            Commercial
          </button>
          <button
            onClick={() => handleFilterChange("industrial")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedFilter === "industrial"
                ? "bg-[#FF9500] text-white"
                : "bg-gray-200"
            }`}
          >
            Industrial
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-96 md:h-[32rem] lg:h-[24rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-3 space-y-4 w-full mb-2">
                <h2 className="text-white text-2xl font-semibold">
                  {property.title}
                </h2>
                <p className="text-white text-[15px] font-light">
                  Village: {property.village}
                </p>
                <p className="text-white text-[15px] font-light">
                  Zone: {property.zone}
                </p>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-white text-2xl font-medium">
                    {property.FP} {/* Assuming FP is the price */}
                  </div>
                  <div className="ml-auto">
                    <button className="bg-white text-black text-[12px] px-3 py-2 rounded-full hover:bg-gray-200 transition shadow-md">
                      <Link href={`/Properties/${property._id}`}>
                      View Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyProperties;
