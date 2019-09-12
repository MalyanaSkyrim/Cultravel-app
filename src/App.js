import React from "react";
import "./App.scss";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        {"env : " + process.env.REACT_APP_BASE_URL}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
