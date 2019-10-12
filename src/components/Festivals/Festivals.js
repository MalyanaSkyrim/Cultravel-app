import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import RecommendedItemsCarouselContainer from "../../kit/RecommendedItemsCarousel/RecommendedItemsCarouselContainer";
import "./Festivals-style.scss";

const Festivals = ({ festivals }) => {
  return (
    <div className="festivals row">
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
        <h2 className="heading--secondary festivals__title">Festivals</h2>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
        <div className="festivals__carousel">
          <RecommendedItemsCarouselContainer
            data={festivals}
          ></RecommendedItemsCarouselContainer>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Festivals;
