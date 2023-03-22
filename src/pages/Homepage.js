import React from "react";
import DiscountSection from "../components/DiscountSection";
import DiscoverSection from "../components/Discover/DiscoverSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import TopSeller from "../components/TopSeller";

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      <Info />
      <DiscountSection />
      <TopSeller />
      <Footer />
    </div>
  );
}

export default Homepage;
