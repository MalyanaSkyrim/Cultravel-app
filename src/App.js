import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Content from "./layout/Content";

function App() {
  return (
    <Router>
      <Content></Content>
    </Router>
  );
}

export default App;
