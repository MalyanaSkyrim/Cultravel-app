import React from "react";
import "./HomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import PopularCities from "../PopularCities/PopularCitiesContainer";
import SponsoredPlaces from "../SponsoredPlaces/SponsoredPlacesContainer";
import Contactus from "../Contactus/ContactusContainer";
import AboutMorocco from "../AboutMorocco/AboutMoroccoContainer";
import Testimonials from "../Testimonials/TestimonialsContainer";
import HeaderHomePage from "../HeaderHomePage/HeaderHomePageContainer";
import RecommendedPlaces from "../RecommendedPlaces/RecommendedPlacesContainer";
import Festivals from "../Festivals/FestivalsContainer";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderHomePage></HeaderHomePage>
      <div className="content">
        <Features></Features>
        <AboutMorocco></AboutMorocco>
        <PopularCities></PopularCities>
        <RecommendedPlaces></RecommendedPlaces>
        <Festivals></Festivals>
        <SponsoredPlaces></SponsoredPlaces>
        <Testimonials></Testimonials>
        <Contactus></Contactus>
      </div>
    </div>
  );
};

export default HomePage;
