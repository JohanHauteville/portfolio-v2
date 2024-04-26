import "./styles.scss";
import { works, certifications } from "../mock/experiences.json";
import { useMemo, useState } from "react";

function Experiences() {
  const [typeOfList, setTypeOfList] = useState("works");
  const [experienceName, setExperienceName] = useState(null);

  const experiencesList = useMemo(() => {
    if (typeOfList === "works") {
      return [...works];
    } else {
      return [...certifications];
    }
  }, [typeOfList]);
  const experienceToShow = useMemo(() => {
    if (typeOfList === "works") {
      return works.find((experience) => experience.name === experienceName);
    } else {
      return certifications.find(
        (experience) => experience.name === experienceName
      );
    }
  }, [experienceName, typeOfList]);

  return (
    <div className="experiences">
      <div className="experiences__list">
        <div className="experiences-list__links">
          <div
            className="experiences-list__link"
            onClick={() => setTypeOfList("works")}
          >
            Works
          </div>
          <div
            className="experiences-list__link"
            onClick={() => setTypeOfList("certifications")}
          >
            Certifications
          </div>
        </div>
        <div className="experiences-list__elevator">
          <div
            className="experiences-list__diamond"
            style={{
              top: experienceToShow ? experienceToShow?.id * 50 + 30 : 30,
            }}
          ></div>
        </div>
        <div className="experiences-list__works">
          <ul>
            {experiencesList.map((experience) => {
              return (
                <li
                  key={`list-work-${experience.name}`}
                  onClick={() => setExperienceName(experience.name)}
                >
                  {experience.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="experiences__informations">
        <div className="experiences__informations-lists">
          <ul>
            <li>NOM:</li>
            <li>DATE:</li>
            <li>ROLE:</li>
            <li>CONTRAT:</li>
            <li>LIEU:</li>
            <li>MISSIONS:</li>
          </ul>
          {experienceToShow && (
            <ul>
              <li>{experienceToShow.name}</li>
              <li>{experienceToShow.date}</li>
              <li>{experienceToShow.role}</li>
              <li>{experienceToShow.typeOfContract}</li>
              <li>{experienceToShow.location}</li>
              <li>
                <ul className="missions">
                  {experienceToShow.objectives.map((objective) => (
                    <li key={`experience-objectives-${objective}`}>
                      {objective}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
