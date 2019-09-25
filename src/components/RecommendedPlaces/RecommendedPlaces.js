import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./RecommendedPlaces-style.scss";
import { lookupService } from "dns";

class RecommendedPlaces extends Component {
  render() {
    return (
      <div className="recommended-palces">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
        >
          <div className="recommended-palces__slide recommended-palces__slide--1">
            <img src=""></img>
            <div className="recommended-palces__content">
              <h3 className="heading--tertiary">Ourzazate</h3>
              <p className="recommended-palces__descp">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className="recommended-palces__read-more btn-text">
                Read More
              </a>
            </div>
          </div>
          <div className="recommended-palces__slide recommended-palces__slide--2">
            <img src=""></img>
            <div className="recommended-palces__content">
              <h3 className="heading--tertiary">Fes</h3>
              <p className="recommended-palces__descp">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className="recommended-palces__read-more btn-text">
                Read More
              </a>
            </div>
          </div>
          <div className="recommended-palces__slide recommended-palces__slide--3">
            <img src=""></img>
            <div className="recommended-palces__content">
              <h3 className="heading--tertiary">Tanger</h3>
              <p className="recommended-palces__descp">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className="recommended-palces__read-more btn-text">
                Read More
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default RecommendedPlaces;
