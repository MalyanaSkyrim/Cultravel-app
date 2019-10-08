import React from "react";
import Button from "../CustomForm/Button/ButtonContainer";

const RecommendedItem = ({ title, descrp, image, imageDescrp }) => {
  return (
    <div className="recommended-item">
      <div className="recommended-item__img-container">
        <img className="recommended-item__img" alt={imageDescrp} src={image} />
      </div>
      <div className="recommended-item__content">
        <div className="recommended-item__text">
          <h3 class="heading--tertiary recommended-item__title">{title}</h3>
          <p className="recommended-item__descrp">{descrp}</p>
        </div>
        <div className="recommended-item__book">
          <Button type="primary">
            <a href="#">read more</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedItem;
