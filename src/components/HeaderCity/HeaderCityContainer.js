import React from "react";
import { withRouter } from "react-router-dom";
import HeaderCity from "./HeaderCity";

const HeaderCityContainer = props => {
  const cities = [
    {
      id: "tanger",
      name: "tanger",
      descrp:
        "tanger is a beautiful city in eheuf egf fuegfuegfu  f geufgue fu gyuge gfef",
      image: "./tanger.jpg"
    },
    {
      id: "ouarzazate",
      name: "ouarzazate",
      descrp: "mdiina harba  siekf ieifiyefiehfef f ef gefyugeufgef fefefef",
      image: "./morocco-ouarzazate.jpg"
    },
    {
      id: "chefchaouen",
      name: "chefchaouen",
      descrp:
        "mdiina ta9lidiya fiiiaizd yugzfyzfuy gzafuze egfuez gfuzeygfuz efugz efuzgefugez f",
      image: "./chefchaouen-morocco.jpg"
    }
  ];

  const currenturl = props.location.pathname;

  const searchedCity = currenturl.split("/")[2];

  const city = cities.filter(city => city.id === searchedCity)[0];
  console.log(city);

  return <HeaderCity city={city} currenturl={currenturl} />;
};

export default withRouter(HeaderCityContainer);
