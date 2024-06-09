import React from "react";
import ProjectCard from "../../components/cards/ProjectCard.jsx";

function ProjectsGraphic() {
  return (
    <section className="projects">
      <div className="projects__content">
        <h2 className="visually-hidden">Our Projects</h2>
        <ul className="projects__list projects__list--graphic" role="list">
          <ProjectCard
            projectCardClass="project-card--web"
            heading="Web Design"
            link="/webdesign"
          />
          <ProjectCard
            projectCardClass="project-card--app"
            heading="App Design"
            link="/appdesign"
          />
        </ul>
      </div>
    </section>
  );
}

export default ProjectsGraphic;
