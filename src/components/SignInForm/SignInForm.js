import React from "react";
import Form from "../../kit/CustomForm/Form/Form";
import Input from "../../kit/CustomForm/Input/Input";
import Button from "../../kit/CustomForm/Button/Button";

const SignInForm = ({
  itemClass,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Form itemClass={itemClass} onSubmit={handleSubmit}>
      <Input
        required
        itemClass="sign-in-up__input"
        id="username"
        label="Username :"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      >
        {errors.username && touched.username && errors.username}
      </Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="password"
        label="Password :"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      >
        {errors.password && touched.password && errors.password}
      </Input>
      <Button disabled={isSubmitting}>Submit</Button>
    </Form>
  );
};

export default SignInForm;
