import React from "react";
import Header from "./layoutComp/Header/Header";
import Footer from "./layoutComp/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header></Header>
      <div className="content">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
