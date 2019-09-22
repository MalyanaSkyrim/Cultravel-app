import React from "react";
import "./Selector-style.scss";

const Selector = () => {
  return (
    <div className="selector">
      <i className="selector__icon fas fa-map-marker-alt"></i>
      <input
        className="selector__input"
        placeholder="Choose your destinaton"
        type="text"
      ></input>
      <div className="selector__results">
        <ul className="selector__list">
          <li className="selector__result-item">Rabat</li>
          <li className="selector__result-item">Marakkech</li>
          <li className="selector__result-item">Tanger</li>
        </ul>
      </div>
    </div>
  );
};

export default Selector;
