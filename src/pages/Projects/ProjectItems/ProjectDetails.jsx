import React, { useRef, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectData } from "../projectData";
import Inner from "../../../components/Animation/Curve/transition";
import { slugify } from "../../../utils/slugify";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const { slug } = useParams();
  const textContainerRef = useRef(null);

  const project = projectData.find((proj) => slugify(proj.title) === slug);

  useLayoutEffect(() => {
    const textContainer = textContainerRef.current;
    if (!textContainer) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768;

      gsap.to(textContainer, {
        scrollTrigger: {
          trigger: textContainer,
          start: "top 5%",
          endTrigger: ".project__details_item-desc-img-container",
          end: isMobile ? "120% top" : "bottom 87%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Inner>
      <section id="PROJECT-ITEM">
        {/* =================================== Hero =================================== */}
        <section id="project__details_hero">
          <div className="project__details_hero-container">
            <div className="project__details_hero-text-container">
              <h1 className="project__details_hero-title">{project.title}</h1>
              <p className="project__details_hero-info">{project.info}</p>
              <p className="project__details_hero-desc">{project.description}</p>
            </div>
            <img src={project.url} className="project__details_hero-image" />
          </div>
        </section>
        {/* =================================== Item =================================== */}
        <section id="project__details_item">
          <div style={{ backgroundColor: `${project.bgColor}` }} className="imageBox">
            <img src={project.imgDesc} className="project__details_body-image" />
          </div>
          <div className="project__details_item-desc-container">
            <div className="project__details_item-desc-text-container" ref={textContainerRef}>
              <h1 className="project__details_item-desc-text-title">{project.detailTitle}</h1>
              <p className="project__details_item-desc-text-desc">{project.detailDescription}</p>
              <div className="project__details_item-chal-container">
                {project.detailSolution.map((solution, index) => (
                  <div key={index}>
                    <p className="project__details_item-chal">
                      <b>{solution.title}</b>
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="project__details_item-desc-img-container">
              <div className="project__details_item-desc-mobile-img-left">
                {project.detailImgMobile
                  .filter((_, index) => index % 2 === 0)
                  .map((image, index) => (
                    <img src={image} key={index} />
                  ))}
              </div>
              <div className="project__details_item-desc-mobile-img-right">
                {project.detailImgMobile
                  .filter((_, index) => index % 2 !== 0)
                  .map((image, index) => (
                    <img src={image} key={index} />
                  ))}
              </div>
              <div className="project__details_item-desc-website-img-container">
                {project.detailImgWebsite.map((image, index) => (
                  <img src={image} key={index} className="project__details_item-desc-website-img" />
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

export default ProjectDetails;
