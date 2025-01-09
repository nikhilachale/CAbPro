import React from 'react'

import HeroSection from "./components/HeroSection";
import CarSection from "./components/CarSection";
import ServicesSection from "./components/ServiceSection";
import PlacesContainer from "./components/PlacesContainer";

import AboutUs from "./components/AboutUs";
import Testimonial from './components/Testimonial';

function Home() {
  return (
    <>
    <HeroSection />
    <ServicesSection/>
    <CarSection />

    <PlacesContainer/>
<Testimonial/>
    <AboutUs/>
  </>
  )
}

export default Home
