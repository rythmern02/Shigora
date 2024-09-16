"use client";
import { useState, useEffect } from "react";
import "./imageSyles.css";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  // Automatically move to the next image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 4000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [images.length]);

  const nextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const prevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  return (
    <section
      aria-label="Image Slider" className="mt-16"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "75vh",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <div
            key={url}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{
              width: "100%",
              height: "100%",
              transform: `translateX(${-100 * imageIndex}%)`,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              transition: "transform 2s ease",
            }}
          >
            <img
              src={url}
              alt={alt}
              style={{ visibility: 'hidden' }} // This keeps the <img> for accessibility, but makes it invisible
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >

        <ArrowLeftIcon width={50} color="gray" className="mt-[15rem] opacity-50"/>
      </button>
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          border: "none",
          right: "0px",
          cursor: "pointer",
        }}
      >
        <ArrowRightIcon width={50} color="gray" className="mt-[15rem] opacity-50"/>
      </button>
    </section>
  );
}
