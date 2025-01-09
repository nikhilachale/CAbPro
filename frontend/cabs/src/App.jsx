

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CarSection from "./components/CarSection";
import ServicesSection from "./components/ServiceSection";
import PlacesContainer from "./components/PlacesContainer";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ReviewsPage from "./components/ ReviewsPage";




function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection/>
      <CarSection />

      <PlacesContainer/>
      <AboutUs/>

     <ReviewsPage/>


      
      <Footer/>
    </div>
  );
}

export default App;



