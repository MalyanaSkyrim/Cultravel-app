import React from "react";
import "./ContentHomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import RecommendedPlaces from "../RecommendedPlaces/RecommendedPlacesContainer";
import SponsoredPlaces from "../SponsoredPlaces/SponsoredPlacesContainer";
import Contactus from "../Contactus/ContactusContainer";
import AboutMorocco from "../AboutMorocco/AboutMorocco";

const ContentHomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <Features></Features>
        <AboutMorocco></AboutMorocco>
        <RecommendedPlaces></RecommendedPlaces>
        <SponsoredPlaces></SponsoredPlaces>
        <Contactus></Contactus>
      </div>
    </div>
  );
};

export default ContentHomePage;
