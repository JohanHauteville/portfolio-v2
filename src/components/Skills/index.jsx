import "./styles.scss";
import { skills } from "../mock/skills.json";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__left">
        <div>
          <h3>{skills[0].name.toUpperCase()}</h3>
          <p>
            {skills[0].skills.map((skill) => {
              return `${skill.name}, `;
            })}
          </p>
        </div>
        <div>
          <h3>{skills[2].name.toUpperCase()}</h3>
          <p>
            {skills[2].skills.map((skill) => {
              return `${skill.name}, `;
            })}
          </p>
        </div>
      </div>
      <div className="skills__middle">
        <div className="skills__middle-line"></div>
        <div className="skills__middle-line"></div>
        <div className="skills__middle-diamond"></div>
        <div className="skills__middle-line"></div>
        <div className="skills__middle-line"></div>
      </div>
      <div className="skills__right">
        <div>
          <h3>{skills[1].name.toUpperCase()}</h3>
          <p>
            {skills[1].skills.map((skill) => {
              return `${skill.name}, `;
            })}
          </p>
        </div>
        <div>
          <h3>{skills[3].name.toUpperCase()}</h3>
          <p>
            {skills[3].skills.map((skill) => {
              return `${skill.name}, `;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
