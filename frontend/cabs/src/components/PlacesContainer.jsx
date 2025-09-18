import React from "react";
import PlaceCard from "./PlaceCard";

import Maheshwar from "../images/maheshwar.jpg";
import Ujjain from "../images/ujjain.jpg";
import Omk from "../images/omkareshwar.jpg";
import JamGate from "../images/jamgate.jpg";
import Patalpani from "../images/patalpani.jpg";
import Rajwada from "../images/rajwada.jpg";
import India from "../images/india.png";

const PlacesContainer = () => {
  const places = [
    { name: "Maheshwar", image: Maheshwar },
    { name: "Mahakal Ujjain", image: Ujjain },
    { name: "Omkareshwar", image: Omk },
    { name: "Rajwada", image: Rajwada },
    { name: "Jam Gate", image: JamGate },
    { name: "PatalPani", image: Patalpani },
    { name: "Pan India", image: India },
  ];

  return (
    <section id="places" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore <span className="text-[#e57c35]">Places</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover top destinations and beautiful getaways. Travel beyond city limits with TheCabBro.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <PlaceCard key={index} image={place.image} name={place.name} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            More destinations coming soon. Stay tuned!
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200">
            View All Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacesContainer;