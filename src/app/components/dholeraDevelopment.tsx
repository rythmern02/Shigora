// pages/dholera-development.tsx
import React from 'react';

const DholeraDevelopment: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center  sm:min-h-full  md:min-h-full bg-gray-50 p-4 sm:p-8 mt-16">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 text-center">
        Dholera Current Development Work
      </h1>

      {/* Video Player */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl flex justify-center">
      <div className="border-8 border-black">
        <video className="w-full h-auto" controls>
          <source src="/dholera.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </div>
  );
};

export default DholeraDevelopment;
