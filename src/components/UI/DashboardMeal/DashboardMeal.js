import React from "react";

import "./DashboardMeal.css";

const DashboardMeal = (props) => {
  return (
    <li className="dashboard-meal-container">
      <div className="dashboard-meal">
        <figure className="dashboard-meal-img-container">
          <img
            src={props.meal.imgUrl}
            alt={props.meal.name}
            className="dashboard-meal-img"
          />
        </figure>
        <h4>{props.meal.name}</h4>
        <p className="dashboard-meal-description">{props.meal.description}</p>

        <div className="dashboard-meal-action">
          <p className="dashboard-meal-action-price">฿ {props.meal.price}</p>
          <button
            // type="submit"
            className="add-to-cart-btn"
            onClick={props.cartOpenHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default DashboardMeal;
