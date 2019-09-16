import React from "react";
import Footer from "./layoutComp/Footer/Footer";
import Header from "./layoutComp/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
