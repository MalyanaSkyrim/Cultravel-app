import React from "react";
import "./AboutMorocco-style.scss";

const AboutMorocco = () => {
  return (
    <div className="about-morocco row">
      <h2 className="about-morocco__title heading--secondary">About Morocco</h2>
      <div className="about-morocco__content">
        <p className="about-morocco__descrp">
          Morocco (the full Arabic name is{" "}
          <strong>Al Mamlakah al Maghribiyah</strong> which translates into "The
          Western Kingdom" ) is located on the North West coast of Africa and
          has ports in the North Atlantic Ocean as well as the Mediterranean
          Sea. It is the third most populous Arab country.
          <br />
          <br />
          Morocco shares the largest part of its border with Algeria to the East
          and Western Saharah to the South. Morocco is divided into sixteen
          regions. Each region is further divided into provinces and
          prefectures. The capital of Morocco is Rabat and its largest city is
          Casablanca. The national currency is the Moroccan Dirham.
        </p>
        <div className="about-morocco__imgs">
          <div className="about-morocco__imgs-container">
            <img
              src="assets/images/arts-morocco.jpg"
              className="about-morocco__img about-morocco__img--1 "
            ></img>
            <img
              src="assets/images/morocco-culture.jpg"
              className="about-morocco__img about-morocco__img--2"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMorocco;
