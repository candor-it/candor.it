import React from "react";
import "./style.css";

export default function Title({ title }) {
  return (
    <div className="project__projects-title-container">
      <h1 className="project__projects-title">{title}</h1>
    </div>
  );
}
