import React from "react";

import "./CartItem.css";

const CartItem = (props) => {

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
        <td>฿ {props.meal.price}</td>
        <td>฿ 1000</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
