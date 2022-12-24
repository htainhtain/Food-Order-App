import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import googleImg from "../../../assets/img/hero/google-play.png";
import appStoreImg from "../../../assets/img/hero/app-store.png";

import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer-container">
      <div className="footer">
        <ul className="footer-list-container">
          <li className="footer-item-container">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </li>
          <li className="footer-item-container">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-list">
              <li>Help Center</li>
              <li>Safety Center</li>
            </ul>
          </li>
          <li className="footer-item-container">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-list">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Dispute resolution</li>
            </ul>
          </li>
          <li className="footer-item-container">
            <h4 className="footer-title">Install App</h4>
            <ul className="footer-list">
              <li>
                <a
                  className="app-container"
                  href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Dec0321&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-th-1003227-med-hasem-py-Evergreen-Dec0321-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059099544499_creativeid_482770967430_device_c&gclid=CjwKCAiAnZCdBhBmEiwA8nDQxSSK2g0aOUX--l56oldfzyLWALz6tmYeo97Thbs_vDsPICd6v6OYbRoC56AQAvD_BwE&gclsrc=aw.ds&pli=1"
                >
                  <img src={googleImg} alt="google play" className="app-img" />
                </a>
              </li>
              <li>
                <a
                  className="app-container"
                  href="https://www.apple.com/th/app-store/"
                >
                  <img src={appStoreImg} alt="play store" className="app-img" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="copyright-container">
        <div className="copyright">
          <p className="copyright-description">
            © 2021&#xA0;LILIES, All rights reserved
          </p>
          <div className="social-media-link-container">
            <div className="social-media-conatiner">
              <InstagramIcon />
            </div>
            <div className="social-media-conatiner">
              <TwitterIcon />
            </div>
            <div className="social-media-conatiner">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
