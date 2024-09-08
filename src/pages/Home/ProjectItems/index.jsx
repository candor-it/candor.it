import React, { useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Hash } from "react-feather";
import Title from "./Title";
import Image from "./Image";
import cn from "classnames";
import "./style.css";
import animate from "./Animate";
import { slugify } from "../../../utils/slugify";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "MOUSE/ENTER":
      return { ...state, active: true };
    case "MOUSE/LEAVE":
      return { ...state, active: false };
    case "CHANGE/OPACITY":
      return { ...state, opacity: action.payload };
    case "MOUSE/COORDINATES":
      return { ...state, parallaxPos: action.payload };
    case "CHANGE/ROTATION":
      return { ...state, rotationPosition: action.payload };
    case "CHANGE/SCALE":
      return { ...state, scale: action.payload };
    default:
      throw new Error();
  }
}

export default function ProjectItem({ project, itemIndex }) {
  const listItem = useRef(null);
  const animationId = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const easeMethod = "easeInOutCubic";
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const parallax = (event) => {
    const speed = -5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 50;
    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } });
  };

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    if (animationId.current) {
      cancelAnimationFrame(animationId.current);
    }
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/OPACITY", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
      animationId: animationId.current,
    });
  };

  const handleRotation = (initialRotation, duration) => {
    if (animationId.current) {
      cancelAnimationFrame(animationId.current);
    }
    const newRotation = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);
    animate({
      fromValue: initialRotation,
      toValue: newRotation,
      onUpdate: (newRotation, callback) => {
        dispatch({ type: "CHANGE/ROTATION", payload: newRotation });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
      animationId: animationId.current,
    });
  };

  const handleScale = (initialScale, newScale, duration) => {
    if (animationId.current) {
      cancelAnimationFrame(animationId.current);
    }
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newScale, callback) => {
        dispatch({ type: "CHANGE/SCALE", payload: newScale });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
      animationId: animationId.current,
    });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      handleOpacity(0, 1, 500);
      handleRotation(state.rotationPosition, 500);
      handleScale(0.8, 1, 500);
      listItem.current.addEventListener("mousemove", parallax);
      dispatch({ type: "MOUSE/ENTER" });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      handleOpacity(1, 0, 500);
      handleRotation(state.rotationPosition, 500);
      handleScale(1, initialState.scale, 500);
      dispatch({ type: "MOUSE/COORDINATES", payload: initialState.parallaxPos });
      dispatch({ type: "MOUSE/LEAVE" });
      listItem.current.removeEventListener("mousemove", parallax);
    }
  };

  const handleClick = () => {
    const slug = slugify(project.title);
    navigate(`/candor.it/Projects/${slug}`);
  };

  return (
    <li className="project__projects-item-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={listItem} onClick={handleClick}>
      <Title title={project.title} />
      <Image url={project.url} opacity={state.opacity} parallaxPos={state.parallaxPos} rotationPosition={state.rotationPosition} scale={state.scale} isMobile={isMobile} />
      <div className={cn("project__projects-info", { "as-active": state.active })}>
        <p className="project__projects-info-header">
          <span>
            <Hash />0{itemIndex}
          </span>
        </p>
        {project.info.map((element) => (
          <p key={element}>
            <span>{element}</span>
          </p>
        ))}
      </div>
    </li>
  );
}
