import { Link } from "react-router-dom";
import arrow from "/assets/icons/icon-right-arrow.svg";

function ProjectCard({ projectCardClass, link, project }) {
  return (
    <li className={`project-card ${projectCardClass}`} role="listitem">
      <Link className="project-card__link" to={link}>
        <p className="project-card__project">{project}</p>
        <div className="project-card__container">
          <p className="project-card__text">View Projects</p>
          <img className="project-card__img" src={arrow} alt="" />
        </div>
      </Link>
    </li>
  );
}

export default ProjectCard;
