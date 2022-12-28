import React from "react";

import "./OrderItem.css";

const OrderItem = (props) => {

  return (
    <tbody>
      <tr className="order-table__row">
        <td className="order-item-info ">
          <div className="order-img-container">
            <img
              src={props.meal.imgUrl}
              alt={props.meal.description}
              className="order-img"
            />
          </div>
          <div className="order-item-description">
            <h5>{props.meal.name}</h5>
            <button type="button" className="order-item-description__button">
              remove
            </button>
          </div>
        </td>
        <td>3</td>
        <td>฿ 10000</td>
        <td>{props.meal.status}</td>
      </tr>
    </tbody>
  );
};

export default OrderItem;
