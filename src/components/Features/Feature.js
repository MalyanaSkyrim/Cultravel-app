import React from "react";

const Feature = ({ feature }) => {
  return (
    <>
      <i className={`feature-box__icon ${feature.icon}`}></i>
      <h3 className="heading--tertiary ">{feature.title}</h3>
      <p className="feature-box__text">{feature.descrp}</p>
    </>
  );
};

export default Feature;
