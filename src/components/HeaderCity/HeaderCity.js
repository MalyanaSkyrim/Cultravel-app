import React from "react";
import { Link } from "react-router-dom";
import "./HeaderCity-style.scss";

const HeaderCity = () => {
  return (
    <header className="header-city">
      This is The City Header
      <br />
      <Link to="/city/tanger/hotels">
        <a>Hotels</a>
      </Link>
      <br></br>
      <Link to="/city/tanger/attractions">
        <a>Attractions</a>
      </Link>
      <br></br>
      <Link to="/city/tanger/food-drink">
        <a>Food Drinks</a>
      </Link>
    </header>
  );
};

export default HeaderCity;
