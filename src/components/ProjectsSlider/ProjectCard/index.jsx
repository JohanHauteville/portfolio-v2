import { useState } from "react";
import "./styles.scss";
import PropTypes from "prop-types";

function ProjectCard({
  imgUrl,
  imagesSlider,
  mainCard = false,
  isInfoOpened,
  setIsInfoOpened,
  ...props
}) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    // <div>

    <div
      className={
        isOpened ? "project-card project-card--opened" : "project-card"
      }
      {...props}
    >
      <img
        src={isOpened ? imagesSlider[0] : imgUrl}
        // src={imgUrl}
        alt="project"
        className={
          isOpened
            ? "project-card__img project-card__img--opened"
            : "project-card__img"
        }
        onClick={() => {
          mainCard && setIsOpened(!isOpened);
          mainCard && setIsInfoOpened(!isInfoOpened);
          window.location.href = "#projects";
        }}
      />
      {mainCard && <div className="project-card__border"></div>}
    </div>
    // </div>
  );
}

ProjectCard.propTypes = {
  imgUrl: PropTypes.string,
  mainCard: PropTypes.bool,
  isInfoOpened: PropTypes.bool,
  setIsInfoOpened: PropTypes.func,
  imagesSlider: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
