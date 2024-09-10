import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="text-wrapper">Topeng</div>
      <ul className="nav-bar">
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>
      <buttom className="overlap-group">
        <span className="text-wrapper-5">Get Started</span>
      </buttom>
    </header>
  );
};
