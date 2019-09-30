import React from "react";
import Features from "./Features";

const FeaturesContainer = () => {
  const featuresData = [
    {
      icon: "fas fa-globe-americas",
      title: "Explore the world",
      descrp: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Exercitationem sint unde, rem cumque minima alias quo repudiandae.`
    },
    {
      icon: "far fa-compass",
      title: "Meet nature",
      descrp: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Exercitationem sint unde, rem cumque minima alias quo repudiandae.`
    },
    {
      icon: "fas fa-map-signs",
      title: "Find your way",
      descrp: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Exercitationem sint unde, rem cumque minima alias quo repudiandae.`
    },
    {
      icon: "far fa-heart",
      title: "Live a healthier life",
      descrp: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Exercitationem sint unde, rem cumque minima alias quo repudiandae.`
    }
  ];
  return <Features featuresData={featuresData} />;
};

export default FeaturesContainer;
