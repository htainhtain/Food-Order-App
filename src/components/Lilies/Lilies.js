import React, { useState } from "react";
import LiliesNav from "./LiliesNav/LiliesNav";

import "./Lilies.css";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Cart/Cart";

const Lilies = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartOpenHandler = () => {
    setCartIsOpen(true);
  };

  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <section id="lilies-container">
      {cartIsOpen && <Cart cartCloseHandler={cartCloseHandler} />}
      <LiliesNav />
      <Dashboard cartOpenHandler={cartOpenHandler} />
    </section>
  );
};

export default Lilies;
