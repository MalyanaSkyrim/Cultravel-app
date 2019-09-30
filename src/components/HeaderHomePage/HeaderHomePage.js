import React from "react";
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
      <div className="heading">
        <h1 className="heading--primary">Cultravel</h1>
        <h2 className="heading--sub">
          discover moroccan traditions and cultures
        </h2>

        <div className="city-selector">
          <Selector></Selector>
        </div>
      </div>
    </header>
  );
};

export default HeaderHomePage;
