"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mob_Number: "",
    email: "",
    message: "",
  });
  const router = useRouter();
  const [result, setResult] = useState("");

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("mob_Number", String(formData.mob_Number));
      form.append("email", formData.email);
      form.append("message", formData.message);

      const res = await fetch("/api/ContactUs", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        const result = await res.json();
        Swal.fire({
          title: "Success",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonColor: "#FF9500",
        });
        setResult("Form Submitted Successfully");
        setFormData({
          name: "",
          mob_Number: "",
          email: "",
          message: "",
        });
        router.push("/"); // Redirect to a thank-you page if necessary
      } else {
        const errorData = await res.json();
        console.log("got error", errorData)
        Swal.fire({
          title: "Error",
          text: errorData.error,
          icon: "error",
          confirmButtonColor: "#FF9500",
        });
        setResult(errorData.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      console.log("got the error", error)
      Swal.fire({
        title: "Error",
        text: "An error occurred while submitting the form.",
        icon: "error",
        confirmButtonColor: "#FF9500",
      });
      setResult("An error occurred");
    }
  };

  return (
    <section className="relative bg-cover bg-center pt-12 lg:py-24 w-screen">
      <div className="text-center text-white">
        <div
          style={{ backgroundImage: `url('/woody.png')` }}
          className="h-[20vh] w-full text-center flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold text-[#FF9500] mb-4">
            Don&#39;t Know What To Start With?
          </h3>
          <h1 className="text-4xl font-bold mb-8">
            Contact Us For More Information
          </h1>
        </div>

        <div className="bg-white max-w-2xl mx-auto p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-[#FF9500] mb-6 text-center">
            Free Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 text-black">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
              />
            </div>
            <div>
              <input
                type="number"
                name="mob_Number"
                placeholder="Enter Phone Number"
                value={formData.mob_Number}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] h-32"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#FF9500] text-white py-3 rounded-lg font-semibold hover:bg-[#FF9500] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            {result && <p>{result}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
