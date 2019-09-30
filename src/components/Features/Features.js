import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Features-style.scss";
import Feature from "./Feature";

const Features = ({ featuresData }) => {
  return (
    <div className="features row">
      <ScrollAnimation animateIn="fadeIn" duration={3}>
        <h2 className="features__title heading--secondary"> features</h2>
      </ScrollAnimation>
      <div className="features__row">
        {featuresData.map((feature, i) => (
          <ScrollAnimation
            className="feature-box"
            animateIn={i < 2 ? `bounceInLeft` : `bounceInRight`}
          >
            <Feature feature={feature}></Feature>;
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Features;
