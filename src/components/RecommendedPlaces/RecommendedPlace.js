import React from "react";

const RecommendedPlace = ({ index, cityname, descrp }) => {
  return (
    <div
      className={`recommended-palces__slide recommended-palces__slide--${index}`}
    >
      <img src=""></img>
      <div className="recommended-palces__content">
        <h3 className="heading--tertiary">{cityname}</h3>
        <p className="recommended-palces__descp">{descrp}</p>
        <a className="recommended-palces__read-more btn-text">Read More</a>
      </div>
    </div>
  );
};

export default RecommendedPlace;
