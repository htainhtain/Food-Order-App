import React from "react";

import Logo from "../../UI/Logo/Logo";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar-container">
      <ul className="navbar">
        <header className="logo-container navbar-items">
          <Logo />
          <li>
            <header>
              <h1 className="navbar-title">Lilies</h1>
            </header>
          </li>
        </header>
        <div className="navbar-items">
          <li className="home-navbar">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/auth/login">Login</a>
          </li>
          <li className="signup-navbar">
            <a href="/auth/signup">Sign Up</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
