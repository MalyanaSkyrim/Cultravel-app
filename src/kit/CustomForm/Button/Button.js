import React from "react";
import "./Button-style.scss";

const Button = ({
  type = "primary",
  itemClass = "",
  containerClass = "",
  children,
  disabled
}) => {
  //types : ---------------
  //primary : default
  //secondary
  //link
  console.log(disabled);
  return (
    <div>
      <div className={"form__group " + containerClass}>
        <button className={`btn btn--${type} ${itemClass}`} disabled={disabled}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
