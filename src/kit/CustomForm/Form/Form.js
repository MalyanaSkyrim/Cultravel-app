import React from "react";
import "./Form-style.scss";

const Form = ({ itemClass, children }) => {
  return <form className={"form " + itemClass}>{children}</form>;
};

export default Form;
