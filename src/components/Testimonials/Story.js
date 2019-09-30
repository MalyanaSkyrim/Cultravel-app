import React from "react";

const Story = ({ story }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img
          src={story.image}
          alt="Person on a tour"
          className="story__image"
        />
        <figcaption className="story__caption">{story.username}</figcaption>
        <div className="story__blur"></div>
      </figure>

      <div className="story__text">
        <h3 className="heading-tertiary matgin-bottom-2">{story.title}</h3>
        <p>{story.comment}</p>
      </div>
    </div>
  );
};

export default Story;
