import React from "react";
import Mini from "../images/optimized/mini.webp";
import Sedan from "../images/optimized/sedan.webp";
import Suv from "../images/optimized/suv.webp";
import Luxury from "../images/optimized/luxury.webp";
import CarCard from "./CarCard";

const cars = [
  {
    title: "Mini",
    image: Mini,
    description: "Compact and efficient for quick city rides and solo commuting.",
    price: "10",
    capacity: "3-4 passengers",
  },
  {
    title: "Sedan",
    image: Sedan,
    description: "Comfortable everyday ride for families and business travel.",
    price: "11",
    capacity: "3-4 passengers",
  },
  {
    title: "SUV",
    image: Suv,
    description: "Spacious option for group travel and outstation convenience.",
    price: "15",
    capacity: "5-6 passengers",
  },
  {
    title: "MUV",
    image: Luxury,
    description: "Premium comfort with extra room for long-distance trips.",
    price: "14",
    capacity: "7-8 passengers",
  },
];

const CarSection = () => {
  return (
    <section id="fleet" className="page-section">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Fleet options</span>
          <h2 className="section-title">Choose the right car for your journey</h2>
          <p className="section-subtitle mx-auto">
            From compact cabs to premium multi-seaters, every vehicle is maintained for safety and comfort.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <CarCard
              key={car.title}
              title={car.title}
              image={car.image}
              description={car.description}
              price={car.price}
              capacity={car.capacity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarSection;
