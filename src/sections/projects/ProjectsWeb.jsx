import React from "react";
import ProjectCard from "../../components/cards/ProjectCard.jsx";

function ProjectsWeb({ projectsClass }) {
  return (
    <section className={`projects ${projectsClass}`}>
      <div className="projects__content">
        <h2 className="visually-hidden">Our Projects</h2>
        <ul className="projects__list projects__list--web" role="list">
          <ProjectCard
            projectCardClass="project-card--app"
            project="App Design"
            link="/appdesign"
          />
          <ProjectCard
            projectCardClass="project-card--graphic"
            project="Graphic Design"
            link="/graphicdesign"
          />
        </ul>
      </div>
    </section>
  );
}

export default ProjectsWeb;
