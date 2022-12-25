import React from "react";
import DashboardMeal from "../../UI/DashboardMeal/DashboardMeal.js";

import { meals } from "../Meals/meals.js";

import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <section id="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-description">
          <header>
            <h3 className="dashboard-title">Good morning, Oghenevwede!</h3>
            <p className="dashboard-description-description">
              What delicious meal are you craving today?
            </p>
          </header>
          <div className="profile-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M5.85 17.1q1.275-.975 2.85-1.538Q10.275 15 12 15q1.725 0 3.3.562 1.575.563 2.85 1.538.875-1.025 1.363-2.325Q20 13.475 20 12q0-3.325-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12q0 1.475.488 2.775.487 1.3 1.362 2.325ZM12 13q-1.475 0-2.488-1.012Q8.5 10.975 8.5 9.5t1.012-2.488Q10.525 6 12 6t2.488 1.012Q15.5 8.025 15.5 9.5t-1.012 2.488Q13.475 13 12 13Zm0 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q1.325 0 2.5-.387 1.175-.388 2.15-1.113-.975-.725-2.15-1.113Q13.325 17 12 17t-2.5.387q-1.175.388-2.15 1.113.975.725 2.15 1.113Q10.675 20 12 20Zm0-9q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.65 8 12 8q-.65 0-1.075.425Q10.5 8.85 10.5 9.5q0 .65.425 1.075Q11.35 11 12 11Zm0-1.5Zm0 9Z" />
            </svg>
          </div>
        </div>
        <ul className="dashboard-meals-container">
          {meals.map((meal) => {
            return (
              <DashboardMeal
                meal={meal}
                key={meal.id}
                cartOpenHandler={props.cartOpenHandler}
              />
            );
          })}
          <li className="dashboard-meals"></li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
