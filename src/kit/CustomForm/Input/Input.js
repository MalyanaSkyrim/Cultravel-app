import React from "react";

const Input = ({
  id,
  label,
  children,
  itemClass = "",
  containerClass,
  ...restProps
}) => {
  const styleBorder = children
    ? {
        borderBottom: "2px solid var(--red)"
      }
    : {};
  return (
    <div className={"form__group " + containerClass}>
      <input
        type="text"
        {...restProps}
        className={"form__input " + itemClass}
        id={id}
        placeholder={label}
        style={styleBorder}
      ></input>
      <label className="form__label">{label}</label>
      <span className="form__error">{children}</span>
    </div>
  );
};

export default Input;
