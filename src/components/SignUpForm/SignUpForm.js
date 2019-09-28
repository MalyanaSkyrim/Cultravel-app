import React from "react";
import Form from "../../kit/CustomForm/Form/Form";
import Input from "../../kit/CustomForm/Input/Input";
import Button from "../../kit/CustomForm/Button/Button";

const SignUpForm = ({ itemClass }) => {
  return (
    <Form itemClass={itemClass}>
      <Input
        required
        itemClass="sign-in-up__input"
        id="username"
        label="Username"
      ></Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="Email"
        label="Email : "
      ></Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="password"
        type="password"
        label="Password :"
      ></Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="conf-password"
        type="password"
        label="Confirm password :"
      ></Input>
      <Button>Submit</Button>
    </Form>
  );
};

export default SignUpForm;
