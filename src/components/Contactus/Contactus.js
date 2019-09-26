import React from "react";
import "./Contactus-style.scss";

const Contactus = () => {
  return (
    <div className="contactus">
      <div className="contactus__container">
        <div className="contactus__form-links">
          <div className="contactus__form">
            <form className="form">
              <div className="form__group">
                <input
                  required
                  className="form__input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username :"
                ></input>
                <label className="form__label">Username :</label>
              </div>
              <div className="form__group">
                <input
                  required
                  className="form__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email :"
                ></input>
                <label className="form__label">E-mail : </label>
              </div>
              <div className="form__group">
                <label className="form__label">Text us : </label>
                <textarea className="form__textarea"></textarea>
              </div>
              <div className="form__group">
                <button className="btn btn--secondary">Send</button>
              </div>
            </form>
          </div>
          <div className="contactus__social-links"></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
