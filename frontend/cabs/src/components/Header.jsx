

import React, { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
import Logo from '../images/LOGO.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          

         <div className="flex-shrink-0">
  <img src={Logo} alt="Company Logo" className="h-14 w-auto" />
</div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`font-medium transition-colors duration-200 hover:text-yellow-500 ${
                  scrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 shadow-sm">
              Book Now
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-gray-900' : 'text-gray-800'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Services', 'About', 'Cities', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 shadow-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;