import React from "react";

const TextArea = ({ label, itemClass, containerClass, ...restProps }) => {
  return (
    <div className={"form__group " + containerClass}>
      <label className="form__label">{label} </label>
      <textarea className={"form__textarea " + itemClass}></textarea>
    </div>
  );
};

export default TextArea;
