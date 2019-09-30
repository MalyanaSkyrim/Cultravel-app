import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./layout/Content";
import Loader from "./components/Loader/LoaderContainer";
import "animate.css/animate.min.css";
import "./App.scss";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("onload", () => {
      console.log("page is loaded");
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {};
  }, []);

  return (
    <>
      {isLoading ? <Loader></Loader> : true}

      <Router basename={process.env.PUBLIC_URL}>
        <Content></Content>
      </Router>
    </>
  );
}

export default App;
