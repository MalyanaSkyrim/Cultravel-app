import React from "react";
import Carousel from "react-multi-carousel";
import RecommendedItem from "./RecommendedItem";
import "./RecommendedItemsCarousel-style.scss";

const RecommendedItemsCarousel = ({ data = [] }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      //   autoPlay
      autoPlaySpeed={3000}
      transitionDuration={500}
      infinite
      itemClass="sponsored-places__slide-item"
      responsive={responsive}
    >
      {data.map((item, index) => (
        <RecommendedItem
          key={index}
          title={item.title}
          descrp={item.descrp}
          image={item.image}
        ></RecommendedItem>
      ))}
    </Carousel>
  );
};

export default RecommendedItemsCarousel;
