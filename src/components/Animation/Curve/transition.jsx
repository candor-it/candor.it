import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./style.css";
import { slugify } from "../../../utils/slugify";
import { projectData } from "../../../pages/Projects/projectData";

const routes = {
  "/candor.it/AboutUs": "About",
  "/candor.it/Projects": "Projects",
  "/candor.it/": "Home",
  "/candor.it/Service": "Services",
  "/candor.it/ContactUs": "Contact",
  "/candor.it/Projects/:slug": (slug) => {
    const project = projectData.find((proj) => slugify(proj.title) === slug);
    return project ? project.title : "Project Not Found";
  },
};

const getRouteTitle = (pathname, projectData) => {
  const matchingRoute = Object.keys(routes).find((route) => {
    const dynamicRouteMatch = route.includes(":slug") && pathname.startsWith(route.split(":")[0]);
    return route === pathname || dynamicRouteMatch;
  });

  if (matchingRoute && routes[matchingRoute]) {
    if (typeof routes[matchingRoute] === "function") {
      const slug = pathname.split("/").pop();
      return routes[matchingRoute](slug, projectData);
    }
    return routes[matchingRoute];
  }
  return "Page Not Found";
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Inner({ children }) {
  const location = useLocation();

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: { top: "47.5%", display: "none" },
    },
    exit: {
      opacity: 0,
      top: "40%",
      transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  };

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const routeTitle = getRouteTitle(location.pathname, projectData);

  return (
    <div className="page curve">
      <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className="background" />
      <AnimatePresence mode="wait">
        <motion.p className="route" {...anim(text)}>
          {routeTitle}
        </motion.p>
      </AnimatePresence>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ width, height }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300 
    L${width} ${height + 300} 
    Q${width / 2} ${height + 600} 0 ${height + 300} 
    L0 300
  `;

  const targetPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300 
    L${width} ${height} 
    Q${width / 2} ${height} 0 ${height} 
    L0 300
  `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: { top: "-300px" },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg {...anim(slide)} className="svgTransition">
      <motion.path {...anim(curve)} />
    </motion.svg>
  );
};
