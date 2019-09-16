import React from "react";
import { Link } from "react-router-dom";
import "./HeaderFoodDrink-style.scss";

const HeaderFoodDrink = () => {
  return (
    <div className="header-food-drink">
      This HeaderFoodDrink<br></br>
      <Link to="/city/food-drink/darFawakiih">
        <a>Go to Dar Al Fawakiih</a>
      </Link>
    </div>
  );
};

export default HeaderFoodDrink;
