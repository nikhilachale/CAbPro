import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="text-xl font-extrabold text-white">THE CAB BRO</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
              Reliable and comfortable cab services for city commutes and outstation trips. We prioritize punctuality,
              safety, and a smooth customer experience.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 text-slate-300">
              <Mail className="h-4 w-4 text-orange-400" />
              <a href="mailto:thecabbro@gmail.com" className="hover:text-white">
                thecabbro@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <Phone className="h-4 w-4 text-orange-400" />
              <a href="tel:+919111034494" className="hover:text-white">
                +91 9111034494
              </a>
            </p>
            <p className="flex items-start gap-2 text-slate-300">
              <MapPin className="mt-0.5 h-4 w-4 text-orange-400" />
              76, Greater Tirupati Apartment, Geeta Bhawan, Indore, 452001
            </p>
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Follow us</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/thecabbro.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-slate-300 hover:bg-slate-900 hover:text-white"
                  aria-label="TheCabBro Instagram"
                >
                  <Instagram className="h-4 w-4 text-orange-400" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/thecab.bro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-slate-300 hover:bg-slate-900 hover:text-white"
                  aria-label="TheCabBro Facebook"
                >
                  <Facebook className="h-4 w-4 text-orange-400" />
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-slate-300 hover:bg-slate-900 hover:text-white"
                  aria-label="TheCabBro YouTube"
                >
                  <Youtube className="h-4 w-4 text-orange-400" />
                  YouTube
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-slate-300 hover:bg-slate-900 hover:text-white"
                  aria-label="TheCabBro X"
                >
                  <Twitter className="h-4 w-4 text-orange-400" />
                  X
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-slate-300 hover:bg-slate-900 hover:text-white"
                  aria-label="TheCabBro LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-orange-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-5 text-xs text-slate-500 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} TheCabBro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
