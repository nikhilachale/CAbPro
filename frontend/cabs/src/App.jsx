import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import CarSection from "./components/CarSection";
import PlacesContainer from "./components/PlacesContainer";
import AboutUs from "./components/AboutUs";
import ReviewsPage from "./components/ReviewsPage";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CarSection />
      <PlacesContainer />
      <AboutUs />
      <ReviewsPage />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
