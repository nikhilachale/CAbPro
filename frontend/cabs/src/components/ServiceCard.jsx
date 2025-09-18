import React from "react";
import { Briefcase, Navigation, MapPinned, Plane } from "lucide-react";

const icons = {
  "Corporate Services": <Briefcase className="h-6 w-6" />,
  "One-way Trip": <Navigation className="h-6 w-6" />,
  "Local Cab": <MapPinned className="h-6 w-6" />,
  "Airport Transfer": <Plane className="h-6 w-6" />,
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-orange-300 p-6 text-center flex flex-col items-center">
      <div className="bg-orange-100 text-[#e57c35] p-3 inline-flex rounded-full mb-4">
        {icons[title]}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default ServiceCard;