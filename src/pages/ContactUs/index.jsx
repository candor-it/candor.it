import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "./style.css";
import Inner from "../../components/Animation/Curve/transition";
import Footer from "../../components/Footer";
import useHoverEffect from "../../components/Animation/useHoverEffect";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_55x73oa";
    const templateID = "template_jkv6zqd";
    const publicKey = "jeYmFuIZJUuPBEn_s";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_organization: formData.organization,
      subject: formData.services,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "success",
          text: "Thank you, " + formData.name + "!\nYour message has been sent.",
        });
        setFormData({ name: "", email: "", organization: "", services: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops...",
          text: "Sorry " + formData.name + "! Something went wrong!",
          footer: '<a href="https://www.instagram.com/candor.itsolution">Report to our instagram DM</a>',
        });
      });
  };

  useHoverEffect(".btn-jiggle", 1.2, 3.0, 0.1);

  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map((char, i) => `<span style="transform:rotate(${i * 9.5}deg)">${char}</span>`)
      .join("");
  }, []);

  return (
    <Inner>
      <section id="CONTACT">
        {/* =================================== Hero =================================== */}
        <section id="contact__hero">
          <div className="contact__hero_container">
            <div className="contact__hero_text-title">
              <h1 className="contact__hero_main-title">
                Let's Work
                <br />
                Together
              </h1>
              <div class="circle">
                <div class="logo">
                  <img src={`${process.env.PUBLIC_URL}/footer/right-arrow-link.png`} />
                </div>
                <div class="text">
                  <p>Let’s&nbsp;Collaborate!&nbsp;</p>
                </div>
              </div>
            </div>
            <div className="contact__hero_container-both">
              <div className="contact__hero_container-left">
                <form className="contact__hero_form-container" onSubmit={handleSubmit}>
                  <div className="contact__hero_form-inputGroup">
                    <span className={formData.name ? "contact__hero_form-number active" : "contact__hero_form-number"}>01</span>
                    <div className="contact__hero_form-inputArea">
                      <label className={formData.name ? "contact__hero_form-label active" : "contact__hero_form-label"}>What's your name?</label>
                      <input type="text" name="name" placeholder="Type your full name" value={formData.name} onChange={handleChange} className="contact__hero_form-input" required />
                    </div>
                  </div>
                  <div className="contact__hero_form-inputGroup">
                    <span className={formData.email ? "contact__hero_form-number active" : "contact__hero_form-number"}>02</span>
                    <div className="contact__hero_form-inputArea">
                      <label className={formData.email ? "contact__hero_form-label active" : "contact__hero_form-label"}>What's your email address?</label>
                      <input type="email" name="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} className="contact__hero_form-input" required />
                    </div>
                  </div>
                  <div className="contact__hero_form-inputGroup">
                    <span className={formData.organization ? "contact__hero_form-number active" : "contact__hero_form-number"}>03</span>
                    <div className="contact__hero_form-inputArea">
                      <label className={formData.organization ? "contact__hero_form-label active" : "contact__hero_form-label"}>What's the name of your organization?</label>
                      <input type="text" name="organization" placeholder="Type none if you are an individual" value={formData.organization} onChange={handleChange} className="contact__hero_form-input" required />
                    </div>
                  </div>
                  <div className="contact__hero_form-inputGroup">
                    <span className={formData.services ? "contact__hero_form-number active" : "contact__hero_form-number"}>04</span>
                    <div className="contact__hero_form-inputArea">
                      <label className={formData.services ? "contact__hero_form-label active" : "contact__hero_form-label"}>What services are you looking for?</label>
                      <input type="text" name="services" placeholder="Web Development, Mobile Development, etc..." value={formData.services} onChange={handleChange} className="contact__hero_form-input" required />
                    </div>
                  </div>
                  <div className="contact__hero_form-inputGroup">
                    <span className={formData.message ? "contact__hero_form-number active" : "contact__hero_form-number"}>05</span>
                    <div className="contact__hero_form-inputArea">
                      <label className={formData.message ? "contact__hero_form-label active" : "contact__hero_form-label"}>Your message</label>
                      <textarea name="message" placeholder="Please give a brief description of your project" value={formData.message} onChange={handleChange} className="contact__hero_form-textarea" required />
                    </div>
                  </div>
                  <button type="submit" className="contact__form-button btn-jiggle">
                    Submit
                  </button>
                </form>
              </div>
              <div className="contact__hero_container-right">
                <div className="contact__hero_callUs">
                  <h1 className="contact__hero_callUs-title">CONTACT US</h1>
                  <p>+62 87855177720</p>
                  <p>hello@candor.it</p>
                </div>
                <div className="contact__hero_callUs">
                  <h1 className="contact__hero_callUs-title">BUSSINESS DETAIL</h1>
                  <p>Leonardo Chandra</p>
                  <p>Surabaya, Indonesia</p>
                </div>
                <div className="contact__hero_callUs">
                  <a>Instagram</a>
                  <a>Linkedin</a>
                  <a>Email</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================================== Contact & Footer =================================== */}
        <section id="contact">
          <div className="footer-container">
            <Footer />
          </div>
        </section>
      </section>
    </Inner>
  );
};

export default ContactForm;
