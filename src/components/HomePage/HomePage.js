import React from "react";
import "./HomePage-style.scss";
import Features from "../Features/FeaturesContainer";
import PopularCities from "../PopularCities/PopularCitiesContainer";
import SponsoredPlaces from "../SponsoredPlaces/SponsoredPlacesContainer";
import Contactus from "../Contactus/ContactusContainer";
import AboutMorocco from "../AboutMorocco/AboutMoroccoContainer";
import Testimonials from "../Testimonials/TestimonialsContainer";
import HeaderHomePage from "../HeaderHomePage/HeaderHomePageContainer";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderHomePage></HeaderHomePage>
      <div className="content">
        <Features></Features>
        <AboutMorocco></AboutMorocco>
        <PopularCities></PopularCities>
        <SponsoredPlaces></SponsoredPlaces>
        <Testimonials></Testimonials>
        <Contactus></Contactus>
      </div>
    </div>
  );
};

export default HomePage;
