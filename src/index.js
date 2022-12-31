import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MealContextProvider from "./context/MealContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MealContextProvider>
    <App />
  </MealContextProvider>
);
