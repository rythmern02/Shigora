import React from "react";
import Image from "next/image";
import Link from "next/link";
import SellLandForm from "./components/LandForm";
import SellResidentialForm from "./components/ResidentialForm";

const SellingPage: React.FC = () => {
  return (
    <main className="p-3 max-w-full  mt-20">
      {/* Banner Section */}
      <section
        className="bg-cover bg-center h-64 relative"
        style={{ backgroundImage: `url('/real-e.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Sell Properties</h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
            &quot;Dreams Rooted in Dholera: Your Ideal Plot Awaits. Build Your
              Tomorrow Today with Our Prime Residential Land Offerings! &quot;
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h3>
            <p className="text-lg font-bold text-[#FF9500]">
              Land Parcel Write Down And Send Us
            </p>
          </div>

          {/* First Form Section */}
          <div className="flex flex-wrap justify-center mt-8 px-5 md:px-20">
            {/* Image */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 self-center">
              <Image
                src="/room1.png"
                alt="Sell Land Plot"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            {/* Form */}
            <div className="w-full lg:w-1/2 rounded-lg px-10">
              <SellLandForm />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Plot Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h3>
            <p className="text-lg font-bold text-[FF9500]">
              Residential Plot Write Down And Send Us
            </p>
          </div>

          <div className="flex flex-wrap justify-center px-20">
            {/* Form */}
            <div className="w-full lg:w-1/2 p-6 rounded-lg mb-8 lg:mb-0 px-10">
              <SellResidentialForm />
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 self-center">
              <Image
                src="/room3.png"
                alt="Sell Residential Plot"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Main Office */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Main Office
              </h3>
              <p className="text-sm text-gray-600">Ahmedabad Gujarat</p>
              <p className="text-sm text-gray-600">
                A 905 mondel heights, SG Highway, Near NOVOTEL hotel, Ramdev
                Nagar, Ahmedabad 380015.
              </p>
            </div>

            {/* Make a Call */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Make a Call
              </h3>
              <p className="text-sm text-gray-600">+91 99819 96629 </p>
              <p className="text-sm text-gray-600">Mon - Sat: 09am - 08pm</p>
            </div>

            {/* Send a Mail */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Send a Mail
              </h3>
              <p className="text-sm text-gray-600">archnagrani@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg border-2"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default SellingPage;
