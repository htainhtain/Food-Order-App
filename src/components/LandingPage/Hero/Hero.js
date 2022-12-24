import React from "react";

import googleImg from "../../../assets/img/hero/google-play.png";
import appStoreImg from "../../../assets/img/hero/app-store.png";
import foodImg from "../../../assets/img/hero/food.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero-container">
      <div className="hero">
        <div className="hero-description">
          <main>
            <header>
              <h2 className="hero-title">
                Order <span className="hero-title-yellow">food</span> anytime,
                anywhere
              </h2>
            </header>
            <p className="hero-description-description">
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
          </main>
          <div className="hero-apps-link">
            <a
              className="app-container"
              href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Dec0321&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-th-1003227-med-hasem-py-Evergreen-Dec0321-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059099544499_creativeid_482770967430_device_c&gclid=CjwKCAiAnZCdBhBmEiwA8nDQxSSK2g0aOUX--l56oldfzyLWALz6tmYeo97Thbs_vDsPICd6v6OYbRoC56AQAvD_BwE&gclsrc=aw.ds&pli=1"
            >
              <img src={googleImg} alt="google play" className="app-img" />
            </a>
            <a
              className="app-container"
              href="https://www.apple.com/th/app-store/"
            >
              <img src={appStoreImg} alt="play store" className="app-img" />
            </a>
          </div>
        </div>

        <figure className="hero-img-container">
          <img src={foodImg} alt="noodle-food" className="hero-img" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
