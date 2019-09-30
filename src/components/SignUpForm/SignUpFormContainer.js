import React from "react";
import SignUpForm from "./SignUpForm";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpFormContainer = ({ itemClass }) => {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    password: Yup.string()
      .min(8, "Length of password must be at least 8 characters")
      .required("Required"),
    confPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
  });
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confPassword: ""
      }}
      validationSchema={SignupSchema}
      //   validate={values => {
      //     let errors = {};
      //     if (!values.username) {
      //       errors.username = "Required";
      //     }
      //     if (!values.email) {
      //       errors.email = "Required";
      //     } else if (
      //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //     ) {
      //       errors.email = "Invalid email address";
      //     }

      //     if (!values.password) {
      //       errors.password = "Required";
      //     } else if (values.password.length < 8) {
      //       errors.password = "length of password must be at least 8 characters";
      //     }
      //     if (!values.confPassword) {
      //       errors.confPassword = "Required";
      //     } else if (values.confPassword != values.password) {
      //       errors.confPassword = "password do not match";
      //     }

      //     return errors;
      //   }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <SignUpForm
          itemClass={itemClass}
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </Formik>
  );
};

export default SignUpFormContainer;
