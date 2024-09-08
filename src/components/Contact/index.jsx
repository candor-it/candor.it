import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact__text-container">
      <div className="contact__content-logo-container">
        <img className="contact__content-logo" src={`${process.env.PUBLIC_URL}/footer/iv_logo.png`} />
      </div>
      <div className="contact__text-description">
        <h1 className="contact__text-title">GET IN TOUCH.</h1>
        <p className="contact__text-par">PROJECTS, INQUIRIES, AND NEW BUSINESS </p>
        <h1 className="contact__text-email">hello@candor.it</h1>
      </div>
      <div className="contact__link-container">
        <div className="contact__link-email">
          <a onClick={() => window.open("https://www.instagram.com/candor.itsolution/")}>
            instagram
            <img src={`${process.env.PUBLIC_URL}/footer/right-arrow-link.png`} />
          </a>
          <a href="#">
            linkedin
            <img src={`${process.env.PUBLIC_URL}/footer/right-arrow-link.png`} />
          </a>
        </div>
        <div className="contact__link-faq">
          <Link to="/candor.it/AboutUs">
            about <img src={`${process.env.PUBLIC_URL}/footer/right-arrow-link.png`} />
          </Link>
          <Link to="/candor.it/Projects">
            work
            <img src={`${process.env.PUBLIC_URL}/footer/right-arrow-link.png`} />
          </Link>
          <Link to="/candor.it/ContactUs">
            Contact Us
            <img src={`${process.env.PUBLIC_URL}/footer/right-arrow-link.png`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
