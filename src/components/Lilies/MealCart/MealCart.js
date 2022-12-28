import React from "react";

import Modal from "../../UI/Modal/Modal";

import pastaImg from "../../../assets/img/meals/pasta.png";

import "./MealCart.css";

const meals = {
  id: "m0",
  name: "Stir fry Pasta",
  description: "Stir fry pasta yada yada yada because of Sesan",
  full_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  timetocook: "10-20",
  availablePiecs: 10,
  price: 100,
  imgUrl: pastaImg,
};

const MealCart = (props) => {
  return (
    <Modal closeHandler={props.mealCartCloseHandler}>
      <section id="cart-container">
        <div className="cart">
          <div className="cart-img-container">
            <img
              src={meals.imgUrl}
              alt={meals.description}
              className="cart-img"
            />
          </div>
          <header className="cart-header">
            <h4 className="cart-header-title">{meals.name}</h4>
            <p className="cart-header-description">{meals.full_description}</p>
          </header>
          <div className="cart-meal-status">
            <p>฿ {meals.price}</p>
            <p>{meals.timetocook} Mins</p>
            <p>{meals.availablePiecs} Pcs Avail</p>
          </div>
          <form className="cart-form">
            <div className="cart-form-action">
              <button type="button" className="action-button">
                -
              </button>
              <input type="number" value={1} className="action-input" />
              <button type="button" className="action-button">
                +
              </button>
            </div>
            <button type="submit" className="cart-add-to-cart-btn">
              Add to Cart
            </button>
          </form>
        </div>
      </section>
    </Modal>
  );
};

export default MealCart;
