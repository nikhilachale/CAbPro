import React from "react";

import bg from '../images/bggg.png';
import Form from "./Form";

const HeroSection = () => {
  return (
    <section
      className="h-fit flex flex-col items-center px-6 md:px-20 text-white text-center bg-blue-950 bg-cover bg-center relative overflow-hidden"
    >
      {/* Hero Text Section */}
      <div className="text-center mb-10">
        <h4 className="text-xl md:text-2xl font-semibold">Explore India</h4>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">Start Planning Your Dream Trip Today!</h1>
        <p className="text-sm md:text-base font-thin mt-2">
          We provide one-way and round-trip outstation cab services across India.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full  pb-10 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            <Form />
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <img src={bg} alt="Background" className="w-full max-w-md md:max-w-lg rounded-lg shadow-md" />
          <h2 className="text-2xl md:text-3xl font-bold mt-6">Affordable Cab Service</h2>
          <p className="text-base md:text-lg mt-2">Your destination awaits!</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
