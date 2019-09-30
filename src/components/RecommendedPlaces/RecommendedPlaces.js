import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./RecommendedPlaces-style.scss";
import RecommendedPlace from "./RecommendedPlace";

const RecommendedPlaces = ({ data }) => {
  return (
    <div className="row">
      <h2 className="heading--secondary recommended-places__title">
        Popular Cities
      </h2>
      <div className="recommended-places">
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
      </div>
    </div>
  );
};

export default RecommendedPlaces;
