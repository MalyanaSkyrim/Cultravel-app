import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Content from "./layout/Content";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Content></Content>
    </Router>
  );
}

export default App;
