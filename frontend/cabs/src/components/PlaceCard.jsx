import React from "react";

const PlaceCard = ({ image, name }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent z-10"></div>

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Place name */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default PlaceCard;