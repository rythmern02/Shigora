import About from "./about/page";
import DholeraDevelopment from "./components/dholeraDevelopment";
import HomePage from "./components/Home";
import Contact from "./contact/page";
import DholeraMap from "./dholeramap/page";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HomePage />
        {/* <!-- Quote Section --> */}
        <div className="relative py-20 mt-[9rem]  md:py-15  px-5 md:px-20 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-5 md:p-10 max-w-3xl text-center">
            <h3 className="text-[#FF9500] font-semibold text-lg md:text-xl mb-2">
              Shigora Properties
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              &quot;Your premier choice for exceptional investment in DHOLERA SMART CITY. &quot;
            </p>
          </div>
        </div>
        {/* </section> */}
        {/* <!-- Section for Dholera Smart City Properties --> */}
        <section className="bg-black py-6 px-4 text-center text-white w-screen">
          {/* <!-- Title --> */}
          <h2 className="text-2xl md:text-3xl  font-bold text-[#FF9500] mb-4">
            Shigora Properties Provide All Types of Plots in Dholera Smart City
          </h2>

          {/* <!-- Subtitle --> */}
          <p className="max-w-2xl mx-auto text-lg mb-10">
          Investing smartly means seeking maximum returns with minimal risk. Real estate stands out as a superior choice, offering higher returns and stability compared to stocks, equities, mutual funds, and gold.
          </p>

          {/* <!-- Property Types Section --> */}
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {/* <!-- Residential Land Card --> */}
            <div className="flex flex-col items-center">
              <img
                src="residential.jpg"
                alt="Residential Land"
                className="w-[250px] h-[250px] object-contain mb-4"
              />
              {/* <!-- Replace with the actual image path --> */}
              <a href="#" className="text-lg font-semibold underline">
                Residential Land
              </a>
            </div>

            {/* <!-- Commercial Land Card --> */}
            <div className="flex flex-col items-center">
              <img
                src="commercial.jpg"
                alt="Commercial Land"
                className="w-[250px] h-[250px] object-contain mb-4"
              />
              {/* <!-- Replace with the actual image path --> */}
              <a href="#" className="text-lg font-semibold underline">
                Commercial Land
              </a>
            </div>

            {/* <!-- Industrial Land Card --> */}
            <div className="flex flex-col items-center">
              <img
                src="industrial.jpg"
                alt="Industrial Land"
                className="w-[250px] h-[250px] object-contain mb-4"
              />
              {/* <!-- Replace with the actual image path --> */}
              <a href="#" className="text-lg font-semibold underline">
                Industrial Land
              </a>
            </div>
          </div>
        </section>

        <About />

        <DholeraMap />
        <DholeraDevelopment/>
        <Contact />
      </main>
    </div>
  );
}
