import React from "react";

const ContactInfo = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden bg-white">
      <div className="text-neutral-900 p-10 rounded-2xl shadow-xl max-w-2xl mx-auto w-full flex flex-col justify-center items-center text-center space-y-8 transition-all duration-300">
        {/* Business Name */}
        <h1 className="text-4xl font-extrabold tracking-wide text-yellow-500">
          THE CAB BRO
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-neutral-700 leading-relaxed px-4">
          "TheCabBro offers affordable, reliable, and comfortable cab services for
          city and long-distance travel. With a well-maintained fleet and professional
          drivers, we ensure every ride is safe and pleasant — prioritizing customer
          satisfaction at every step."
        </p>

        {/* Contact Details */}
        <div className="text-left w-full md:w-4/5 space-y-4 text-neutral-800">
          <p>
            <span className="font-semibold">Email us at:</span>
            <a
              href="mailto:thecabbro@gmail.com"
              className="text-yellow-600 hover:underline ml-2"
            >
              thecabbro@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">Call us at:</span>
            <a
              href="tel:+919111034494"
              className="text-yellow-600 hover:underline ml-2"
            >
              +91 9111034494
            </a>
          </p>

          <p>
            <span className="font-semibold">Address:</span>{" "}
            76, Greater Tirupati Apartment, Geeta Bhawan, Indore, 452001
          </p>
        </div>

        {/* Call Now Button */}
        <a
  href="tel:+919111034494"
  className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg transition duration-300 text-lg font-semibold shadow-md animate-breathe"
>
  📞 Call Now
</a>
      </div>
    </div>
  );
};

export default ContactInfo;