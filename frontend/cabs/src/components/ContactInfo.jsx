import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="page-section pt-28 md:pt-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl card-surface overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-8 text-white sm:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight">Contact TheCabBro</h1>
            <p className="mt-2 text-sm text-orange-50 sm:text-base">
              Book your next ride or get support from our team.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm leading-relaxed text-slate-600">
                TheCabBro offers reliable local and outstation cab services with professional drivers and clean vehicles.
                We focus on safe travel, transparent pricing, and responsive support.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-center gap-3 text-slate-700">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:thecabbro@gmail.com" className="font-semibold hover:text-orange-600">
                  thecabbro@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3 text-slate-700">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+919111034494" className="font-semibold hover:text-orange-600">
                  +91 9111034494
                </a>
              </p>
              <p className="flex items-start gap-3 text-slate-700">
                <MapPin className="mt-0.5 h-5 w-5 text-orange-500" />
                76, Greater Tirupati Apartment, Geeta Bhawan, Indore, 452001
              </p>
            </div>

            <a href="tel:+919111034494" className="btn-primary w-full sm:w-auto">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
