import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Round Trip",
      description:
        "Convenient round-trip rides for your travel needs. Enjoy hassle-free journeys with a return trip included.",
    },
    {
      title: "One-way Trip",
      description:
        "Affordable and flexible one-way cab services for your destination. Pay only for the distance traveled.",
    },
    {
      title: "Local Cab",
      description:
        "Reliable local cab services for errands, city tours, and daily commuting. Available at your doorstep.",
    },
    {
      title: "Airport Transfer",
      description:
        "On-time airport transfer services for seamless pickup and drop-off. Ideal for early morning or late-night flights.",
    },
  ];

  return (
    <section id="services" className="py-10 px-8">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;