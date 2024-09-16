"use client";
import { useEffect, useState } from "react";

// Define the type for a single property
interface BuyProperty {
  _id: string;
  title: string;
  imageUrl: string;
  infoUrl: string; // Include any additional fields you need
  FP: string;
  village: string;
  zone: string;
  tag: string;
}

const PropertyDetails: React.FC = ({ params }: any) => {
  const [property, setProperty] = useState<BuyProperty | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const res = await fetch("/api/BuyProperties"); // Fetch all properties
        if (res.ok) {
          const data = await res.json();
          // Filter the specific property based on params.id
          const filteredProperty = data.properties.find(
            (prop: BuyProperty) => prop._id === params.id
          );
          console.log(filteredProperty)
          if (filteredProperty) {
            setProperty(filteredProperty);
          } else {
            setErrorMessage("Property not found.");
          }
        } else {
          setErrorMessage("Failed to fetch properties.");
        }
      } catch (error) {
        setErrorMessage("An error occurred while fetching property details.");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPropertyDetails();
    }
  }, [params.id]);

  if (loading) {
    return <p className="mt-24">Loading...</p>;
  }

  if (errorMessage) {
    return <p className="mt-24">{errorMessage}</p>;
  }

  if (!property) {
    return <p className="mt-24">No property found.</p>;
  }

  return (
    <div className="p-8 mt-24 w-full h-full self-center flex justify-center items-center">
        <img src={`${property.infoUrl}`}/> 
    </div>
  );
};

export default PropertyDetails;
