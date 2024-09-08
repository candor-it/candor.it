import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar({ toggleMenu, isActive }) {
  return (
    <nav className="navbar__item">
      <ul>
        <li>
          <Link to="/candor.it/AboutUs">About</Link>
        </li>
        <li>
          <Link to="/candor.it/Projects">Projects</Link>
        </li>
        <Link to="/candor.it/">
          <img src={`${process.env.PUBLIC_URL}/home/logo.png`} className="header__logo" />
        </Link>
        <li>
          <Link to="/candor.it/Service">Services</Link>
        </li>
        <li>
          <Link to="/candor.it/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
