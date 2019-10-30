import React from "react";
import "./AboutCity-style.scss";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 33.2772486, lng: -7.5702886 }} />
      )}
    </GoogleMap>
  ))
);

const AboutCity = () => {
  return (
    <div className="aboutcity">
      <div className="aboutcity__leftside">
        <div className="aboutcity__content">
          <h2 className="aboutcity__title heading--secondary">About Fes</h2>
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
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
      <div className="aboutcity__rightside"></div>
    </div>
  );
};

export default AboutCity;
