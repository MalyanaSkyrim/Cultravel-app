import React from "react";
import RecommendedItemsCarousel from "../../kit/RecommendedItemsCarousel/RecommendedItemsCarouselContainer";
import "./RecommendedPlaces-style.scss";

const RecommendedPlaces = ({ places }) => {
  return (
    <div className="recommended-places row">
      <h2 className="heading--secondary recommended-places__title">
        Recommended Places to visit
      </h2>
      <div className="recommended-places__carousel">
        <RecommendedItemsCarousel data={places}></RecommendedItemsCarousel>
      </div>
    </div>
  );
};

export default RecommendedPlaces;
