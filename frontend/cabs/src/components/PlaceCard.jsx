import React from "react";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PlaceCard = ({ place, index = 0 }) => {
  const { image, name, slug, category, travel } = place;
  const animationDelay = `${Math.min(index * 90, 700)}ms`;

  return (
    <Link
      to={`/places/${slug}`}
      className="group card-surface animate-fade-up block overflow-hidden border-slate-200/80 bg-white hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.55)]"
      style={{ animationDelay }}
    >
      <article>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            width="800"
            height="560"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
          <div className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/20 opacity-0 blur-sm transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
          <div className="absolute left-3 top-3 inline-flex rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-orange-700">
            {category}
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="text-lg font-extrabold text-slate-900 sm:text-[1.15rem]">{name}</h3>

          <div className="mt-3 space-y-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-orange-500" />
              {travel.distance}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 text-orange-500" />
              {travel.duration}
            </p>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition-transform duration-300 group-hover:translate-x-1">
            View route details
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PlaceCard;
