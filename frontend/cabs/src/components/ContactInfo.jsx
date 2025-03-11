import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white text-blue-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto min-h-[500px] flex flex-col justify-center items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
      {/* Business Name */}
      <h1 className="text-4xl font-bold">THE CAB BRO</h1>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        "TheCabBro offers affordable, reliable, and comfortable cab services for city 
        and long-distance travel. With a well-maintained fleet and professional 
        drivers, we ensure every ride is safe and pleasant, prioritizing customer 
        satisfaction at every step."
      </p>

      {/* Contact Details */}
      <div className="text-left w-full md:w-4/5 space-y-3">
        <p>
          <strong>Email us at:</strong> 
          <a href="mailto:thecabbro@gmail.com" className="text-blue-600 hover:underline ml-1">
            thecabbro@gmail.com
          </a>
        </p>

        <p>
          <strong>Call us at:</strong> 
          <a href="tel:+919111034494" className="text-blue-600 hover:underline ml-1">
            +91 9111034494
          </a>
        </p>

        <p>
          <strong>Address:</strong> 76,Greater Tirupati Apartment, Geeta Bhawan, Indore, 452001
        </p>
      </div>

      {/* Call Now Button */}
      <a
        href="tel:+919111034494"
        className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block text-lg md:text-xl"
      >
         Call Now
      </a>
    </div>
  );
};

export default ContactInfo;