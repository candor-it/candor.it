import React, { useState } from "react";

import "./style.css";
import Inner from "../../components/Animation/Curve/transition";
import useHoverEffect from "../../components/Animation/useHoverEffect";
import { projectData } from "./projectData";
import ProjectItem from "./ProjectItems/index";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projectData.filter((project) => (activeFilter === "all" ? true : project.filter.toLowerCase() === activeFilter.toLowerCase()));

  useHoverEffect(".btn-jiggle", 1.2, 3.0, 0.1);

  return (
    <Inner>
      <section id="PROJECT">
        {/* =================================== Hero =================================== */}
        <section id="project__hero">
          <div className="project__hero_text-container">
            <h1 className="project__hero_text-title">
              Crafting Tomorrow's
              <br />
              Tech, Today.
            </h1>
            <div className="project__hero_text-content-container">
              <p className="project__hero_text-content">We blend innovation with precision to deliver cutting-edge solutions tailored to your unique needs.</p>
            </div>
          </div>
          <div className="project__hero_filter-container"></div>
        </section>
        {/* =================================== Project =================================== */}
        <section id="project__project">
          <div className="project__project_filter-container">
            <div className="project__project_filter-list">
              <ul>
                <li data-filter="all" className={`btn-jiggle project__project_button ${activeFilter === "all" ? "active" : ""}`} onClick={() => handleFilterClick("all")}>
                  All
                </li>
                <li data-filter="website" className={`btn-jiggle project__project_button ${activeFilter === "website" ? "active" : ""}`} onClick={() => handleFilterClick("website")}>
                  Website
                </li>
                <li data-filter="mobileApplication" className={`btn-jiggle project__project_button ${activeFilter === "mobileApplication" ? "active" : ""}`} onClick={() => handleFilterClick("mobileApplication")}>
                  Mobile Application
                </li>
                <li data-filter="artificialIntelligence" className={`btn-jiggle project__project_button ${activeFilter === "artificialIntelligence" ? "active" : ""}`} onClick={() => handleFilterClick("artificialIntelligence")}>
                  Artificial Intelligence
                </li>
              </ul>
            </div>
            <div className="project__project_item-container">
              <div className="product__project_item-grid">
                {filteredProjects.map((project, index) => (
                  <ProjectItem key={index} project={project} itemIndex={index} />
                ))}
              </div>
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

export default Projects;
