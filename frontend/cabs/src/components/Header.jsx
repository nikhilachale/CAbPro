import React from "react";
import logo from "../images/cabbroo.png"

const Header = () => {
  return (
    <div className="bg-blue-950 text-white flex items-center justify-between px-4 sm:px-8 py-4">
      <h1 className="text-2xl sm:text-3xl font-bold">
        <a
          href="https://www.thecabbro.com"
          
          rel="noopener noreferrer"
          className="hover:underline"
        >
         <img src={logo} className="w-auto h-10"></img>
        </a>
      </h1>

      <a
        href="tel:+919111034494"
        className="bg-white hover:bg-blue-700 text-blue-950 font-bold py-2 px-4 rounded text-sm sm:text-base"
      >
        Call Now
      </a>
    </div>
  );
};

export default Header;