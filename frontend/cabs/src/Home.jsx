import React from 'react'

import HeroSection from "./components/HeroSection";
import CarSection from "./components/CarSection";
import ServicesSection from "./components/ServiceSection";
 import PlacesContainer from "./components/PlacesContainer";

import AboutUs from "./components/AboutUs";
import Testimonial from './components/Testimonial';
import Whatsapp from './components/Whatsapp';


function Home() {
  return (

    <>
    
    <HeroSection />
    <ServicesSection/>
     {/* Horizontal line for separation */}
      <div className="flex justify-center mt-20">
        <hr className="border-t-2 border-yellow-500 w-4/5" />
      </div>
    <CarSection />
    

    <PlacesContainer/>
<Testimonial/>
 <Whatsapp/>
    <AboutUs/>
  </>
  )
}

export default Home
