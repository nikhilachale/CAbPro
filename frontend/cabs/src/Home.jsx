import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import CarSection from "./components/CarSection";
import PlacesContainer from "./components/PlacesContainer";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/AboutUs";
import Whatsapp from "./components/Whatsapp";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CarSection />
      <PlacesContainer />
      <Testimonial />
      <AboutUs />
      <Whatsapp />
    </>
  );
}

export default Home;
