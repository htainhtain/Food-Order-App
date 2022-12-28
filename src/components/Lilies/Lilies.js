import React, { useState } from "react";

import LiliesNav from "./LiliesNav/LiliesNav";
import Dashboard from "./Dashboard/Dashboard";
import MealCart from "./MealCart/MealCart";
import Cart from "./Cart/Cart";

import { meals } from "./Meals/meals.js";

import Order from "./Order/Order";
import Checkout from "./Checkout/Checkout";
import Profile from "./Profile/Profile";

import "./Lilies.css";

const Lilies = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [orderIsOpen, setOrderIsOpen] = useState(false);
  const [checkOutIsOpen, setCheckOutIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [MealCartIsOpen, setMealCartIsOpenIsOpen] = useState(false);

  const cartOpenHandler = () => {
    setCartIsOpen(true);
  };

  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };

  const mealCartOpenHandler = () => {
    setMealCartIsOpenIsOpen(true);
  };

  const mealCartCloseHandler = () => {
    setMealCartIsOpenIsOpen(false);
  };

  const orderOpenHandler = () => {
    setOrderIsOpen(true);
  };

  const orderCloseHandler = () => {
    setOrderIsOpen(false);
  };

  const checkOutOpenHandler = () => {
    setCheckOutIsOpen(true);
  };

  const checkOuCloseHandler = () => {
    setCheckOutIsOpen(false);
  };

  const profileOpenHandler = () => {
    setProfileIsOpen(true);
  };

  const profileCloseHandler = () => {
    setProfileIsOpen(false);
  };

  return (
    <section id="lilies-container">
      {MealCartIsOpen && (
        <MealCart mealCartCloseHandler={mealCartCloseHandler} />
      )}
      {cartIsOpen && (
        <Cart
          cartCloseHandler={cartCloseHandler}
          checkOutOpenHandler={checkOutOpenHandler}
        />
      )}
      {orderIsOpen && <Order orderCloseHandler={orderCloseHandler} />}
      {checkOutIsOpen && (
        <Checkout
          closeHandler={checkOuCloseHandler}
          cartCloseHandler={cartCloseHandler}
        />
      )}
      {profileIsOpen && <Profile profileCloseHandler={profileCloseHandler} />}
      <LiliesNav
        cartOpenHandler={cartOpenHandler}
        orderOpenHandler={orderOpenHandler}
        profileOpenHandler={profileOpenHandler}
      />
      <Dashboard meals={meals} mealCartOpenHandler={mealCartOpenHandler} />
    </section>
  );
};

export default Lilies;
