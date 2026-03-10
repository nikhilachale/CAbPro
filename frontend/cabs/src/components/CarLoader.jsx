import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";

const CarLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="relative h-24 w-full max-w-[420px] overflow-hidden px-4">
        <div className="absolute left-4 right-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-200" />
        <div className="absolute left-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-orange-500 animate-line-grow" />
        <FaCarSide className="absolute z-20 text-5xl text-orange-500 animate-car-move" />
      </div>
    </div>
  );
};

export default CarLoader;
