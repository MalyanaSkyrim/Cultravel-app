import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Features-style.scss";
import Feature from "./Feature";

const Features = ({ featuresData }) => {
  return (
    <div className="features row">
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
        <h2 className="features__title heading--secondary"> features</h2>
      </ScrollAnimation>
      <div className="features__row">
        {featuresData.map((feature, i) => (
          <ScrollAnimation
            animateOnce={true}
            className="feature-box"
            animateIn={i < 2 ? `fadeInLeft` : `fadeInRight`}
            duration={2}
          >
            <Feature feature={feature}></Feature>;
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Features;
