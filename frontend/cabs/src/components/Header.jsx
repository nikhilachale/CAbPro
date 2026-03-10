import { memo, useCallback, useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../images/optimized/brand-logo.webp";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
    isActive ? "bg-orange-50 text-orange-600" : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
  }`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="TheCabBro Home">
            <img
              src={Logo}
              alt="TheCabBro"
              width="160"
              height="66"
              fetchPriority="high"
              decoding="async"
              className="h-11 w-auto"
            />
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={navLinkClass}
                  onClick={closeMenu}
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

export default memo(Header);
