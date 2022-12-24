import React from "react";

import "./MealItem.css";

const MealItem = (props) => {
  return (
    <li className="special-meals-item">
      <div className="meal-item-img-container">
        <img
          src={props.meal.imgUrl}
          alt={props.meal.name}
          className="meal-item-img"
        />
      </div>
      <div className="meal-item-title">
        <h4>{props.meal.name}</h4>
      </div>
      <div className="meal-item-description">
        <p>{props.meal.description}</p>
      </div>
    </li>
  );
};

export default MealItem;
