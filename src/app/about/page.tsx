import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="xl:min-h-full bg-offWhite text-deepBrown">
      <div className="max-w-7xl mx-auto py-10 px-0 md:px-12 ">
        {/* <!-- About Us Section --> */}
        <section className="bg-white py-10 px-5 md:px-20 flex flex-col md:flex-row items-center gap-10">
          {/* <!-- Images Section --> */}
          <div className="flex flex-col gap-5">
            <img
              src="room1.png"
              alt="Dholera Smart City Image 1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />

            <img
              src="room2.png"
              alt="Dholera Smart City Image 2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />

          </div>

          {/* <!-- Text Section --> */}
          <div className="text-left md:max-w-md lg:max-w-lg">
            {/* <!-- Title --> */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Shigora
            </h2>

            {/* <!-- Description --> */}
            <p className="text-gray-600 mb-4">
              <strong>Shigora</strong> stands at the forefront of real estate in Dholera SIR – India&apos;s groundbreaking Greenfield smart city. Specializing in residential, industrial, and commercial land transactions, we offer exceptional service and expert guidance to navigate Dholera&apos;s dynamic property market.
            </p>

            {/* <!-- Residential Land Description --> */}
            <p className="text-gray-600 mb-4">
              <strong>Residential Land and Plot:</strong> Whether you&apos;re eyeing a plot for future development or searching for the perfect site to build your dream home, Shigora presents a diverse array of residential land options tailored to your vision.
            </p>

            {/* <!-- Commercial Land Description --> */}
            <p className="text-gray-600 mb-4">
              <strong>Commercial Land:</strong> From vibrant retail spaces to state-of-the-art office complexes, Shigora excels in facilitating commercial land transactions, ensuring businesses secure prime locations within the thriving Dholera Smart City.
            </p>

            {/* <!-- Industrial Land Description --> */}
            <p className="text-gray-600 mb-4">
              <strong>Industrial Land:</strong>  As Dholera Smart City emerges as a hub of industrial growth, Shigora is your partner in identifying and acquiring strategic industrial land, complete with optimal infrastructure and growth potential for your enterprise.
            </p>
             {/* <!-- Industrial Land Description --> */}
            <p className="text-gray-600 mb-4">
             <strong>Tourism Land:</strong>
With Dholera SIR poised to become a tourism hotspot, Shigora helps investors capitalize on this growth by providing access to prime tourism land for hotels, resorts, and other tourism-driven developments, setting the stage for high returns.
</p>
   <p className="text-gray-600 mb-4">         
 <strong>Sports and Recreation Land:</strong>
As part of a forward-thinking city, Dholera offers abundant opportunities for sports and recreational projects. Shigora assists clients in acquiring land specifically for the development of sports complexes, arenas, and recreational facilities, enabling you to contribute to the city's vibrant lifestyle and wellness infrastructure.
</p>
            {/* <!-- Read More Button --> */}
            <Link
              href="/about-us"
              className="bg-[#FF9500] text-white py-2 px-6 rounded-lg font-semibold mt-4 hover:bg-[#b5771b]"
            >
              READ MORE{" "}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
