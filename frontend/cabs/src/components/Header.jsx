import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-950 text-white flex items-center justify-between px-8 py-4">
      <h1 className="text-3xl font-bold">ProCabs</h1>
      <nav className="flex space-x-6">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
      <button className="bg-white hover:bg-blue-700 text-blue-950 font-bold py-2 px-4 rounded">
        Call Now
      </button>
    </div>
  );
};

export default Header;