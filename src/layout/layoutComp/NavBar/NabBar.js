import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = props => {
  let [current, setCurrent] = useState("test");
  let [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    if (props.location.pathname == "/") setCurrent("home");
    else setCurrent(props.location.pathname.substring(1));

    return () => {};
  }, [props.location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let primaryStyle = {
    "--color": "var(--gray)",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.20)",
    borderBottom: "1px solid rgba(171, 171, 171, 0.5)"
  };
  let menuContainerStyle =
    current == "home"
      ? scrollY > 0 && scrollY < (2 * window.innerHeight) / 3
        ? { opacity: 0 }
        : scrollY >= (2 * window.innerHeight) / 3
        ? primaryStyle
        : {}
      : primaryStyle;

  return (
    <div className="menu__container" style={menuContainerStyle}>
      <div className="menu">
        <Link to="/">
          <div
            key="home"
            className={`menu__item ${current == "home" ? "active" : ""}`}
          >
            Logo
          </div>
        </Link>
        <ul className="menu__right-side">
          <Link to="/about">
            <li
              key="about"
              className={`menu__item ${current == "about" ? "active" : ""}`}
            >
              About
            </li>
          </Link>

          <Link to="/sign">
            <li
              key="sign"
              className={`menu__item ${current == "sign" ? "active" : ""}`}
            >
              Account
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
