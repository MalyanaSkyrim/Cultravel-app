import React from "react";
import Form from "../../kit/CustomForm/Form/Form";
import Input from "../../kit/CustomForm/Input/Input";
import Button from "../../kit/CustomForm/Button/Button";

const SignInForm = ({ itemClass }) => {
  return (
    <Form itemClass={itemClass}>
      <Input
        required
        itemClass="sign-in-up__input"
        id="username"
        label="Username :"
      ></Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="password"
        type="password"
        label="Password :"
      ></Input>
      <Button>Submit</Button>
    </Form>
  );
};

export default SignInForm;
