import React from "react";
import "./ContentHomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import RecommendedPlaces from "../RecommendedPlaces/RecommendedPlacesContainer";

const ContentHomePage = () => {
  return (
    <div className="homepage">
      <Features></Features>
      <RecommendedPlaces></RecommendedPlaces>
    </div>
  );
};

export default ContentHomePage;
