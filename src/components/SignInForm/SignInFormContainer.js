import React from "react";
import SignInForm from "./SignInForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/actionCreators/authActions";

const SignInFormContainer = ({ itemClass }) => {
  const dispatch = useDispatch();
  const signIn_ = data => dispatch(signIn(data));

  const SigninSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    password: Yup.string()
      .min(8, "Length of password must be at least 8 characters")
      .required("Required")
  });

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={SigninSchema}
      // validate={values => {
      //   let errors = {};
      //   if (!values.username) {
      //     errors.username = "Required";
      //   }
      //   if (!values.password) {
      //     errors.password = "Required";
      //   } else if (values.password.length < 8) {
      //     errors.password = "length of password must be at least 8 characters";
      //   }
      //   return errors;
      // }}
      onSubmit={async (values, { setSubmitting }) => {
        await signIn_(values);
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
        <SignInForm
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
export default SignInFormContainer;
