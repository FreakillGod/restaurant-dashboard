import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import CreateMenu from "./pages/CreateMenu";
import RestaurantMenu from "./pages/RestaurantMenu";
import DetailedOrder from "./pages/DetailedOrder"
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="App">
      <Orders />
    </div>
  );
}

export default App;
