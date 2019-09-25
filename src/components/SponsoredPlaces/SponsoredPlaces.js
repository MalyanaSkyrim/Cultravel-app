import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SponsoredPlaces-style.scss";
import SponsoredPlace from "./SponsoredPlace";

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

const SponsoredPlaces = () => {
  return (
    <div className="sponsored-places">
      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        transitionDuration={500}
        infinite
        itemClass="sponsored-places__slide"
        responsive={responsive}
      >
        {[1, 2, 3, 4].map(i => (
          <SponsoredPlace key={i} index={i}></SponsoredPlace>
        ))}
      </Carousel>
    </div>
  );
};

export default SponsoredPlaces;
