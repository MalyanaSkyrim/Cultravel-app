import React, { useState } from "react";
import AutoComplete from "react-autocomplete";
import "./Selector-style.scss";

const Selector = () => {
  let [searchWord, setSearchWord] = useState("");
  const items = [
    {
      id: "rabat",
      label: "Rabat"
    },
    {
      id: "tanger",
      label: "Tanger"
    },
    {
      id: "fes",
      label: "Fes"
    }
  ];
  return (
    <div className="selector">
      <i className="selector__icon fas fa-map-marker-alt"></i>
      {/* <input
        className="selector__input"
        placeholder="Choose your destinaton"
        type="text"
        onChange={e => setSearchWord(e.target.value)}
      ></input> */}

      <AutoComplete
        getItemValue={item => item.label}
        renderItem={(item, isHighlighted) => (
          <div key={item.id} className="selector__result-item">
            {item.label}
          </div>
        )}
        shouldItemRender={(item, value) =>
          item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        items={items}
        value={searchWord}
        inputProps={{ placeholder: "Choose your destination" }}
        onChange={e => setSearchWord(e.target.value)}
        onSelect={val => setSearchWord(val)}
        menuStyle={{
          position: "absolute",
          left: "5%",
          width: "90%",
          top: "calc(100% + 4px)"
        }}
      />
    </div>
  );
};

export default Selector;
