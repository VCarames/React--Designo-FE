import React from "react";
import ProjectCard from "../../components/cards/ProjectCard.jsx";

function ProjectsHome() {
  return (
    <section className="projects">
      <div className="projects__content">
        <h2 className="visually-hidden">Our Projects</h2>
        <ul className="projects__list" role="list">
          <ProjectCard
            projectCardClass="project-card--web"
            project="Web Design"
            link="/webdesign"
          />
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

export default ProjectsHome;
