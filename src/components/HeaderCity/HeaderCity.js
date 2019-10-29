import React, { useEffect, useRef, useState } from "react";
import { Sticky } from "react-sticky";
import { Link, withRouter } from "react-router-dom";
import Selector from "../../kit/Selector/Selector";
import "./HeaderCity-style.scss";

const HeaderCity = ({ city, currenturl, ...props }) => {
  let assetsPath = require.context(
    "../../assets/images",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const [topOffsetHeader, setTopOffsetHeader] = useState(0);
  const [smIsShown, showSideMenu] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const submitAction = city => {
    props.history.push("/city/" + city.toLowerCase());
  };
  useEffect(() => {
    const heightHeader = headerRef.current.content.getBoundingClientRect()
      .height;
    const heightMenu = menuRef.current.getBoundingClientRect().height;

    const topOffsetHeader = heightHeader - heightMenu;
    setTopOffsetHeader(topOffsetHeader);
  }, []);

  return (
    <>
      <Sticky ref={headerRef} topOffset={topOffsetHeader}>
        {({ style, isSticky }) => {
          const headerStyle = isSticky
            ? { ...style, top: -topOffsetHeader + "px" }
            : style;

          return (
            <div
              className="header-city"
              style={{
                backgroundImage: `url(${assetsPath(city.image)})`,
                ...headerStyle
              }}
            >
              <div className="header-city__heading">
                <h1 className="heading--primary">{city.name}</h1>
                <h2 className="heading--sub">{city.descrp}</h2>
              </div>
              <div ref={menuRef} className="header-city__nav">
                <div className="header-city__nav-container">
                  <div className="header-city__selector">
                    <Selector
                      submitAction={submitAction}
                      transition="right"
                      placeholder="Choose another city"
                      icon={
                        <i className="selector__icon fas fa-map-marker-alt"></i>
                      }
                      customMenuStyle={{
                        backgroundColor: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(200,200,200)"
                      }}
                    ></Selector>
                  </div>
                  <div className="header-city__menu">
                    <nav className="nav-city">
                      <ul className="nav-city__list">
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/attractions`}>
                            Attractions
                          </Link>
                        </li>
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/hotels`}>Hotels</Link>
                        </li>
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/restaurants`}>
                            Restaurants
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <input
                    type="checkbox"
                    id="sideMenu-check"
                    className="header-city__check"
                  ></input>
                  <label
                    onClick={() => showSideMenu(!smIsShown)}
                    for="sideMenu-check"
                  >
                    <i className="header-city__plus-icon fas fa-plus"></i>
                  </label>
                  <div className="header-city__sideMenu-bg"></div>
                </div>
              </div>
            </div>
          );
        }}
      </Sticky>
      <div
        className={`header-city__sideMenu header-city__sideMenu--${
          smIsShown ? "shown" : ""
        }`}
      ></div>
    </>
  );
};

export default withRouter(HeaderCity);
