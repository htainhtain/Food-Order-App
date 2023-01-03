import React, { useContext, useReducer } from "react";
import { mealContext } from "../../../context/MealContext";

import Modal from "../../UI/Modal/Modal";

import "./MealCart.css";

const mealReducer = (prevState, action) => {
  if (action.type === "MEAL_COUNT_CHANGE") {
    return {
      mealCount: +action.value,
      mealCountIsValid: +action.value > 0 && +action.value <= action.availablePiecs ? true : false,
    };
  }
};

const MealCart = (props) => {
  //context
  const mealCtx = useContext(mealContext);
  const { addMealToCart } = mealCtx;

  // useReducer
  const [mealState, mealDispatch] = useReducer(mealReducer, {
    mealCount: 1,
    mealCountIsValid: true,
  });

  const meal = props.meal[0];
  const availablePiecs = meal.availablePiecs;

  const mealCountHandler = (e) => {
    // setMealCount(e.currentTarget.value);
    mealDispatch({
      type: "MEAL_COUNT_CHANGE",
      value: e.currentTarget.value,
      availablePiecs: availablePiecs,
    });
  };

  const mealCountAdd = () => {
    mealDispatch({
      type: "MEAL_COUNT_CHANGE",
      value: mealState.mealCount + 1,
      availablePiecs: availablePiecs,
    });
  };

  const mealCountReduce = () => {
    mealDispatch({
      type: "MEAL_COUNT_CHANGE",
      value: mealState.mealCount - 1,
      availablePiecs: availablePiecs,
    });
  };

  const cartSubmitHandler = (e) => {
    e.preventDefault();
    const mealWithAmount = { ...meal, cartAmount: +mealState.mealCount };
    addMealToCart(mealWithAmount);
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
                value={mealState.mealCount}
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
            <button
              type="submit"
              className="cart-add-to-cart-btn"
              disabled={!mealState.mealCountIsValid}
            >
              Add to Cart
            </button>
          </form>
        </div>
      </section>
    </Modal>
  );
};

export default MealCart;
