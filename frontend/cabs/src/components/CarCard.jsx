import React from "react";
import { Users, IndianRupee } from "lucide-react";

const CarCard = ({ title, image, description, price, capacity }) => {
  return (
    <article className="card-surface group overflow-hidden hover:-translate-y-1.5 hover:border-orange-200">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 px-5 py-4">
        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
      </div>

      <div className="p-5">
        <img
          src={image}
          alt={`${title} cab`}
          width="112"
          height="112"
          loading="lazy"
          decoding="async"
          className="mx-auto h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>

        <div className="mt-4 space-y-2 text-sm font-medium text-slate-700">
          <p className="flex items-center gap-2">
            <Users className="h-4 w-4 text-orange-500" />
            Capacity: {capacity}
          </p>
          <p className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-orange-500" />
            Starting at {price}/km
          </p>
        </div>

        <a href="tel:+919111034494" className="btn-primary mt-5 w-full">
          Book This Car
        </a>
      </div>
    </article>
  );
};

export default CarCard;
