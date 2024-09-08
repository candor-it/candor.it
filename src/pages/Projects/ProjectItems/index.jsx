import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { slugify } from "../../../utils/slugify";

export default function ProjectItem({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = slugify(project.title);
    navigate(`/candor.it/Projects/${slug}`);
  };

  return (
    <article className="product__project_item-card" data-filter={project.filter} onClick={handleClick}>
      <img src={project.url} className="article-image" />
      <div className="article-overlay"></div>
      <div className="article-text">
        <h2>{project.title}</h2>
        <p>{project.info}</p>
      </div>
    </article>
  );
}
