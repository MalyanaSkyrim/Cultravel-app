import React from "react";
import Form from "../../kit/CustomForm/Form/Form";
import Input from "../../kit/CustomForm/Input/Input";
import Button from "../../kit/CustomForm/Button/Button";
import "./SignInForm-style.scss";

const SignInForm = () => {
  return (
    <div className="signin">
      <Form itemClass="signin__form">
        <Input id="username" label="Username"></Input>
        <Input id="password" type="password"></Input>
        <Button>Submit</Button>
      </Form>
      ;
    </div>
  );
};

export default SignInForm;
