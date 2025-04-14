import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';

const CarLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-full max-w-[400px] h-24 overflow-hidden">
        
        {/* Static gray road */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2 z-0" />

        {/* Blue progress line */}
        <div className="absolute top-1/2 left-0 h-1 bg-blue-800 z-10 transform -translate-y-1/2 animate-line-grow origin-left" />

        {/* Moving Car */}
        <FaCarSide className="text-blue-800 text-5xl absolute z-20 animate-car-move" />
      </div>
    </div>
  );
};

export default CarLoader;