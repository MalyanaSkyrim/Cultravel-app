import React from "react";
import "./HomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import RecommendedPlaces from "../RecommendedPlaces/RecommendedPlacesContainer";
import SponsoredPlaces from "../SponsoredPlaces/SponsoredPlacesContainer";
import Contactus from "../Contactus/ContactusContainer";
import AboutMorocco from "../AboutMorocco/AboutMoroccoContainer";
import Testimonials from "../Testimonials/TestimonialsContainer";
import HeaderHomePage from "../HeaderHomePage/HeaderHomePageContainer";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderHomePage></HeaderHomePage>
      <div className="homepage__content">
        <Features></Features>
        <AboutMorocco></AboutMorocco>
        <RecommendedPlaces></RecommendedPlaces>
        <SponsoredPlaces></SponsoredPlaces>
        <Testimonials></Testimonials>
        <Contactus></Contactus>
      </div>
    </div>
  );
};

export default HomePage;
