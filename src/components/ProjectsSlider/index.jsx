import { useMemo, useState } from "react";
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
  const previousIndex = useMemo(() => {
    return selectedIndex === 0 ? data.length - 1 : selectedIndex - 1;
  }, [selectedIndex]);
  const nextIndex = useMemo(() => {
    return selectedIndex === data.length - 1 ? 0 : selectedIndex + 1;
  }, [selectedIndex]);

  function changeSlide(position) {
    setSelectedIndex(position);
    console.log("position ==== " + position);
    console.log("length =" + data.length);

    const newArray = [];
    for (let i = 2; i > -3; i--) {
      const r = position - i;
      console.log("r = " + r);
      if (r > data.length - 1) {
        newArray.push(r - data.length);
      } else if (r < 0) {
        newArray.push(r + data.length);
      } else {
        newArray.push(r);
      }
    }
    console.log(newArray);
    setArrayOfIndex(newArray);
  }

  const startIndex = selectedIndex - 2;
  const endIndex = selectedIndex + 2;

  return (
    <div className="project-slider">
      <div className="project-slider__cards">
        {arrayOfIndex.map((indexID) => {
          console.log("indexId =" + indexID);
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
                // onClick={() => {
                //   console.log(
                //     "slide.id = " +
                //       slide.id +
                //       ";  selectedIndex = " +
                //       selectedIndex
                //   );
                //   if (slide.id > selectedIndex) {
                //     return changeSlide(nextIndex);
                //   } else if (slide.id < selectedIndex) {
                //     return changeSlide(previousIndex);
                //   }
                // }}

                onClick={() => changeSlide(indexID)}
              />
            )
          );
        })}

        {/* {data.slice(startIndex, endIndex + 1).map((slide, index) => {
          const actualIndex = startIndex + index;
          return (
            <ProjectCard
              data={slide}
              imgUrl={slide.imgUrl}
              mainCard={actualIndex === selectedIndex}
              isInfoOpened={
                actualIndex === selectedIndex ? isInfoOpened : undefined
              }
              setIsInfoOpened={
                actualIndex === selectedIndex ? setIsInfoOpened : undefined
              }
              key={slide.id}
              onClick={() => changeSlide(actualIndex)}
            />
          );
        })} */}
      </div>
      <div onClick={() => changeSlide(previousIndex)}>previous !</div>
      <div onClick={() => changeSlide(nextIndex)}>next !</div>

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
