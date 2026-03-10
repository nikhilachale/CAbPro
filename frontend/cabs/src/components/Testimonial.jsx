import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Delhi",
    rating: 5,
    comment:
      "TheCabBro service is extremely reliable and affordable. Booking a cab even in peak hours has never been this easy.",
  },
  {
    id: 2,
    name: "Raj Patel",
    location: "Ahmedabad",
    rating: 4,
    comment:
      "Smooth booking process, polite drivers, and very clean vehicles. Great support from the team whenever needed.",
  },
  {
    id: 3,
    name: "Meera Nair",
    location: "Kochi",
    rating: 5,
    comment:
      "Transparent pricing, no hidden charges, and safe rides always. I use TheCabBro for all my frequent travel.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    comment:
      "Professional drivers, timely pickups, and smooth long-distance rides. Consistently dependable service.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[currentIndex];

  return (
    <section className="page-section bg-slate-950 text-slate-100">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker border-orange-300 bg-orange-100/95 text-orange-700">Client feedback</span>
          <h2 className="section-title text-white">What our riders say</h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Real experiences from customers who trust us for local and outstation travel.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/85 p-6 shadow-2xl sm:p-8">
            <Quote className="h-8 w-8 text-orange-400" />
            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">"{active.comment}"</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-5">
              <div>
                <h3 className="text-lg font-bold text-white">{active.name}</h3>
                <p className="text-sm text-slate-400">{active.location}</p>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={`${active.id}-${idx}`}
                    className={`h-4 w-4 ${idx < active.rating ? "text-orange-400" : "text-slate-600"}`}
                    fill={idx < active.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          </article>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {testimonials.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === currentIndex ? "bg-orange-400" : "bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <button type="button" onClick={() => navigate("/reviews")} className="btn-primary">
              Add Your Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
