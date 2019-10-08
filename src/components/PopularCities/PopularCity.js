import React from "react";
import { Link } from "react-router-dom";
import Button from "../../kit/CustomForm/Button/Button";

const PopularCity = ({ index, cityname, descrp }) => {
  return (
    <div className={`popular-cities__slide popular-cities__slide--${index}`}>
      <img src=""></img>
      <div className="popular-cities__content">
        <h3 className="heading--tertiary">{cityname}</h3>
        <p className="popular-cities__descp">{descrp}</p>

        <Link to="readmore">
          <Button containerClass="popular-cities__read-more" type="link">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCity;
