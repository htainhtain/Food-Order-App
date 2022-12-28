import React from "react";

import Modal from "../../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import pastaImg from "../../../assets/img/meals/pasta.png";

import "./Cart.css";

const meals = [
  {
    id: "m0",
    name: "Stir fry Pasta",
    description: "Stir fry pasta yada yada yada because of Sesan",
    full_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timetocook: "10-20",
    availablePiecs: 10,
    price: 100,
    imgUrl: pastaImg,
  },
  {
    id: "m1",
    name: "Stir fry Pasta",
    description: "Stir fry pasta yada yada yada because of Sesan",
    full_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timetocook: "10-20",
    availablePiecs: 10,
    price: 100,
    imgUrl: `${pastaImg}`,
  },
  {
    id: "m2",
    name: "Stir fry Pasta",
    description: "Stir fry pasta yada yada yada because of Sesan",
    full_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timetocook: "10-20",
    availablePiecs: 10,
    price: 100,
    imgUrl: `${pastaImg}`,
  },
];

const Cart = (props) => {
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
            {meals.map((meal) => {
              return <CartItem meal={meal} key={meal.id} />;
            })}
          </table>
          <p className="order-total-price">
            Total: <span className="order-total-price__number">฿ 3000</span>
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
