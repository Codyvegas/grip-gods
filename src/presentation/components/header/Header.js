import React from "react";
import "./Header.css";
import mainLogo from "../../../assets/icons/CTJR_Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const onLogoCLick = () => {
    console.log("logo was clicked");
  };

  return (
    <div className="header">
      <Link to="/">
        <button className="logo-btn" onClick={onLogoCLick}>
          <img src={mainLogo} alt=""></img>
        </button>
      </Link>
      <h1>grip gods</h1>
      <div className="header-page-btns">
        <Link to="about-us">
          <button className="links">about us</button>
        </Link>
        <Link to="/follow-us">
          <button className="links">follow us</button>
        </Link>
        <Link to="/drip-gods">
          <button className="links">drip god</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
