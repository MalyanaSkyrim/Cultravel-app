import React from "react";
import Testimonials from "./Testimonials";

const TestimonialsContainer = () => {
  const stories = [
    {
      image: "assets/images/nat-8.jpg",
      username: "Mary Smith",
      title: "I had the best week ever with my family",
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
			repellendus quia officia expedita suscipit blanditiis,it amet,
			consectetur adipisicing elit,uscipit blanditiis.`
    },
    {
      image: "assets/images/nat-9.jpg",
      username: "Jack Wilson",
      title: "Wow! My life is completely different now !",
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
				  repellendus quia officia expedita suscipit blanditiis,it amet,
				  consectetur adipisicing elit,uscipit blanditiis.`
    }
  ];

  return <Testimonials stories={stories} />;
};

export default TestimonialsContainer;
