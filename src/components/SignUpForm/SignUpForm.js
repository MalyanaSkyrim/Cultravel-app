import React from "react";
import Form from "../../kit/CustomForm/Form/Form";
import Input from "../../kit/CustomForm/Input/Input";
import Button from "../../kit/CustomForm/Button/Button";

const SignUpForm = ({
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
        label="Username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      >
        {errors.username && touched.username && errors.username}
      </Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="email"
        label="Email : "
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      >
        {errors.email && touched.email && errors.email}
      </Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="password"
        type="password"
        label="Password :"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      >
        {errors.password && touched.password && errors.password}
      </Input>
      <Input
        required
        itemClass="sign-in-up__input"
        id="confirmPassword"
        type="password"
        label="Confirm password :"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
      >
        {errors.confirmPassword &&
          touched.confirmPassword &&
          errors.confirmPassword}
      </Input>
      <Button>Submit</Button>
    </Form>
  );
};

export default SignUpForm;
