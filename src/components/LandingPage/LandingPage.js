import React from "react";
import Footer from "./Footer/Footer";

import Hero from "./Hero/Hero";

import "./LandingPage.css";
import Navbar from "./Navbar/Navbar";
import Notify from "./Notify/Notify";
import SpecialMeals from "./SpecialMeals/SpecialMeals";

const LandingPage = () => {
  return (
    <section id="landing-page-container">
      <Navbar />
      <Hero />
      <SpecialMeals />
      <Notify />
      <Footer />
    </section>
  );
};

export default LandingPage;
