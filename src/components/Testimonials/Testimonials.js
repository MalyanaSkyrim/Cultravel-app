import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Testimonials-style.scss";
import Button from "../../kit/CustomForm/Button/Button";
import Story from "./Story";

const Testimonials = ({ stories = [] }) => {
  return (
    <div className="testimonials row">
      <h2 className="testimonials__title heading--secondary">Testimonials</h2>

      {stories.map((story, index) => (
        <ScrollAnimation
          className="story__scroll"
          animateIn={index % 2 == 0 ? "bounceInLeft" : "bounceInRight"}
        >
          <Story story={story}></Story>
        </ScrollAnimation>
      ))}
      <div className="story__readmore">
        <Button type="link">
          <a href="#"> Read all stories &rarr; </a>
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
