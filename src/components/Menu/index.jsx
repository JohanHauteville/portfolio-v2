import "./styles.scss";
import animation from "../../assets/animations/Menu_Button--white.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Mesh from "../Mesh";

function Menu() {
  const button = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [animationBackground, setAnimationBackground] = useState(false);
  const clipPathStart =
    "polygon(51% 0,5% 50%,50% 100%,50% 50.02%,49.98% 50%,50% 49.98%,50.02% 50%,50% 50.02%,50% 100%,95% 50%)";
  const clipPathEnd =
    "polygon(51% 0,5% 50%,50% 100%,50% 100%,5% 50%,50% 0%,95% 50%,50% 100%,50% 100%,95% 50%)";
  const handleClick = () => {
    if (isOpened) {
      button.current.setPlayerDirection(-1);
      button.current.play();
    } else {
      button.current.play();
      button.current.setPlayerDirection(1);
    }
    setIsOpened(!isOpened);
  };

  const handleLinkClick = (link) => {
    setAnimationBackground(true);
    window.location.href = link;
    handleClick();
    setTimeout(() => {
      setAnimationBackground(false);
    }, 550);
  };

  return (
    <div className="menu">
      {/* BUTTON */}
      <div className="menu__button" onClick={handleClick}>
        <Player
          ref={button}
          src={animation}
          keepLastFrame={true}
          speed={3}
        ></Player>
      </div>
      {/* CONTAINER */}
      <div
        className={
          isOpened
            ? "menu__background menu__background--visible"
            : "menu__background"
        }
      >
        {/* <Mesh
          //   url="https://prod.spline.design/hsftirpwsm8X8uyM/scene.splinecode"
          url="https://prod.spline.design/7gNT0AE9w4rMGmQs/scene.splinecode"
          fullwidth={false}
        /> */}
        <nav>
          <ul
            className={
              isOpened
                ? "menu__nav-list menu__nav-list--visible"
                : "menu__nav-list"
            }
          >
            <li onClick={() => handleLinkClick("#home")}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => handleLinkClick("#projects")}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => handleLinkClick("#skills")}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => handleLinkClick("#experiences")}>
              <a href="#experiences">Experiences</a>
            </li>
            <li onClick={() => handleLinkClick("#contact")}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* LOADING BACKGROUND */}
      <AnimatePresence>
        {animationBackground && (
          <motion.div
            initial={{ scale: 0, clipPath: clipPathStart }}
            animate={{ scale: 70 }}
            exit={{ scale: 70, clipPath: clipPathEnd }}
            className="menu__loading"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
