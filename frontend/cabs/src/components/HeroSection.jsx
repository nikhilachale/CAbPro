import React from "react";
import { CheckCircle2, Star, ShieldCheck, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const highlights = [
  "Professional chauffeurs",
  "Transparent pricing",
  "Clean, verified vehicles",
];

const stats = [
  { label: "Avg. Rating", value: "4.9", icon: Star },
  { label: "On-Time Rides", value: "98%", icon: Clock3 },
  { label: "Safe Trips", value: "24/7", icon: ShieldCheck },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-100 blur-3xl" />
      </div>

      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="section-kicker">Premium city taxi service</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Reliable rides for daily travel and outstation trips.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              TheCabBro gives you fast pickups, courteous drivers, and well-maintained cars for local, airport,
              and one-way travel.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" onClick={() => navigate("/contact")} className="btn-primary">
                Book Your Ride
              </button>
              <button type="button" onClick={() => navigate("/reviews")} className="btn-secondary">
                See Reviews
              </button>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="card-surface p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-orange-50 p-2 text-orange-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-xl font-extrabold text-slate-900">{item.value}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
