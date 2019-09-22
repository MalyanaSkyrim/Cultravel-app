import React from "react";
import "./ContentHomePage-style.scss";

const ContentHomePage = () => {
  return (
    <div className="homepage">
      <div className="features">
        <div className="features__row">
          <div className="feature-box ">
            <i className="feature-box__icon fas fa-globe-americas"></i>
            <h3 className="heading-tertiary ">Explore the world</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sint unde, rem cumque minima alias quo repudiandae.
            </p>
          </div>

          <div className="feature-box ">
            <i className="feature-box__icon far fa-compass"></i>
            <h3 className="heading-tertiary ">Meet nature</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sint unde, rem cumque minima alias quo repudiandae.
            </p>
          </div>

          <div className="feature-box ">
            <i className="feature-box__icon fas fa-map-signs"></i>
            <h3 className="heading-tertiary ">Find your way</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sint unde, rem cumque minima alias quo repudiandae.
            </p>
          </div>

          <div className="feature-box ">
            <i className="feature-box__icon far fa-heart"></i>
            <h3 className="heading-tertiary ">Live a healthier life</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sint unde, rem cumque minima alias quo repudiandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHomePage;
