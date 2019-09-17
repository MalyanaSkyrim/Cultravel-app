import React from "react";
import { Link } from "react-router-dom";
import "./HeaderAttractions-style.scss";

const HeaderAttractions = () => {
  return (
    <header className="header-attractions">
      This is The Attractions Header
      <br />
      <Link to="/city/tanger/attractions/madya9">
        <a>Go to madya9</a>
      </Link>
    </header>
  );
};

export default HeaderAttractions;
