import React from "react";
import "./Button-style.scss";

const Button = ({ type, itemClass, containerClass, children }) => {
  //types : ---------------
  //primary
  //secondary
  //link

  return (
    <div>
      <div className={"form__group " + containerClass}>
        <button className={`btn btn--${type} ${itemClass}`}>{children}</button>
      </div>
    </div>
  );
};

export default Button;
