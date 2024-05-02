import "./styles.scss";
import { works, certifications } from "../mock/experiences.json";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  const listVariant = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.3 } },
    hidden: { opacity: 0, x: 30 },
  };
  const experienceBoxVariants = {
    closed: {
      width: "80px",
      height: "80px",
      rotate: 45,
      transition: { delay: 0.3 },
    },
    opened: {
      width: "60vw",
      height: "100%",
      rotate: 0,
    },
  };

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
            <AnimatePresence mode="popLayout">
              {experiencesList.map((experience) => {
                return (
                  <motion.li
                    variants={listVariant}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                    key={`list-work-${experience.name}`}
                    onClick={() => setExperienceName(experience.name)}
                  >
                    {experience.name}
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        </div>
      </div>
      <div className="experiences__informations-container">
        <motion.div
          className="experiences__informations"
          variants={experienceBoxVariants}
          animate={experienceToShow ? "opened" : "closed"}
        >
          <AnimatePresence mode="popLayout" transition={{ delay: 0 }}>
            {experienceToShow && (
              <motion.div
                className="experiences__informations-lists"
                variants={listVariant}
                animate="visible"
                initial="hidden"
                exit="hidden"
              >
                <ul>
                  <li>NOM:</li>
                  <li>DATE:</li>
                  <li>ROLE:</li>
                  <li>CONTRAT:</li>
                  <li>LIEU:</li>
                  <li>MISSIONS:</li>
                </ul>

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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Experiences;
