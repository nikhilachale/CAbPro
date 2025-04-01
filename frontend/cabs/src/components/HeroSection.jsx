import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


import Form from "./Form";

const HeroSection = () => {
  
  

  return (
    <section
      
      className="h-fit flex flex-col items-center px-6 md:px-20 text-white text-center bg-blue-950 bg-cover bg-center relative overflow-hidden"
    >
      <div className="text-center mb-6">
        <h4 className="text-xl md:text-2xl font-semibold">Explore India</h4>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">Start Planning Your Dream Trip Today!</h1>
        <p className="text-sm md:text-base font-thin mt-2">We provide one way and Round trip outstation cab accross India.</p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <Form />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
        
          <h2 className="text-3xl md:text-4xl font-bold mt-10">Affordable Cab Service</h2>
          <p className="text-lg mt-2">Your destination awaits!</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
