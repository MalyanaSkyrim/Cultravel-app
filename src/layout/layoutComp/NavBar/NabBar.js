import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import types from "../../../redux/actions/actionTypes";
import "./navbar.scss";

const NavBar = props => {
  let [current, setCurrent] = useState("test");
  let [scrollY, setScrollY] = useState(0);
  const isAuthenticated = useSelector(
    state => state.authReducer.isAuthenticated
  );

  const dispatch = useDispatch();
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

  const menuBurgerColor =
    current == "home" && scrollY < (2 * window.innerHeight) / 3
      ? "white"
      : "dark";

  return (
    <div className="menu__container" style={menuContainerStyle}>
      <label for="sidemenu-check">
        <div className="menu__burger-container">
          <span
            className={`menu__burger menu__burger--${menuBurgerColor}`}
          ></span>
        </div>
      </label>
      <input
        id="sidemenu-check"
        className="menu__check"
        type="checkbox"
      ></input>

      <div className="menu">
        <Link to="/">
          <div
            key="home"
            className={`menu__item logo ${current == "home" ? "active" : ""}`}
          >
            Logo
          </div>
        </Link>
        <div className="menu__side">
          <Link to="/about">
            <li
              key="about"
              className={`menu__item ${current == "about" ? "active" : ""}`}
            >
              About
            </li>
          </Link>
          <ul className="menu__right-side">
            <Link to="/account">
              <li
                key="account"
                className={`menu__item ${current == "account" ? "active" : ""}`}
              >
                <i
                  className={
                    (isAuthenticated ? "fas" : "far") + " fa-user menu__icon"
                  }
                ></i>
                {isAuthenticated ? "My account" : "Account"}
              </li>
            </Link>
            {isAuthenticated && (
              <li
                onClick={() => dispatch({ type: types.LOGOUT })}
                className={`menu__item ${current == "logout" ? "active" : ""}`}
              >
                <i className="menu__icon fas fa-sign-out-alt"></i>
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
