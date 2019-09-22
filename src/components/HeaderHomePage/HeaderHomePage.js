import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHomePage-style.scss";
import Selector from "../../kit/Selector/Selector";

const HeaderHomePage = () => {
  return (
    <header className="header-home-page">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="assets/video/morocco-bg.mp4" type="video/mp4" />
          <source src="assets/video/morocco-bg.webm" type="video/webm" />
          Your browser is not supported !
        </video>
      </div>
      <div className="city-selector">
        <Selector></Selector>
      </div>
    </header>
  );
};

export default HeaderHomePage;
