import React from "react";
import { Briefcase, Navigation, MapPinned, Plane } from "lucide-react";

const iconMap = {
  "Corporate Services": Briefcase,
  "One-way Trip": Navigation,
  "Local Cab": MapPinned,
  "Airport Transfer": Plane,
};

const ServiceCard = ({ title, description }) => {
  const Icon = iconMap[title] || Briefcase;

  return (
    <article className="card-surface group p-6 hover:-translate-y-1.5 hover:border-orange-200">
      <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-orange-600 transition-colors group-hover:bg-orange-100">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
};

export default ServiceCard;
