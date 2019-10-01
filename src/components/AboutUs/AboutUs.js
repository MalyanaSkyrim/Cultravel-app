import React from "react";
import "./AboutUs-style.scss";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__header">
        <h2 className="heading--secondary aboutus__title">
          we brought to you the culture of morocco
        </h2>
        <svg
          className="aboutus__curve"
          viewBox="0 0 500 50"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            d="M0,50 L0,4 C95,-23 285,115 500,2 L500,50 L0,50 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
        <svg
          className="aboutus__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="512px"
          viewBox="0 0 512 512"
          width="512px"
        >
          <g>
            <path
              d="m71 332.546875v93.453125c0 8.285156 6.714844 15 15 15h93.453125l65.886719 66.554688c2.816406 2.84375 6.65625 4.445312 10.660156 4.445312s7.84375-1.601562 10.660156-4.445312l65.886719-66.554688h93.453125c8.285156 0 15-6.714844 15-15v-93.453125l66.554688-65.886719c2.84375-2.816406 4.445312-6.65625 4.445312-10.660156s-1.601562-7.84375-4.445312-10.660156l-66.554688-65.886719v-93.453125c0-8.285156-6.714844-15-15-15h-93.453125l-65.886719-66.554688c-2.816406-2.84375-6.65625-4.445312-10.660156-4.445312s-7.84375 1.601562-10.660156 4.445312l-65.886719 66.554688h-93.453125c-8.285156 0-15 6.714844-15 15v93.453125l-66.554688 65.886719c-2.84375 2.816406-4.445312 6.65625-4.445312 10.660156s1.601562 7.84375 4.445312 10.660156zm30 78.453125v-48.753906l3.179688 3.148437c8.136718 8.136719 18.640624 12.5 29.3125 13.089844.601562 11.085937 5.199218 21.421875 13.0625 29.28125l3.199218 3.234375zm66.871094-285.660156 24.097656-24.339844h34.03125c8.269531 0 15 6.859375 15 15.292969v43.492187l-21.214844 21.214844h-17.570312l-34.394532-34.394531c-5.847656-5.847657-5.847656-15.363281.050782-21.265625zm176.308594.054687c5.851562 5.847657 5.851562 15.363281 0 21.210938l-34.394532 34.394531h-17.570312l-21.214844-21.214844v-43.492187c0-8.433594 6.730469-15.292969 15-15.292969h34.03125zm-.050782 261.265625-24.097656 24.339844h-34.03125c-8.269531 0-15-6.859375-15-15.292969v-43.492187l21.214844-21.214844h17.570312l34.394532 34.394531c2.835937 2.832031 4.394531 6.597657 4.394531 10.605469s-1.558594 7.773438-4.445313 10.660156zm-176.308594-.054687c-2.835937-2.832031-4.394531-6.597657-4.394531-10.605469s1.558594-7.773438 4.394531-10.605469l34.394532-34.394531h17.570312l21.214844 21.214844v43.488281c0 8.433594-6.730469 15.296875-15 15.296875h-34.03125zm88.179688-199.390625 19.394531 19.390625c2.8125 2.816406 6.625 4.394531 10.605469 4.394531h15v15c0 3.976562 1.578125 7.792969 4.394531 10.605469l19.390625 19.394531-19.390625 19.394531c-2.816406 2.8125-4.394531 6.628907-4.394531 10.605469v15h-15c-3.980469 0-7.792969 1.578125-10.605469 4.394531l-19.394531 19.390625-19.394531-19.390625c-2.8125-2.816406-6.625-4.394531-10.605469-4.394531h-15v-15c0-3.976562-1.578125-7.792969-4.394531-10.605469l-19.390625-19.394531 19.390625-19.394531c2.816406-2.8125 4.394531-6.628907 4.394531-10.605469v-15h15c3.980469 0 7.792969-1.578125 10.605469-4.394531zm75 122.570312v-17.570312l21.214844-21.214844h43.492187c8.433594 0 15.292969 6.730469 15.292969 15v34.03125l-24.394531 24.148438c-5.847657 5.847656-15.363281 5.847656-21.210938 0zm80-83.785156c0 8.269531-6.859375 15-15.292969 15h-43.492187l-21.214844-21.214844v-17.570312l34.394531-34.394532c5.847657-5.847656 15.363281-5.847656 21.265625.050782l24.339844 24.097656zm-230-23.785156v17.570312l-21.214844 21.214844h-43.492187c-8.433594 0-15.292969-6.730469-15.292969-15v-34.03125l24.394531-24.148438c5.847657-5.847656 15.363281-5.847656 21.210938 0zm-80 83.785156c0-8.269531 6.859375-15 15.292969-15h43.492187l21.214844 21.214844v17.570312l-34.394531 34.394532c-5.847657 5.847656-15.363281 5.847656-21.265625-.050782l-24.339844-24.097656zm155 189.679688-34.332031-34.679688h4.332031c11.515625 0 22.03125-4.382812 30-11.570312 7.96875 7.1875 18.484375 11.570312 30 11.570312h4.332031zm155-64.679688h-48.753906l3.148437-3.179688c7.910157-7.910156 12.511719-18.246093 13.113281-29.328124 10.660157-.585938 21.148438-4.9375 29.257813-13.046876l3.234375-3.199218zm64.679688-155-34.679688 34.332031v-4.332031c0-11.515625-4.382812-22.03125-11.570312-30 7.1875-7.96875 11.570312-18.484375 11.570312-30v-4.332031zm-64.679688-155v48.753906l-3.179688-3.148437c-7.90625-7.90625-18.238281-12.507813-29.3125-13.113281-.605468-11.078126-5.203124-21.402344-13.0625-29.257813l-3.199218-3.234375zm-155-64.679688 34.332031 34.679688h-4.332031c-11.515625 0-22.03125 4.375-30 11.5625-7.96875-7.1875-18.484375-11.5625-30-11.5625h-4.332031zm-155 64.679688h48.753906l-3.148437 3.179688c-7.90625 7.90625-12.507813 18.234374-13.109375 29.3125-11.078125.605468-21.40625 5.203124-29.261719 13.0625l-3.234375 3.199218zm-30 120.667969v4.332031c0 11.515625 4.382812 22.03125 11.570312 30-7.1875 7.96875-11.570312 18.484375-11.570312 30v4.332031l-34.679688-34.332031zm0 0"
              data-original="#000000"
              className="active-path"
              data-old_color="#000000"
              fill="#FFFF"
            />
          </g>{" "}
        </svg>
      </div>
      <div className="content">
        <div className="aboutus__intro row">
          <div className="aboutus__intro-content">
            <h3 className="aboutus__sub-title heading--tertiary">Who we are</h3>
            <p className="aboutus__descrp">
              lorem gezyugdzau ezafzegfu ezyzgef zeufgz zegf zeuzegf ze
              fuzegfuze ze fgyegfzue fuzgefuz efugzefu gzuegf lorem gezyugdzau
              ezafzegfu ezyzgef zeufgz zegf zeuzegf ze fuzegfuze ze fgyegfzue
              fuzgefuz efugzefu gzuegf lorem gezyugdzau ezafzegfu ezyzgef zeufgz
              zegf zeuzegf ze fuzegfuze ze fgyegfzue fuzgefuz efugzefu gzuegf.
            </p>
          </div>
          <div className="aboutus__intro-image"></div>
        </div>
        <div className="aboutus__mission row">
          <h3 className="aboutus__sub-title aboutus__sub-title--mission  heading--tertiary">
            Our mission
          </h3>
          <p className="aboutus__descrp">
            lorem gezyugdzau ezafzegfu ezyzgef zeufgz zegf zeuzegf ze fuzegfuze
            ze fgyegfzue fuzgefuz efugzefu gzuegf lorem gezyugdzau ezafzegfu
            ezyzgef zeufgz zegf zeuzegf ze fuzegfuze ze fgyegfzue fuzgefuz
            efugzefu gzuegf lorem gezyugdzau ezafzegfu ezyzgef zeufgz zegf
            zeuzegf ze fuzegfuze ze fgyegfzue fuzgefuz efugzefu gzuegf.
          </p>
        </div>
        <div className="aboutus__story row">
          <h3 className="aboutus__sub-title aboutus__sub-title--mission  heading--tertiary">
            Our Story
          </h3>
          <div className="aboutus__story-content">
            <div className="aboutus__video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fimT15Iu7jg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p className="aboutus__descrp aboutus__descrp--story ">
              lorem gezyugdzau ezafzegfu ezyzgef zeufgz zegf zeuzegf ze
              fuzegfuze ze fgyegfzue fuzgefuz efugzefu gzuegf lorem gezyugdzau
              ezafzegfu ezyzgef zeufgz zegf zeuzegf ze fuzegfuze ze fgyegfzue
              fuzgefuz efugzefu gzuegf lorem gezyugdzau ezafzegfu ezyzgef zeufgz
              zegf zeuzegf ze fuzegfuze ze fgyegfzue fuzgefuz efugzefu gzuegf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
