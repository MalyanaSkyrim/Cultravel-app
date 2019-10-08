import React from "react";
import "./Festivals-style.scss";
import RecommendedItemsCarouselContainer from "../../kit/RecommendedItemsCarousel/RecommendedItemsCarouselContainer";

const Festivals = ({ festivals }) => {
  return (
    <div className="festivals row">
      <h2 className="heading--secondary festivals__title">Festivals</h2>
      <div className="festivals__carousel">
        <RecommendedItemsCarouselContainer
          data={festivals}
        ></RecommendedItemsCarouselContainer>
      </div>
    </div>
  );
};

export default Festivals;
