import React from "react";

const CarCard = ({ title, image, description, price, capacity }) => {
  const handleCall = () => {
    window.location.href = "tel:+919111034494";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <img src={image} alt={`${title} Cab`} className="mx-auto mb-4 h-32 w-32 object-contain" />
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600 mb-4 font-bold">Capacity: {capacity}</p>
      {/* <p className="text-gray-600 mb-4">
        <span className="font-bold">Price:</span> {price}/km
      </p> */}
      <button
        onClick={handleCall}
        className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;