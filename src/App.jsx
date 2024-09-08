import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Nav from "./components/Header/Nav/index";
import SideNav from "./components/Header/SideNav/index";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutUs from "./pages/About";
import Services from "./pages/Services";
import ProjectDetails from "./pages/Projects/ProjectItems/ProjectDetails";
import useHoverEffect from "../src/components/Animation/useHoverEffect";
import ContactForm from "./pages/ContactUs";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const prevLocation = useRef(location.pathname);

  const closeMenu = () => {
    setIsActive(false);
    document.querySelector(".menu-btn").classList.remove("open");
    document.querySelector(".backdrop").classList.remove("open");
    document.body.classList.remove("no-scroll");
  };

  const toggleMenu = () => {
    setIsActive((prevIsActive) => {
      const newIsActive = !prevIsActive;

      if (newIsActive) {
        document.querySelector(".menu-btn").classList.add("open");
        document.querySelector(".backdrop").classList.add("open");
        document.body.classList.add("no-scroll");
      } else {
        document.querySelector(".menu-btn").classList.remove("open");
        document.querySelector(".backdrop").classList.remove("open");
        document.body.classList.remove("no-scroll");
      }

      return newIsActive;
    });
  };

  useLayoutEffect(() => {
    if (window.innerWidth > 768) {
      let ctx = gsap.context(() => {
        gsap.to(".menu-btn", {
          opacity: 1,
          display: "flex",
          scrollTrigger: {
            trigger: ".App",
            start: "800vh center",
            endTrigger: "#contact",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
            onEnter: () => gsap.to(".menu-btn", { display: "flex", opacity: 1 }),
            onLeave: () => gsap.to(".menu-btn", { display: "none", opacity: 0 }),
            onEnterBack: () => gsap.to(".menu-btn", { display: "flex", opacity: 1 }),
            onLeaveBack: () => gsap.to(".menu-btn", { display: "none", opacity: 0 }),
          },
        });
      });

      return () => ctx.revert();
    }
  }, [isActive]);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      setTimeout(() => {
        closeMenu();
        window.scrollTo(0, 0);
      }, 1000);
    }
    prevLocation.current = location.pathname;
  }, [location]);

  useHoverEffect(".btn-jiggle", 1.2, 3.0, 0.1);

  return (
    <div className="App">
      <header className="navbar">
        <Nav />
      </header>
      <div className={`backdrop ${isActive ? "open" : ""}`} onClick={closeMenu} />
      <header className="side-navbar">
        <div className={`menu-btn btn-jiggle ${isActive ? "open" : ""}`} onClick={toggleMenu}>
          <div className="menu-btn__burger" />
        </div>
        <AnimatePresence mode="wait">{isActive && <SideNav />}</AnimatePresence>
      </header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/:slug" element={<ProjectDetails />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/ContactUs" element={<ContactForm />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
