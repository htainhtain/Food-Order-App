import React from "react";

import pastaImg from "../../../assets/img/meals/pasta.png";
import mealballsImg from "../../../assets/img/meals/meatballs.png";
import burgerImg from "../../../assets/img/meals/burger.png";

import "./SpecialMeals.css";
import MealItem from "../../UI/MealItem/MealItem";

const specialMeals = [
  {
    id: "m0",
    name: "Stir fry Pasta",
    description: "Stir fry pasta yada yada yada because of Sesan",
    price: 100,
    imgUrl: pastaImg,
  },
  {
    id: "m1",
    name: "Meat Balls",
    description: "Stir fry pasta yada yada yada because of Sesan",
    price: 200,
    imgUrl: mealballsImg,
  },
  {
    id: "m2",
    name: "Burger",
    description: "Stir fry pasta yada yada yada because of Sesan",
    price: 150,
    imgUrl: burgerImg,
  },
]; 

const SpecialMeals = () => {
  return (
    <section id="special-meals-container">
      <div className="special-meals">
        <header className="special-meals-description">
          <h3 className="special-meals-description-title">
            Special Meals of the day!
          </h3>
          <p className="special-meals-description-description">
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
        </header>
        <ul className="special-meals-item-container">
          {specialMeals.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default SpecialMeals;
