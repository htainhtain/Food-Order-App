import React, { useContext } from "react";

import { mealContext } from "../../../context/MealContext";

import Modal from "../../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import "./Cart.css";

const Cart = (props) => {
  const mealCtx = useContext(mealContext);

  const { selectedMeals } = mealCtx;
  const { removeMealFromCart } = mealCtx;

  console.log("selectedMeals: ", selectedMeals);

  return (
    <Modal closeHandler={props.cartCloseHandler}>
      <section id="order-container">
        <div className="order-container__order">
          <header className="order-header">
            <h4 className="cart-header__title">Your cart</h4>
          </header>
          <table className="order-table">
            <thead>
              <tr className="order-table__header">
                <th className="order-table__table-header ">Item</th>
                <th className="order-table__table-header order-table__table-header--center">
                  Qty
                </th>
                <th className="order-table__table-header order-table__table-header--center">
                  Unit Price
                </th>
                <th className="order-table__table-header order-table__table-header--center">
                  Sub-total
                </th>
              </tr>
            </thead>
            {selectedMeals.selectedMeals.map((meal) => {
              return (
                <CartItem
                  meal={meal}
                  key={meal.id}
                  removeMealFromCart={removeMealFromCart.bind(null, meal.id)}
                />
              );
            })}
          </table>
          <p className="order-total-price">
            Total:&nbsp;
            <span className="order-total-price__number">
              ฿ {selectedMeals.totalPrice}
            </span>
          </p>
          <button
            type="button"
            className="order-checkout-button"
            onClick={props.checkOutOpenHandler}
          >
            Checkout
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default Cart;
