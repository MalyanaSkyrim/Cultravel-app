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
                            <i className="nav-city__icon fas fa-landmark"></i>
                            Attractions
                          </Link>
                        </li>
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/hotels`}>
                            <i className="nav-city__icon fas fa-hotel"></i>
                            Hotels
                          </Link>
                        </li>
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/restaurants`}>
                            <i className="nav-city__icon fas fa-utensils"></i>
                            Restaurants
                          </Link>
                        </li>
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/restaurants`}>
                            <i className="nav-city__icon far fa-calendar-check"></i>
                            events
                          </Link>
                        </li>
                        <li className="nav-city__item">
                          <Link to={`${currenturl}/restaurants`}>
                            <i className="nav-city__icon fas fa-car"></i>
                            Car Rentals
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
                    htmlFor="sideMenu-check"
                    className="header-city__label-plusIcon"
                  >
                    <i className="header-city__plus-icon fas fa-plus"></i>
                    <div className="header-city__sideMenu-bg"></div>
                  </label>
                </div>
              </div>
            </div>
          );
        }}
      </Sticky>
      <div className={`sideMenu sideMenu--${smIsShown ? "shown" : ""}`}>
        <div className="sideMenu__item">
          <h3 className="sideMenu__title heading--secondary ">
            <i className="sideMenu__icon fas fa-landmark"></i>
            Attractions
          </h3>
        </div>
        <div className="sideMenu__item">
          <h3 className="sideMenu__title heading--secondary ">
            <i className="sideMenu__icon fas fa-utensils"></i>
            Restaurants
          </h3>
        </div>
        <div className="sideMenu__item">
          <h3 className="sideMenu__title heading--secondary ">
            <i className="sideMenu__icon fas fa-hotel"></i>
            Hotels
          </h3>
        </div>
        <div className="sideMenu__item">
          <h3 className="sideMenu__title heading--secondary ">
            <i className="sideMenu__icon fas fa-car"></i>Car Rentals
          </h3>
        </div>
        <div className="sideMenu__item">
          <h3 className="sideMenu__title heading--secondary ">
            <i className="sideMenu__icon far fa-calendar-check"></i>Events
          </h3>
        </div>
      </div>
    </>
  );
};

export default withRouter(HeaderCity);
