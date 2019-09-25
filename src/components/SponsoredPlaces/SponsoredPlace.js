import React from "react";

const SponsoredPlace = ({ index }) => {
  return (
    <div className="sponsored-places__slide">
      <div
        className={`sponsored-places__content
            sponsored-places__content--4
          `}
      >
        <div
          className={`sponsored-places__background
                      sponsored-places__background--${index}`}
        ></div>
        <div className="sponsored-places__title">
          <h3 className="heading--tertiary ">Hotel Name</h3>
          <p className="sponsored-places__descrp"> Hotel 5 stars, bla bla</p>
        </div>
        <div className="sponsored-places__properties">
          <ul>
            <li className="sponsored-places__property">5 stars</li>
            <li className="sponsored-places__property">Near to the beach</li>
            <li className="sponsored-places__property">
              Moroccan foods and style
            </li>
            <li className="sponsored-places__property">Other advantages</li>
          </ul>
        </div>

        <a href="#" className="btn btn--primary sponsored-places__book">
          Book now
        </a>
        <span className="sponsored-places__tag">sponsored</span>
      </div>
    </div>
  );
};

export default SponsoredPlace;
