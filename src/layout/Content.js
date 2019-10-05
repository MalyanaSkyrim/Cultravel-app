import React from "react";
import NavBar from "./layoutComp/NavBar/NabBar";
import PagesRouter from "../routes/PagesRouter";

const Content = () => {
  return (
    <div className="container">
      <NavBar />
      <PagesRouter />
    </div>
  );
};

export default Content;
