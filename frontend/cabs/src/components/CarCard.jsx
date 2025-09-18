import React from "react";

const CarCard = ({ title, image, description, price, capacity }) => {
  const handleCall = () => {
    window.location.href = "tel:+919111034494";
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all  duration-300 hover:shadow-xl border border-gray-100 hover:border-orange-300 p-6 text-center flex flex-col items-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <img src={image} alt={`${title} Cab`} className="mx-auto mb-4 h-32 w-32 object-contain" />
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600 mb-4 font-bold">Capacity: {capacity}</p>
      <button
        onClick={handleCall}
        className="bg-[#e57c35] hover:bg-orange-600 text-white py-2 px-4 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;