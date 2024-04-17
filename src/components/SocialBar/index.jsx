import "./styles.scss";
import { IconContext } from "react-icons";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function SocialBar() {
  return (
    <div className="social-bar">
      <IconContext.Provider
        value={{ size: "2rem", className: "social-bar__icons" }}
      >
        <a href="https://github.com/JohanHauteville">
          <IoLogoGithub />
        </a>

        <a href="https://www.linkedin.com/in/johan-hauteville/">
          <FaLinkedin />
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default SocialBar;
