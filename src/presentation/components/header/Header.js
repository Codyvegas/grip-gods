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
          <button className="links">
            <span>about us</span>
          </button>
        </Link>
        <Link to="/follow-us">
          <button className="links">
            <span>follow us</span>
          </button>
        </Link>
        <Link to="/drip-gods">
          <button className="links">
            <span>drip god</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
