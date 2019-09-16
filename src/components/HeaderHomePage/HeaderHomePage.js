import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHomePage-style.scss";

const HeaderHomePage = () => {
  return (
    <header className="header-home-page">
      This is the HomePageHeader<br></br>
      <Link to="/city/tanger">
        <a>Go To Tanger</a>
      </Link>
    </header>
  );
};

export default HeaderHomePage;
