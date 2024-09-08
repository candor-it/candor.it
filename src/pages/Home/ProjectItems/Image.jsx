import React from "react";
import "./style.css";

export default function Image({ url, opacity, parallaxPos, rotationPosition, scale, isMobile }) {
  return (
    <img
      src={url}
      className="project__projects-img"
      style={{
        opacity: isMobile ? 1 : opacity,
        transform: isMobile ? "none" : `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale})`,
      }}
    />
  );
}
