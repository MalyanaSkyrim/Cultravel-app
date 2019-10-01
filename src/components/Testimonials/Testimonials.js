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
          animateOnce={true}
          className="story__scroll"
          animateIn={index % 2 == 0 ? "fadeInLeft" : "fadeInRight"}
          duration={2}
        >
          <Story story={story}></Story>
        </ScrollAnimation>
      ))}
      <div className="story__readmore">
        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
          <Button type="link">
            <a href="#"> Read all stories &rarr; </a>
          </Button>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Testimonials;
