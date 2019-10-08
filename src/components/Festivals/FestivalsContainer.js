import React from "react";
import Festivals from "./Festivals";

const FestivalsContainer = () => {
  const festivals = [
    {
      title: "chefchaouen",
      descrp:
        "zedezdgegf eugfuef euygfeyuzmeze aytfdz zefyuze gfzegfuzgefuyzeufezf egzfuze",
      image: "assets/images/RecommendedPlacesImg/chefchaouen.jpg"
    },
    {
      title: "kutubia",
      descrp:
        "zedezdgegf eugfuef euygfeyuzmeze aytfdz zefyuze gfzegfuzgefuyzeufezf egzfuze",
      image: "assets/images/RecommendedPlacesImg/marakkech.jpg"
    },
    {
      title: "draa valley",
      descrp:
        "zedezdgegf eugfuef euygfeyuzmeze aytfdz zefyuze gfzegfuzgefuyzeufezf egzfuze",
      image: "assets/images/RecommendedPlacesImg/draa-valley.jpg"
    },
    {
      title: "medina",
      descrp:
        "zedezdgegf eugfuef euygfeyuzmeze aytfdz zefyuze gfzegfuzgefuyzeufezf egzfuze",
      image: "assets/images/RecommendedPlacesImg/madina.jpg"
    }
  ];
  return <Festivals festivals={festivals} />;
};

export default FestivalsContainer;
