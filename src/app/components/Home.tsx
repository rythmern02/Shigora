import React from "react";
import Image from "next/image";
import { ImageSlider } from "./ImageSlider";

const HomePage = () => {
  const IMAGES = [
    { url: "/A.png", alt: "room 1" },
    { url: "/B.png", alt: "Room 2" },
    { url: "/C.png", alt: "Car Three" },
    { url: "/D.png", alt: "Car Four" },
    { url: "/E.png", alt: "Car Five" },
    { url: "/F.png", alt: "Car Five" },   
  ];
  return (
    <div className="relative w-full h-[50vh]">
      <ImageSlider images={IMAGES} />
     </div>
  );
};

export default HomePage;
