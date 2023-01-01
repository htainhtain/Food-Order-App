import React, { useContext } from "react";

import Modal from "../../UI/Modal/Modal";
import OrderItem from "./OrderItem/OrderItem";

import pastaImg from "../../../assets/img/meals/pasta.png";

import "./Order.css";
import { mealContext } from "../../../context/MealContext";

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
    status: "Delivered",
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
    status: "Delivered",
    imgUrl: `${pastaImg}`,
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
    status: "Cooking",
    imgUrl: `${pastaImg}`,
  },
];

const Order = (props) => {
  const mealCtx = useContext(mealContext);
  const { orders } = mealCtx;

  console.log(orders);

  return (
    <Modal closeHandler={props.orderCloseHandler}>
      <section id="order-container">
        <div className="order-container__order">
          <header className="order-header">
            <h4 className="cart-header__title">Your orders</h4>
          </header>
          <table className="order-table">
            <thead>
              <tr className="order-table__header">
                <th className="order-table__table-header ">Item</th>
                <th className="order-table__table-header order-table__table-header--center">
                  Qty
                </th>
                <th className="order-table__table-header order-table__table-header--center">
                  Price
                </th>
                <th className="order-table__table-header order-table__table-header--center">
                  Status
                </th>
              </tr>
            </thead>
            {orders.map((meal) => {
              return <OrderItem meal={meal} key={meal.id} />;
            })}
          </table>
        </div>
      </section>
    </Modal>
  );
};

export default Order;
