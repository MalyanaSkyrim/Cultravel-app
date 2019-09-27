import React from "react";
import { Link } from "react-router-dom";
import Button from "../../kit/CustomForm/Button/Button";

const RecommendedPlace = ({ index, cityname, descrp }) => {
  return (
    <div
      className={`recommended-palces__slide recommended-palces__slide--${index}`}
    >
      <img src=""></img>
      <div className="recommended-palces__content">
        <h3 className="heading--tertiary">{cityname}</h3>
        <p className="recommended-palces__descp">{descrp}</p>

        <Link to="readmore">
          <Button containerClass="recommended-palces__read-more" type="link">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedPlace;
