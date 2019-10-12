import React from "react";
import HeaderCity from "../HeaderCity/HeaderCityContainer";
import { StickyContainer } from "react-sticky";
import AboutCity from "../AboutCity/AboutCityContainer";
import BestAttractions from "../BestAttractions/BestAttractionsContainer";
import "./CityPage-style.scss";

const CityPage = () => {
  return (
    <StickyContainer>
      <div className="city-page">
        <HeaderCity></HeaderCity>
        <div className="city-page__content content">
          <AboutCity></AboutCity>
          <BestAttractions></BestAttractions>
        </div>
      </div>
    </StickyContainer>
  );
};

export default CityPage;
