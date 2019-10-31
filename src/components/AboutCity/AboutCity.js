import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./AboutCity-style.scss";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const position = { lat: 33.2772486, lng: -7.5702886 };

const images = [
  "/assets/images/nat-8.jpg",
  "/assets/images/nat-9.jpg",
  "/assets/images/morocco-culture.jpg",
  "/assets/images/arts-morocco.jpg"
];

const SliderPopUp = ({ popUpShown, showPopUp }) => {
  return (
    <div className={`sliderImgs ${popUpShown && "sliderImgs--active"}`}>
      <div
        onClick={() => showPopUp(false)}
        className="sliderImgs__closerSide"
      ></div>
      <i
        onClick={() => showPopUp(false)}
        className="sliderImgs__closeIcon fas fa-times"
      ></i>
      <div
        className={`sliderImgs__popup  ${popUpShown &&
          "sliderImgs__popup--active"}`}
      >
        <Carousel showStatus={false}>
          {images.map(src => (
            <div className="sliderImgs__item">
              <img src={src}></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={position}>
      {props.isMarkerShown && <Marker position={position} />}
    </GoogleMap>
  ))
);

const AboutCity = () => {
  const [popUpShown, showPopUp] = useState(false);
  return (
    <div className="aboutcity">
      <SliderPopUp popUpShown={popUpShown} showPopUp={showPopUp}></SliderPopUp>
      <div className="aboutcity__leftside">
        <div className="aboutcity__content">
          <h2 className="aboutcity__title heading--secondary">
            About OUARZAZATE
          </h2>
          <p className="aboutcity__text">
            Aliquip anim aute officia mollit veniam excepteur voluptate sit
            labore commodo sit id esse. Ut magna cillum labore adipisicing
            voluptate eu quis ipsum non. Aute ipsum consequat minim cillum
            laboris ad. Eu sint voluptate ipsum aute incididunt proident nostrud
            duis. Et mollit labore occaecat exercitation in eiusmod mollit qui
            deserunt. Enim in exercitation laborum fugiat ipsum. Officia commodo
            elit nostrud velit.
          </p>
        </div>
        <div className="aboutcity__map">
          <MapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBOtARkqHb-7Qp8T-gsSY_S9NvWsV_fKdg&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
      <div className="aboutcity__rightside">
        <div className="cityimages--top">
          <img
            className="cityimages__primaryImg"
            src="/assets/images/arts-morocco.jpg"
          ></img>
        </div>
        <div className="cityimages--bottom">
          <img
            className="cityimages__secondaryImg"
            src="/assets/images/morocco-culture.jpg"
          ></img>
          <img
            className="cityimages__secondaryImg"
            src="/assets/images/nat-8.jpg"
          ></img>
          <img
            className="cityimages__secondaryImg"
            src="/assets/images/nat-9.jpg"
          ></img>
          <div
            onClick={() => showPopUp(true)}
            className="cityimages__secondaryImg"
          >
            <img src="/assets/images/arts-morocco.jpg"></img>
            <div className="cityimages__secondaryImg--seeMore">
              <h3 className="heading--tertiary">See more</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCity;
