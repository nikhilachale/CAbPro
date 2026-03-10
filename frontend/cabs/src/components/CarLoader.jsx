import { CarFront } from "lucide-react";
import { useEffect, useState } from "react";

const LOADER_SESSION_KEY = "cabs-loader-seen";

const CarLoader = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      return sessionStorage.getItem(LOADER_SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) {
      return undefined;
    }
    const timer = setTimeout(() => setShow(false), 700);
    try {
      sessionStorage.setItem(LOADER_SESSION_KEY, "1");
    } catch {
      // Ignore write errors and keep loader behavior functional.
    }
    return () => clearTimeout(timer);
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="relative h-24 w-full max-w-[420px] overflow-hidden px-4">
        <div className="absolute left-4 right-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-200" />
        <div className="absolute left-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-orange-500 animate-line-grow" />
        <CarFront className="absolute z-20 h-12 w-12 text-orange-500 animate-car-move" />
      </div>
    </div>
  );
};

export default CarLoader;
