import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/bg.png";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors duration-200 ${
    isActive ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
  }`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="TheCabBro Home">
            <img src={Logo} alt="TheCabBro" className="h-11 w-auto" />
            
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="tel:+919111034494" className="btn-primary gap-2">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell py-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={navLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a href="tel:+919111034494" className="btn-primary mt-4 w-full gap-2">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
