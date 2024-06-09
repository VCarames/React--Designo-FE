import { Link } from "react-router-dom";
import arrow from "/src/assets/icons/icon-right-arrow.svg";

function ProjectCard({ projectCardClass, heading, link }) {
  return (
    <li className={`project-card ${projectCardClass}`} role="listitem">
      <h3 className="project-card__heading">{heading}</h3>
      <Link className="project-card__link" to={link}>
        <p className="project-card__link--text">View Projects</p>
        <img className="project-card__link--img" src={arrow} alt="" />
      </Link>
    </li>
  );
}

export default ProjectCard;
