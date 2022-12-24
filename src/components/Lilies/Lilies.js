import React from "react";
import LiliesNav from "./LiliesNav/LiliesNav";

import "./Lilies.css";
import Dashboard from "./Dashboard/Dashboard";

const Lilies = () => {
  return (
    <section id="lilies-container">
      <LiliesNav />
      <Dashboard />
    </section>
  );
};

export default Lilies;
