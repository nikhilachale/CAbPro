import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-400/40 to-yellow-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Section: Get in Touch and CABBro */}
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Get in Touch</h3>
            <p className="text-gray-700 mb-2">Email us at:</p>
            <p className="text-yellow-600">
              <a href="mailto:thebrocabs@gmail.com">thecabbro@gmail.com</a>
            </p>
            <p className="text-gray-700 mb-2 mt-4">Call us at:</p>
            <p className="text-yellow-600">
              <a href="tel:+919111034494">+919111034494</a>
            </p>
            <p className="text-gray-700 mb-2 mt-4">Address</p>
            <p className="text-yellow-600">
              <a href="https://www.thecabbro.com">76, Greater Tirupati Apartment, Geeta Bhawan, Indore, 452001</a>
            </p>
          </div>
          <div className="sm:ml-auto mt-6 sm:mt-0 w-full sm:w-1/3 text-left">
            <h3 className="text-lg font-semibold mb-3 text-yellow-500">
              <a href="https://www.thecabbro.com/">THE CAB BRO</a>
            </h3>
            <p className="text-sm text-gray-700">
              <strong>"TheCabBro"</strong> offers affordable, reliable, and comfortable cab services for city and long-distance travel. With a well-maintained fleet and professional drivers, we ensure every ride is safe and pleasant, prioritizing customer satisfaction at every step.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; 2024 TheCabBro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;