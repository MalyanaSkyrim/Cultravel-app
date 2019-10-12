import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import RecommendedItemsCarousel from "../../kit/RecommendedItemsCarousel/RecommendedItemsCarouselContainer";
import "./RecommendedPlaces-style.scss";

const RecommendedPlaces = ({ places }) => {
  return (
    <div className="recommended-places row">
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
        <h2 className="heading--secondary recommended-places__title">
          Recommended Places to visit
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
        <div className="recommended-places__carousel">
          <RecommendedItemsCarousel data={places}></RecommendedItemsCarousel>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default RecommendedPlaces;
