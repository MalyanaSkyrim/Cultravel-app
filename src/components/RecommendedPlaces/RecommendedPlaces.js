import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./RecommendedPlaces-style.scss";
import RecommendedPlace from "./RecommendedPlace";
import ScrollAnimation from "react-animate-on-scroll";

const RecommendedPlaces = ({ data }) => {
  return (
    <div className="row">
      <ScrollAnimation animateIn="fadeInUp" duration={2}>
        <h2 className="heading--secondary recommended-places__title">
          Popular Cities
        </h2>
      </ScrollAnimation>
      <ScrollAnimation
        className="recommended-places"
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
            <RecommendedPlace
              index={index + 1}
              cityname={item.cityname}
              descrp={item.descrp}
            ></RecommendedPlace>
          ))}
        </Carousel>
      </ScrollAnimation>
    </div>
  );
};

export default RecommendedPlaces;
