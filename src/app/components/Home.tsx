import React from "react";
import Image from "next/image";
import { ImageSlider } from "./ImageSlider";

const HomePage = () => {
  const IMAGES = [
    { url: "/room1.png", alt: "room 1" },
    { url: "/room2.png", alt: "Room 2" },
    { url: "/room1.png", alt: "Car Three" },
    { url: "/room2.png", alt: "Car Four" },
    { url: "/room1.png", alt: "Car Five" },
    { url: "/abcd.png", alt: "Car Five" },
  ];
  return (
    <div className="relative w-full h-[50vh]">
      <ImageSlider images={IMAGES} />
     </div>
  );
};

export default HomePage;
