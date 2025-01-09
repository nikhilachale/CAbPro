import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-blue-950 text-white shadow-md rounded-3xl p-8 text-center flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white mt-4 mb-6">{description}</p>
     
    </div>
  );
};

export default ServiceCard;