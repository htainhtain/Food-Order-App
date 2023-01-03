import React, { useContext } from "react";

import { mealContext } from "../../../context/MealContext";

import Modal from "../../UI/Modal/Modal";
import OrderItem from "./OrderItem/OrderItem";

import "./Order.css";



const Order = (props) => {
  const mealCtx = useContext(mealContext);
  const { orders } = mealCtx;

  return (
    <Modal closeHandler={props.orderCloseHandler}>
      <section id="order-container">
        <div className="order-container__order">
          <header className="order-header">
            <h4 className="cart-header__title">Your orders</h4>
          </header>
          {orders.length !== 0 ? (
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
          ) : (
            <p>You have no order yet. Please checkout to order.</p>
          )}
        </div>
      </section>
    </Modal>
  );
};

export default Order;
