import React from "react";

import "./style.css";

import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Inner from "../../components/Animation/Curve/transition";

const Services = () => {
  return (
    <Inner>
      <section id="SERVICES">
        {/* =================================== Hero =================================== */}
        <section id="services__hero">
          <div className="services__hero_container">
            <div className="services__hero_text-title">
              <h1 className="services__hero_main-title">Digital Solutions with a Human Touch</h1>
              <p className="services__hero_main-text">With expertise in mobile app development, website design, and artificial intelligence, we provide cutting-edge solutions that drive business success in the digital age.</p>
            </div>
          </div>
          <div className="services__item_container">
            <div className="services__item-website">
              <div className="services__item-website-text">
                <h1 className="services__item-website-text-title">Website Development</h1>
                <p className="services__item-website-text-text">Our expertly crafted websites combine aesthetics and functionality to leave a lasting impression and deliver seamless user experiences.</p>
              </div>
              <img src={`${process.env.PUBLIC_URL}/services/services-1.png`} className="services__item-website-img" />
            </div>
            <div className="services__item-website">
              <img src={`${process.env.PUBLIC_URL}/services/services-2.png`} className="services__item-mobile-img" />
              <div className="services__item-website-text">
                <h1 className="services__item-website-text-title">Mobile App Development</h1>
                <p className="services__item-website-text-text">We create intuitive and high-performance mobile apps that enhance user experiences and drive business growth.</p>
              </div>
            </div>
            <div className="services__item-website">
              <div className="services__item-website-text">
                <h1 className="services__item-website-text-title">Artificial Intelligence</h1>
                <p className="services__item-website-text-text">We harness AI technology to develop intelligent solutions that automate tasks, provide insights, and boost your business efficiency.</p>
              </div>
              <img src={`${process.env.PUBLIC_URL}/services/services-3.png`} className="services__item-ai-img" />
            </div>
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

export default Services;
