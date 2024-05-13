import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./styles.scss";
import ProjectShowCase from "./ProjectShowCase";
import { projects } from "../../mock/projects.json";

function ProjectsSlider() {
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [arrayOfIndex, setArrayOfIndex] = useState([0, 1, 2, 3, 4]);

  function changeSlide(typeOfChange, numberOfIteration) {
    let arrayToChange = [...arrayOfIndex];

    for (let i = 0; i < numberOfIteration; i++) {
      setTimeout(() => {
        const newKindOfArray = arrayToChange.map((element) =>
          typeOfChange === "INCREASE"
            ? (element = element + 1 === projects.length ? 0 : element + 1)
            : (element = element - 1 < 0 ? projects.length - 1 : element - 1)
        );

        arrayToChange = [...newKindOfArray];
        setArrayOfIndex(newKindOfArray);
        setSelectedIndex(newKindOfArray[2]);
      }, i * 300);
    }
  }

  function handlePosition(clickedIndex) {
    const diff = clickedIndex - 2; // calcul de l'index à partir de l'index cliqué pour obtenir un nb entre -2 et 2.
    changeSlide(
      diff < 0 ? "DECREASE" : "INCREASE",
      Math.abs(diff) // Supprime le signe (-) de clickedIndex pour avoir le nombre d'itération
    );
    clickedIndex < 0 ? clickedIndex++ : clickedIndex--;
  }

  return (
    <div className="project-slider">
      {/* SLIDER */}
      <div className="project-slider__cards">
        {arrayOfIndex.map((indexID, index) => {
          const slide = projects.find((slide) => slide.id === indexID);
          return (
            slide && (
              <ProjectCard
                imgUrl={slide.imgUrl}
                imagesSlider={slide.sliderImages}
                mainCard={indexID === selectedIndex}
                isInfoOpened={
                  indexID === selectedIndex ? isInfoOpened : undefined
                }
                setIsInfoOpened={
                  indexID === selectedIndex ? setIsInfoOpened : undefined
                }
                key={slide.id}
                onClick={() => handlePosition(index)}
              />
            )
          );
        })}
      </div>
      {/* NAVIGATION BUTTONS */}
      <div
        className="project-slider__nav-button project-slider__nav-button--left"
        onClick={() => handlePosition(1)}
      >
        Previous
      </div>
      <div
        className="project-slider__nav-button project-slider__nav-button--right"
        onClick={() => handlePosition(3)}
      >
        Next
      </div>
      {/* INFORMATIONS */}
      {projects && (
        <ProjectShowCase
          project={projects[selectedIndex]}
          isOpened={isInfoOpened}
        />
      )}
    </div>
  );
}

export default ProjectsSlider;
