import React from "react";

const Input = ({ id, label, itemClass, containerClass, ...restProps }) => {
  return (
    <div className={"form__group " + containerClass}>
      <input
        type="text"
        {...restProps}
        className={"form__input " + itemClass}
        id={id}
        placeholder={label}
      ></input>
      <label className="form__label">{label}</label>
    </div>
  );
};

export default Input;
