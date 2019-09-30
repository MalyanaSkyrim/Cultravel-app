import React from "react";
import { Link } from "react-router-dom";
import Button from "../../kit/CustomForm/Button/Button";

const RecommendedPlace = ({ index, cityname, descrp }) => {
  return (
    <div
      className={`recommended-places__slide recommended-places__slide--${index}`}
    >
      <img src=""></img>
      <div className="recommended-places__content">
        <h3 className="heading--tertiary">{cityname}</h3>
        <p className="recommended-places__descp">{descrp}</p>

        <Link to="readmore">
          <Button containerClass="recommended-places__read-more" type="link">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedPlace;
