import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = props => {
  let [current, setCurrent] = useState("test");
  let [scrollY, setScrollY] = useState(0);

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  useEffect(() => {
    if (props.location.pathname == "/") setCurrent("home");
    else setCurrent(props.location.pathname);
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });

    return () => {};
  }, []);

  let menuContainerStyle =
    scrollY > window.innerHeight
      ? {
          "--color": "var(--gray)",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }
      : {};

  return (
    <div className="menu__container" style={menuContainerStyle}>
      <div className="menu">
        <div className="menu__item active">Logo</div>
        <ul className="menu__right-side">
          <li className="menu__item">About</li>

          <li className="menu__item">
            <a>Sign in</a>
          </li>
          <li className="menu__item">
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
