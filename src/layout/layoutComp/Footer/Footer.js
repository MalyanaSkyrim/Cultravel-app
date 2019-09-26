import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <picture className="footer__logo">
          <source
            media="(max-width: 37.5em)"
            srcset="
              img/logo-green-small-1x.png 1x,
              img/logo-green-small-2x.png 2x
            "
          />
          <img
            srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
            alt="Full logo"
          />
        </picture>
      </div>
      <div className="footer__row">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <p className="footer__copyright">
          Practice design by
          <a href="#" className="footer__link">
            Mohamed Malyana
          </a>{" "}
          using free online course. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Magnam quo provident, nostrum dicta fugit magni
          iusto.
        </p>
      </div>
    </div>
  );
};

export default Footer;
