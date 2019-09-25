import React from "react";
import "./ContentHomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import RecommendedPlaces from "../RecommendedPlaces/RecommendedPlacesContainer";
import SponsoredPlaces from "../SponsoredPlaces/SponsoredPlacesContainer";

const ContentHomePage = () => {
  return (
    <div className="homepage">
      <Features></Features>
      <RecommendedPlaces></RecommendedPlaces>
      <SponsoredPlaces></SponsoredPlaces>
    </div>
  );
};

export default ContentHomePage;
