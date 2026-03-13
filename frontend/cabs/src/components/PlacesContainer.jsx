import React from "react";
import PlaceCard from "./PlaceCard";
import { popularPlaces } from "../data/popularPlaces";

const PlacesContainer = () => {
  return (
    <section id="places" className="page-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="section-shell">
        <div className="animate-fade-up mx-auto max-w-2xl text-center">
          <span className="section-kicker">Popular routes from Indore</span>
          <h2 className="section-title">Explore nearby destinations</h2>
          <p className="section-subtitle mx-auto">
            Plan weekend escapes, pilgrimage rides, and outstation travel with route-specific details and reliable cab
            support.
          </p>
        </div>

        <div
          className="animate-fade-up mt-6 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
          style={{ animationDelay: "120ms" }}
        >
          {popularPlaces.length} curated routes with travel details
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularPlaces.map((place, index) => (
            <PlaceCard key={place.slug} place={place} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesContainer;
