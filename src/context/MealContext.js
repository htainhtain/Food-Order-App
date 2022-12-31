import React, { createContext, useReducer } from "react";

export const mealContext = createContext({
  selectedMeals: [],
  addMealToCart: () => {},
  removeMealFromCart: () => {},
});

const selectedMealsreducer = (prevstate, action) => {
  if (action.type === "ADD_MEALS_TO_CART") {
    const newSelectedMeal = action.meal;
    const exisitingItemIndex = prevstate.selectedMeals.findIndex(
      (meal) => meal.id === action.meal.id
    );
    let newSelectedMeals;
    const oldSelectedMeal = prevstate.selectedMeals;

    if (exisitingItemIndex !== -1) {
      const mealSelectedBefore = prevstate.selectedMeals[exisitingItemIndex];
      const updatedMeal = {
        ...mealSelectedBefore,
        cartAmount: mealSelectedBefore.cartAmount + newSelectedMeal.cartAmount,
      };

      oldSelectedMeal[exisitingItemIndex] = updatedMeal;
      newSelectedMeals = oldSelectedMeal;
    } else {
      newSelectedMeals = [...oldSelectedMeal, newSelectedMeal];
    }

    const totalMealsInCart = newSelectedMeals.reduce(
      (accumulator, meal) => accumulator + meal.cartAmount,
      0
    );
    const totalPrice = newSelectedMeals.reduce(
      (accumulator, meal) => accumulator + meal.cartAmount * meal.price,
      0
    );
    return {
      selectedMeals: newSelectedMeals,
      totalMealsInCart: totalMealsInCart,
      totalPrice: totalPrice,
    };
  }

  if (action.type === "REMOVE_MEALS_FROM_CART") {
    const newSelectedMeals = prevstate.selectedMeals.filter(
      (meal) => meal.id !== action.id
    );
    const totalMealsInCart = newSelectedMeals.reduce(
      (accumulator, meal) => accumulator + meal.cartAmount,
      0
    );
    const totalPrice = newSelectedMeals.reduce(
      (accumulator, meal) => accumulator + meal.cartAmount * meal.price,
      0
    );
    return {
      selectedMeals: newSelectedMeals,
      totalMealsInCart: totalMealsInCart,
      totalPrice: totalPrice,
    };
  }
};

const MealContextProvider = (props) => {
  const [selectedMeals, selectedMealsDispatch] = useReducer(
    selectedMealsreducer,
    {
      selectedMeals: [],
      totalMealsInCart: 0,
      totalPrice: 0,
    }
  );

  const addMealToCart = (meal) => {
    selectedMealsDispatch({ type: "ADD_MEALS_TO_CART", meal: meal });
  };

  const removeMealFromCart = (id) => {
    selectedMealsDispatch({ type: "REMOVE_MEALS_FROM_CART", id: id });
  };

  return (
    <mealContext.Provider
      value={{
        selectedMeals: selectedMeals,
        addMealToCart: addMealToCart,
        removeMealFromCart: removeMealFromCart,
      }}
    >
      {props.children}
    </mealContext.Provider>
  );
};

export default MealContextProvider;
