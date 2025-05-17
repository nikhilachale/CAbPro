import React from "react";
import AboutImage from "../images/LOGO.png"; 

const AboutUs = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={AboutImage}
            alt="About TheCabBro"
            className="w-2/3 max-w-sm"
          />
        </div>

        {/* Right Side: Heading and Paragraph */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg 	leading-loose bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
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