import React from "react";
import AboutImage from "../images/cabbrologo1.png"; 


const AboutUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={AboutImage}
            alt="About TheCabBro"
            className="w-2/3 max-w-sm "
          />
        </div>
        {/* Right Side: Heading and Paragraph */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-blue-800">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <strong>TheCabBro</strong>, your trusted travel partner 
            committed to providing affordable, comfortable, and reliable cab 
            services. Whether you’re traveling within the city or planning a 
            long-distance journey, our fleet of well-maintained vehicles and 
            professional drivers ensure a safe and pleasant experience. 
            Customer satisfaction is at the core of everything we do, and we 
            strive to make every ride with us a memorable one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;