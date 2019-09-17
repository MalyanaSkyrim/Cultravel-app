import React from "react";
import NavBar from "../NavBar/NabBar";
import { Link } from "react-router-dom";
import HeaderRouter from "../../../routes/HeaderRouter";

const Header = () => {
  return (
    <div className="header">
      <NavBar></NavBar>
      <HeaderRouter></HeaderRouter>
    </div>
  );
};

export default Header;
