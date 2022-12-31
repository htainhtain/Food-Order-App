import React, { useState, useContext } from "react";
import { mealContext } from "../../../context/MealContext";

import Modal from "../../UI/Modal/Modal";

import "./MealCart.css";

const MealCart = (props) => {
  //context
  const mealCtx = useContext(mealContext);
  const { addMealToCart } = mealCtx;

  // useState
  const [mealCount, setMealCount] = useState(1);

  const meal = props.meal[0];

  const mealCountHandler = (e) => {
    setMealCount(e.currentTarget.value);
  };

  const mealCountAdd = () => {
    setMealCount(mealCount + 1);
  };

  const mealCountReduce = () => {
    setMealCount(mealCount - 1);
  };

  const cartSubmitHandler = (e) => {
    e.preventDefault();
    const mealWithAmount = { ...meal, cartAmount: +mealCount };
    addMealToCart(mealWithAmount);
    console.log(mealCount, " has been added");
  };

  return (
    <Modal closeHandler={props.mealCartCloseHandler}>
      <section id="cart-container">
        <div className="cart">
          <div className="cart-img-container">
            <img
              src={meal.imgUrl}
              alt={meal.description}
              className="cart-img"
            />
          </div>
          <header className="cart-header">
            <h4 className="cart-header-title">{meal.name}</h4>
            <p className="cart-header-description">{meal.full_description}</p>
          </header>
          <div className="cart-meal-status">
            <p>฿ {meal.price}</p>
            <p>{meal.timetocook} Mins</p>
            <p>{meal.availablePiecs} Pcs Avail</p>
          </div>
          <form className="cart-form" onSubmit={cartSubmitHandler}>
            <div className="cart-form-action">
              <button
                type="button"
                className="action-button"
                onClick={mealCountReduce}
              >
                -
              </button>
              <input
                type="number"
                className="action-input"
                value={mealCount}
                onChange={mealCountHandler}
                min={1}
                max={10}
              />
              <button
                type="button"
                className="action-button"
                onClick={mealCountAdd}
              >
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
