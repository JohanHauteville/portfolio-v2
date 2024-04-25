import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./styles.scss";
import ProjectShowCase from "./ProjectShowCase";

const data = [
  {
    id: 0,
    name: "Portfolio",
    imgUrl: "src/assets/img/website/spadom_project.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 1,
    name: "WealthHealth",
    imgUrl: "src/assets/img/website/WealthHealth.png",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 2,
    name: "Portfolio",
    imgUrl: "src/assets/img/website/spadom_project.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 3,
    name: "Portfolio",
    imgUrl: "src/assets/img/website/spadom_project.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 4,
    name: "Social Network",
    imgUrl: "src/assets/img/website/under_construction_02.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 5,
    name: "Portfolio",
    imgUrl: "src/assets/img/website/spadom_project.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 6,
    name: "WealthHealth",
    imgUrl: "src/assets/img/website/WealthHealth.png",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 7,
    name: "Portfolio",
    imgUrl: "src/assets/img/website/spadom_project.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 8,
    name: "Portfolio",
    imgUrl: "src/assets/img/website/spadom_project.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
  {
    id: 9,
    name: "Social Network",
    imgUrl: "src/assets/img/website/under_construction_02.jpeg",
    sliderImages: [
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
      "src/assets/img/website/spadom_project.jpeg",
    ],
    setOfColors: {
      main: "#678d7c",
      typo: "#fff",
    },
    technologies: "React, Blender, HTML, Sass",
    description:
      "Un projet permettant de démontrer toute une palette de mes compétences",
    completedDate: "Avril 2024",
    typeOfContrat: "Personnal",
    role: "FrontEnd & Motion & 3D Artist",
    client: null,
  },
];

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
            ? (element = element + 1 === data.length ? 0 : element + 1)
            : (element = element - 1 < 0 ? data.length - 1 : element - 1)
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
      <div className="project-slider__cards">
        {arrayOfIndex.map((indexID, index) => {
          const slide = data.find((slide) => slide.id === indexID);
          return (
            slide && (
              <ProjectCard
                data={slide}
                imgUrl={slide.imgUrl}
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
      {data && (
        <ProjectShowCase
          project={data[selectedIndex]}
          isOpened={isInfoOpened}
        />
      )}
    </div>
  );
}

export default ProjectsSlider;
