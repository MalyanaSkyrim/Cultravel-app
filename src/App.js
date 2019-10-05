import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./layout/Content";
import Loader from "./components/Loader/LoaderContainer";
import "animate.css/animate.min.css";
import "./App.scss";
import emitter from "../src/eventEmitter";

const App = () => {
  useEffect(() => {
    emitter.emit("loading");
  }, []);
  return (
    <>
      <Loader></Loader>
      <Router basename={process.env.PUBLIC_URL}>
        <Content></Content>
      </Router>
    </>
  );
};

export default App;
