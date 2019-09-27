import React from "react";
import "./ContentHomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import RecommendedPlaces from "../RecommendedPlaces/RecommendedPlacesContainer";
import SponsoredPlaces from "../SponsoredPlaces/SponsoredPlacesContainer";
import Contactus from "../Contactus/ContactusContainer";

const ContentHomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <Features></Features>
        <RecommendedPlaces></RecommendedPlaces>
        <SponsoredPlaces></SponsoredPlaces>
        <Contactus></Contactus>
      </div>
    </div>
  );
};

export default ContentHomePage;
