import React from "react";
import "./Testimonials-style.scss";
import Button from "../../kit/CustomForm/Button/Button";

const Testimonials = () => {
  return (
    <div className="testimonials row">
      <h2 className="testimonials__title heading--secondary">Testimonials</h2>
      <div class="story">
        <figure class="story__shape">
          <img
            src="assets/images/nat-8.jpg"
            alt="Person on a tour"
            class="story__image"
          />
          <figcaption class="story__caption">Mary Smith</figcaption>
          <div class="story__blur"></div>
        </figure>

        <div class="story__text">
          <h3 class="heading-tertiary matgin-bottom-2">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            repellendus quia officia expedita suscipit blanditiis,it amet,
            consectetur adipisicing elit,uscipit blanditiis.
          </p>
        </div>
      </div>
      <div class="story">
        <figure class="story__shape">
          <img
            src="assets/images/nat-9.jpg"
            alt="Person on a tour"
            class="story__image"
          />
          <figcaption class="story__caption">Jack Wilson</figcaption>
        </figure>

        <div class="story__text">
          <h3 class="heading-tertiary matgin-bottom-2">
            Wow! My life is completely different now !
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            repellendus quia officia expedita suscipit blanditiis,it amet,
            consectetur adipisicing elit,uscipit blanditiis.
          </p>
        </div>
      </div>
      <div className="story__readmore">
        <Button type="link">
          <a href="#"> Read all stories &rarr; </a>
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
