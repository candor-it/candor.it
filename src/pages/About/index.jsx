import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Inner from "../../components/Animation/Curve/transition";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import useHoverEffect from "../../components/Animation/useHoverEffect";

const AboutUs = () => {
  useHoverEffect(".btn-jiggle", 1.2, 3.0, 0.1);

  return (
    <Inner>
      <section id="ABOUT">
        {/* =================================== Hero =================================== */}
        <section id="about__hero">
          <div className="about__hero_container">
            <div className="about__hero_text-title">
              <h1 className="about__hero_main-title">
                Candor.it
                <span className="about__hero_title-image">
                  <img src={`${process.env.PUBLIC_URL}/about/about-1.png`} />
                </span>
                is
                <br />
                <span className="about__hero_title-image">
                  <img src={`${process.env.PUBLIC_URL}/about/about-2.png`} />
                </span>
                Known for
                <br />
                Innovation
              </h1>
            </div>
            <div className="about__hero_statistics">
              <div className="about__hero_statistics-item">
                <h2>5+</h2>
                <p>Projects</p>
              </div>
              <div className="about__hero_statistics-item">
                <h2>5+</h2>
                <p>Happy Clients</p>
              </div>
              <div className="about__hero_statistics-item">
                <h2>
                  5 <p>&#9733;</p>
                </h2>
                <p>Rating</p>
              </div>
              <Link to="/Projects">
                <button className="about__hero_text-button btn-jiggle">
                  <h3>See the work of our team →</h3>
                </button>
              </Link>
            </div>
            <div className="about__hero_img">
              <img src={`${process.env.PUBLIC_URL}/project/project-1/project-desc.png`} className="about__hero_img-item1" />
              <img src={`${process.env.PUBLIC_URL}/project/project-2/project-desc.png`} className="about__hero_img-item2" />
              <img src={`${process.env.PUBLIC_URL}/project/project-3/project-desc.png`} className="about__hero_img-item1" />
            </div>
          </div>
        </section>
        {/* =================================== Body =================================== */}
        <section id="about__body">
          <div className="about__body_container">
            <div className="about__body_text-title">
              <h1 className="about__body_main-title">
                Crafting Solutions, <br />
                Creating Success
              </h1>
              <p className="about__body_text-content">
                We are a dynamic digital solutions company dedicated
                <br />
                to transforming your ideas into reality.
              </p>
            </div>
            <div className="about__body_description">
              <div className="about__body_description-container">
                <h1 className="about__body_description-title">Our Principle</h1>
                <p className="about__body_description-text">
                  At Candor IT Solution, we believe in the power of transparency, honesty, and technical excellence. Our name, Candor, reflects our commitment to clear communication and ethical practices in every project we undertake.
                </p>
              </div>
              <img src={`${process.env.PUBLIC_URL}/about/about-3.png`} className="about__body_img-item1" />
            </div>
          </div>
        </section>
        {/* =================================== Last =================================== */}
        <section id="about__last">
          <div className="about__body_body-container">
            <h1 className="about__body_body-title">
              Let’s build the
              <br />
              future together
              <br />
              one digital
              <br />
              solution at a time.
            </h1>
            <img src={`${process.env.PUBLIC_URL}/about/about-4.png`} className="about__body_body-img" />
          </div>
        </section>
        {/* =================================== Contact & Footer =================================== */}
        <section id="contact">
          <div className="contact__content-container">
            <div className="contact-container">
              <Contact />
            </div>
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </section>
      </section>
    </Inner>
  );
};

export default AboutUs;
