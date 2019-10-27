import React from "react";
import "./Button-style.scss";

const Button = ({
  type = "primary",
  itemClass = "",
  containerClass = "",
  children,
  disabled,
  ...restProps
}) => {
  //types : ---------------
  //primary : default
  //secondary
  //link
  return (
    <div className={"form__group " + containerClass}>
      <button
        {...restProps}
        className={`btn btn--${type} ${itemClass}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
