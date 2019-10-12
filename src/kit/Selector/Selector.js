import React, { useState } from "react";
import AutoComplete from "react-autocomplete";
import "./Selector-style.scss";
import Button from "../CustomForm/Button/Button";

const Selector = ({
  placeholder,
  icon,
  transition = "center",
  submitAction,
  customMenuStyle
}) => {
  let [searchWord, setSearchWord] = useState("");
  let [isSelected, setIsSelected] = useState(false);
  let [cursor, setCursor] = useState(0);
  let [currentItem, setCurrentItem] = useState("");

  //transition :
  //center: Default
  //right

  const selectorStyle = transition === "right" ? { margin: "auto 0" } : {};

  const handleKeyDown = e => {
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < items.length - 1) {
      setCursor(cursor + 1);
    }
  };

  const items = [
    {
      id: "tanger",
      label: "Tanger"
    },
    {
      id: "ouarzazate",
      label: "Ouarzazate"
    },
    {
      id: "chefchaouen",
      label: "Chefchaouen"
    }
  ];

  const HandleSubmit = e => {
    e.preventDefault();
    if (!isSelected) {
      setSearchWord(currentItem);
      setIsSelected(true);
    } else {
      submitAction(searchWord);
    }
  };
  let buttonClass = isSelected ? "option-selected" : "";

  return (
    <div className="selector" style={selectorStyle}>
      {icon}
      <form className="selector__form" onSubmit={HandleSubmit}>
        <Button containerClass={`selector__button  ${buttonClass}`}> Go</Button>
        <AutoComplete
          getItemValue={item => item.label}
          renderItem={(item, isHighlighted) => {
            let currentClss = "";
            if (items.indexOf(item) == cursor) {
              currentClss = "current";
              setCurrentItem(item.label);
            }
            if (item.label != searchWord) setIsSelected(false);
            return (
              <div
                key={item.id}
                className={"selector__result-item " + currentClss}
              >
                {item.label}
              </div>
            );
          }}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          items={items}
          value={searchWord}
          inputProps={{
            placeholder: placeholder,
            onKeyDown: handleKeyDown
          }}
          onChange={e => setSearchWord(e.target.value)}
          onSelect={val => {
            setSearchWord(val);
            setIsSelected(true);
          }}
          menuStyle={{
            position: "absolute",
            left: "5%",
            width: "90%",
            minWidth: "0",
            top: "calc(100% + 4px)",
            borderRadius: "8px",
            ...customMenuStyle
          }}
        ></AutoComplete>
      </form>
    </div>
  );
};

export default Selector;
