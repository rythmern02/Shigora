import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 mt-24">
      {/* <!-- About Us Section --> */}
      <section className="relative">
        {/* <!-- Top Banner Section --> */}
        <div className=" relative h-[23rem] bg-cover bg-no-repeat" style={{backgroundImage: `url("/real-e.png")`}}>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Image --> */}
            <div>
              <img
                src="room2.png"
                alt="Vishal Prajapati"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* <!-- Text Content --> */}
            <div>
              <h2 className="text-[#FF9500] text-lg font-semibold mb-2">
                Aiming to Be the Best
              </h2>
              <h1 className="text-3xl font-bold mb-6">Why choose us?</h1>

              <div className="mb-4">
                <h3 className="text-blue-600 text-xl font-semibold">
                  Personalized Property Solutions:
                </h3>
                <p className="text-gray-700">
                  At Shigora, we understand that every property transaction is unique. Our expert team listens to your specific requirements and offers tailored real estate solutions, ensuring that your goals are met with precision, whether you're buying, selling, or investing.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-blue-600 text-xl font-semibold">
                Clarity and Integrity:
                </h3>
                <p className="text-gray-700">
                 Transparency is at the heart of our service. We provide clear, concise information every step of the way, so you can make well-informed decisions with complete confidence, knowing that you're always getting an honest deal.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-blue-600 text-xl font-semibold">
Unwavering Commitment to Your Success:
                </h3>
                <p className="text-gray-700">
                At Shigora, we are not just focused on transactions; we are dedicated to creating lasting value for our clients. Whether you're in the market for commercial spaces, residential properties, or land investments, our commitment to excellence ensures that your experience is seamless and rewarding. Join us as we guide you through the ever-evolving real estate market, helping you turn opportunities into tangible success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Yellow Information Section --> */}
      <section className="bg-yellow-400 py-12 -mb-[10rem] lg:-mb-[3rem]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 pb-[3rem] ">
            Welcome Global Gateway To India
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <img
                src="1ST.png"
                alt="Icon 1"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h3 className="text-lg font-semibold">Invest in Growing Area</h3>
            </div>
            <div>
              <img
                src="2ND.png"
                alt="Icon 2"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h3 className="text-lg font-semibold">
                Best Connectivity at Place
              </h3>
            </div>
            <div>
              <img
                src="3RD.png"
                alt="Icon 3"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h3 className="text-lg font-semibold">
                Prime Location of Future Development
              </h3>
            </div>
            <div>
              <img
                src="4TH.png"
                alt="Icon 4"
                className="mx-auto mb-2 w-12 h-12"
              />
              <h3 className="text-lg font-semibold">All Legality Perfect</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
