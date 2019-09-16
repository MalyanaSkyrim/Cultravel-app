import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHotel-style.scss";

const HeaderHotel = () => {
  return (
    <header className="hotel-header">
      This is The HotelHeader
      <br />
      <Link to="/city/tanger/hotels/Farah">
        <a>Go to Hotel Farah</a>
      </Link>
    </header>
  );
};

export default HeaderHotel;
