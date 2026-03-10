import { Suspense, lazy, memo } from "react";
import HeroSection from "./components/HeroSection";

const ServicesSection = lazy(() => import("./components/ServiceSection"));
const CarSection = lazy(() => import("./components/CarSection"));
const PlacesContainer = lazy(() => import("./components/PlacesContainer"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Whatsapp = lazy(() => import("./components/Whatsapp"));

const SectionFallback = () => (
  <section className="page-section">
    <div className="section-shell">
      <div className="h-28 rounded-2xl bg-slate-100" />
    </div>
  </section>
);

function Home() {
  return (
    <>
     <HeroSection />

      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
        <CarSection />
        <PlacesContainer />
        <Testimonial />
        <AboutUs />
        <Whatsapp />
      </Suspense>
    </>
  );
}

export default memo(Home);
