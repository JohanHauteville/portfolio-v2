import PropTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";
import "./styles.scss";

function ProjectShowCase({ project = null, isOpened = false }) {
  return (
    <div
      className={
        isOpened
          ? "project-showcase__infos project-showcase__infos--opened"
          : "project-showcase__infos"
      }
      style={{
        backgroundColor: project ? project.setOfColors.main : "#fff",
        color: project ? project.setOfColors.typo : "#000",
      }}
    >
      <h3>{project.name.toUpperCase()}</h3>
      {/* <img src={project.sliderImages[0]} alt="" /> */}
      <div className="project-showcase__grid-info">
        <ul>
          <li>01 .</li>
          <li>02.</li>
          <li>03.</li>
          <li>04.</li>
          {project.client && <li>05.</li>}
        </ul>
        <ul>
          <li>RÉALISATION</li>
          <li>TYPE</li>
          <li>ROLE</li>
          <li>TECHNOLOGIES</li>
          {project.client && <li>CLIENT</li>}
        </ul>
        <ul className="project-showcase__grid-info--data">
          <li>{project.completedDate}</li>
          <li>{project.typeOfContrat}</li>
          <li>{project.role}</li>
          <li>{project.technologies}</li>
          <li>{project.client}</li>
        </ul>
        <p className="project-showcase__grid-info--description">
          {project.description}
        </p>
      </div>
      <div className="project-showcase__grid-info project-showcase__grid-info--bottom">
        {project.links.github && (
          <p>
            <a href={project.links.github}>
              GitHub <MdArrowOutward />
            </a>
          </p>
        )}
        {project.links.demo && (
          <p>
            <a href={project.links.demo}>
              Visit the demo <MdArrowOutward />
            </a>
          </p>
        )}
        {project.links.npm && (
          <p>
            <a href={project.links.npm}>
              npm repo <MdArrowOutward />
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

ProjectShowCase.propTypes = {
  project: PropTypes.object,
  isOpened: PropTypes.bool,
};

export default ProjectShowCase;
