import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Corporate Services",
    description:
      "Dedicated office commute solutions with dependable pick-ups, clean vehicles, and punctual drivers.",
  },
  {
    title: "One-way Trip",
    description:
      "Affordable one-way intercity rides with transparent rates and no unnecessary return-trip charges.",
  },
  {
    title: "Local Cab",
    description:
      "On-demand local rides for meetings, errands, and daily travel across the city.",
  },
  {
    title: "Airport Transfer",
    description:
      "Stress-free airport pickups and drops with real-time coordination and luggage-friendly cars.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="page-section">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Our services</span>
          <h2 className="section-title">Professional cab solutions for every trip</h2>
          <p className="section-subtitle mx-auto">
            Flexible service options designed for comfort, reliability, and timely arrivals.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
