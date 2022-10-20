import React from "react";
import "./Header.css";
import mainLogo from "../../../assets/icons/main_logo.jpg";

function Header() {
  return (
    <div className="header">
      <img src={mainLogo} alt=""></img>
      <h1>grip gods</h1>
      <div className="header-page-btns">
        <span>follow us</span>
        <span>drip god</span>
        <span>about us</span>
      </div>
    </div>
  );
}

const Header = () => {
  return <div className="header"></div>;
};

export default Header;
