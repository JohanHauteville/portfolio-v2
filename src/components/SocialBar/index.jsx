import "./styles.scss";
import { IconContext } from "react-icons";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function SocialBar() {
  const ref = useRef();
  const { scrollY } = useScroll({ target: ref });

  const barHeight = useTransform(scrollY, [300, 650], ["0%", "100%"]);

  const iconFirstOpacity = useTransform(scrollY, [500, 600], [0, 1]);
  const iconSecondOpacity = useTransform(scrollY, [530, 630], [0, 1]);

  const iconFirstX = useTransform(scrollY, [450, 600], [50, 0]);
  const iconSecondX = useTransform(scrollY, [480, 630], [50, 0]);

  return (
    <div className="social-bar" ref={ref}>
      <motion.div
        className="social-bar__bar"
        style={{ height: barHeight }}
      ></motion.div>
      <IconContext.Provider
        value={{ size: "2rem", className: "social-bar__icons" }}
      >
        <motion.a
          href="https://github.com/JohanHauteville"
          style={{ opacity: iconSecondOpacity, x: iconSecondX }}
        >
          <IoLogoGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/johan-hauteville/"
          style={{ opacity: iconFirstOpacity, x: iconFirstX }}
        >
          <FaLinkedin />
        </motion.a>
      </IconContext.Provider>
    </div>
  );
}

export default SocialBar;
