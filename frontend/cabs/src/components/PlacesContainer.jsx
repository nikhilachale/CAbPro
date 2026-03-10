import React from "react";
import PlaceCard from "./PlaceCard";
import Maheshwar from "../images/optimized/maheshwar.webp";
import Ujjain from "../images/optimized/ujjain.webp";
import Omk from "../images/optimized/omkareshwar.webp";
import JamGate from "../images/optimized/jamgate.webp";
import Patalpani from "../images/optimized/patalpani.webp";
import Rajwada from "../images/optimized/rajwada.webp";
import India from "../images/optimized/india.webp";

const places = [
  { name: "Maheshwar", image: Maheshwar },
  { name: "Mahakal Ujjain", image: Ujjain },
  { name: "Omkareshwar", image: Omk },
  { name: "Rajwada", image: Rajwada },
  { name: "Jam Gate", image: JamGate },
  { name: "Patalpani", image: Patalpani },
  { name: "Pan India", image: India },
];

const PlacesContainer = () => {
  return (
    <section id="places" className="page-section">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Popular routes</span>
          <h2 className="section-title">Explore nearby destinations</h2>
          <p className="section-subtitle mx-auto">
            Weekend escapes, pilgrimage routes, and city sightseeing with dependable outstation cabs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {places.map((place) => (
            <PlaceCard key={place.name} image={place.image} name={place.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesContainer;
