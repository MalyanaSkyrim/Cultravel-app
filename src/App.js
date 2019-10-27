import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./layout/Content";
import Loader from "./components/Loader/LoaderContainer";
import "animate.css/animate.min.css";
import "./App.scss";
import { loadUser } from "../src/redux/actions/actionCreators/authActions";

const App = () => {
  const isLoading = useSelector(state => state.commonReducer.isLoading);
  const dispatch = useDispatch();
  const loadUser_ = () => dispatch(loadUser());
  useEffect(() => {
    loadUser_();
  }, []);
  return isLoading ? (
    <Loader></Loader>
  ) : (
    <Router basename={process.env.PUBLIC_URL}>
      <Content></Content>
    </Router>
  );
};

export default App;
