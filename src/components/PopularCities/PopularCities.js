import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PopularCities-style.scss";
import PopularCity from "./PopularCity";
import ScrollAnimation from "react-animate-on-scroll";

const PopularCities = ({ data }) => {
  return (
    <div className="row">
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
        <h2 className="heading--secondary popular-cities__title">
          Popular Cities
        </h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnce={true}
        className="popular-cities"
        animateIn="fadeInUp"
        duration={3}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
        >
          {data.map((item, index) => (
            <PopularCity
              index={index + 1}
              cityname={item.cityname}
              descrp={item.descrp}
            ></PopularCity>
          ))}
        </Carousel>
      </ScrollAnimation>
    </div>
  );
};

export default PopularCities;
