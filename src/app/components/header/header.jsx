import React from "react";
import "./header.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <label className="text-wrapper">Topeng</label>
      <ul className="nav-bar">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>Contact</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>
      <buttom className="btn-started">Get Started</buttom>
    </header>
  );
};
