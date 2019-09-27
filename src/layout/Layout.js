import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./layoutComp/Footer/Footer";
import Header from "./layoutComp/Header/Header";
import ContentHomePage from "../components/ContentHomePage/ContentHomePage";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={ContentHomePage} />
        <div className="content">{children}</div>
      </Switch>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
