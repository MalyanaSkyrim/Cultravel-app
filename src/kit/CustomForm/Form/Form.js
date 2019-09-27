import React from "react";
import "./Form-style.scss";

const Form = ({ children }) => {
  return <form className="form">{children}</form>;
};

export default Form;
