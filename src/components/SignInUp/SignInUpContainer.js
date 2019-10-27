import React from "react";
import { useSelector } from "react-redux";
import SignInUp from "./SignInUp";
import Profile from "../Profile/Profile";

const SignInUpContainer = () => {
  const isAuthenticated = useSelector(
    state => state.authReducer.isAuthenticated
  );
  return isAuthenticated ? <Profile></Profile> : <SignInUp></SignInUp>;
};

export default SignInUpContainer;
