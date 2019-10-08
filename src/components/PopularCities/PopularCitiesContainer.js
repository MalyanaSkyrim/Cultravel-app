import React from "react";
import PopularCities from "./PopularCities";

const PopularCitiesContainer = () => {
  const data = [
    {
      cityname: "Ouarzazate",
      descrp: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`
    },
    {
      cityname: "Fes",
      descrp: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`
    },
    {
      cityname: "Tanger",
      descrp: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`
    }
  ];
  return <PopularCities data={data} />;
};

export default PopularCitiesContainer;
