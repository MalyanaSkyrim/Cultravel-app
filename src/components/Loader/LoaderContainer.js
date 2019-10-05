import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import emitter from "../../eventEmitter";

const LoaderContainer = () => {
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timeout;
    emitter.addListener("loading", () => {
      setIsLoading(true);
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return isLoading ? <Loader /> : true;
};

export default LoaderContainer;
