import React from "react";
import AboutImage from "../images/optimized/brand-logo.webp";

const AboutUs = () => {
  return (
    <section className="page-section">
      <div className="section-shell">
        <div className="card-surface grid items-center gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex justify-center">
            <img
              src={AboutImage}
              alt="TheCabBro"
              width="320"
              height="132"
              loading="lazy"
              decoding="async"
              className="h-auto w-56 max-w-full sm:w-72"
            />
          </div>

          <div>
            <span className="section-kicker">About TheCabBro</span>
            <h2 className="section-title">Trusted cab partner for city and outstation travel</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We provide affordable, comfortable, and dependable cab services with a focus on safety and punctuality.
              Our experienced drivers and maintained fleet ensure a smooth ride for every customer.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-3">
                <p className="text-xl font-extrabold text-orange-700">24/7</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-700/80">Support</p>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-3">
                <p className="text-xl font-extrabold text-orange-700">1000+</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-700/80">Happy riders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
