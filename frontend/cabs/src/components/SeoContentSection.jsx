import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SeoContentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page-section bg-white/70" id="travel-guide" aria-labelledby="travel-guide-title">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl">
          <details
            className="card-surface p-5 sm:p-6"
            id="travel-guide-details"
            open={isOpen}
            onToggle={(event) => setIsOpen(event.currentTarget.open)}
          >
            <summary className="cursor-pointer list-none select-none">
              <span className="section-kicker">Travel guide</span>
              <h2 id="travel-guide-title" className="section-title">
                Cab Booking in Indore: Local, Airport, and Outstation Guide
              </h2>
              <span
                className={`mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isOpen
                    ? "border-orange-300 bg-orange-100 text-orange-700"
                    : "animate-breathe border-orange-300 bg-orange-50 text-orange-700 shadow-sm shadow-orange-100"
                }`}
              >
                {isOpen ? "Collapse guide" : "Expand guide"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </span>
            </summary>

            <div className="mt-4 space-y-6 border-t border-slate-200 pt-5">
              <p className="text-base leading-relaxed text-slate-700">
                Choosing the right taxi service in Indore is usually a balance between budget, timing, comfort, and
                driver reliability. TheCabBro is built around this exact need. We support day-to-day city commutes,
                station and airport transfers, one-way intercity travel, and full-day trip planning with practical
                route support. Whether you are booking a quick local ride or planning a long route for family travel,
                our booking process helps you confirm details early and reduce last-minute confusion.
              </p>

              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">Local Cab Service Across Indore</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  Local taxi bookings are common for office commutes, medical appointments, shopping runs, and planned
                  business movement across the city. Our drivers are trained for punctual pickups and route-aware
                  travel so riders can avoid unnecessary wait time in busy zones. We cover key residential and
                  commercial pockets of Indore and coordinate clearly on pickup points, especially in areas where
                  narrow lanes or crowd movement can slow down boarding.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Airport and Railway Transfer Support
                </h3>
                <h4 className="mt-3 text-lg font-bold text-slate-900">How pickup coordination works</h4>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  For airport and station rides, timing and communication matter more than anything else. We recommend
                  advance booking with travel time details so pickup windows can be aligned correctly. On arrival
                  pickups, riders receive clear communication for meeting point coordination. This reduces confusion in
                  high-footfall zones and helps maintain a smoother pickup experience for both passengers and drivers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Outstation Taxi Routes from Indore
                </h3>
                <h4 className="mt-3 text-lg font-bold text-slate-900">Popular one-way and round-trip options</h4>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  Frequently booked routes include Ujjain, Omkareshwar, Maheshwar, Rajwada, Jam Gate, and nearby
                  weekend destinations. Depending on passenger count and luggage requirements, travelers can choose
                  Mini, Sedan, SUV, or MUV options. For family travel and longer route duration, spacious categories
                  are generally preferred. For individual or couple travel, compact or sedan options remain practical.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Pricing, Safety, and Driver Quality
                </h3>
                <h4 className="mt-3 text-lg font-bold text-slate-900">What is included in fare communication</h4>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  Our service keeps fare communication straightforward so riders understand booking details before trip
                  confirmation. We focus on verified drivers, clean cabs, and consistent support. Passengers booking
                  for elders, children, or business guests often prioritize reliability over aggressive discounting,
                  and our model is designed around that expectation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">How to Book Faster</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  For a quick booking response, share your name, mobile number, pickup location, drop location, date,
                  and preferred cab type. If your travel is time-sensitive, calling directly is the fastest path to
                  confirmation. For future travel, advance booking helps us assign the right vehicle category and
                  reduce rush-hour delays. This approach keeps booking simple while improving on-time ride
                  coordination.
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default SeoContentSection;
