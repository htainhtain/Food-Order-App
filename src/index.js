import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MealContextProvider from "./context/MealContext";
import AuthContextProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </AuthContextProvider>
);
