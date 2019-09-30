import React from "react";
import "./Form-style.scss";

const Form = ({ itemClass = "", children, ...restProps }) => {
  return (
    <form noValidate {...restProps} className={"form " + itemClass}>
      {children}
    </form>
  );
};

export default Form;
