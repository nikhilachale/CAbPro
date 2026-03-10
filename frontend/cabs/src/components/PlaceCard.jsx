import React from "react";

const PlaceCard = ({ image, name }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_14px_36px_-24px_rgba(15,23,42,0.6)]">
      <img
        src={image}
        alt={name}
        width="800"
        height="560"
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
    </article>
  );
};

export default PlaceCard;
