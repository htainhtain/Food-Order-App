import React from "react";

import logo from "../../../assets/img/navbar/logo.png";

import "./Logo.css";

const Logo = () => {
  return (
    <li className="logo-img-container">
      <img src={logo} alt="Lilies logo" className="logo" />
    </li>
  );
};

export default Logo;
