import React from "react";
import "./Header.css";
import mainLogo from "../../../assets/icons/main_logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={mainLogo} alt=""></img>
      <h1>grip gods</h1>
      <div className="header-page-btns">
        <Link to="/follow-us">follow us</Link>
        <Link to="/drip-gods">drip gods</Link>
        <Link to="about-us">about us</Link>
      </div>
    </div>
  );
}

export default Header;
