import "./styles.scss";
import animation from "../../assets/animations/Menu_Button--white.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useState } from "react";
import Mesh from "../Mesh";

function Menu() {
  const button = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

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
        <Mesh
          //   url="https://prod.spline.design/hsftirpwsm8X8uyM/scene.splinecode"
          url="https://prod.spline.design/7gNT0AE9w4rMGmQs/scene.splinecode"
          fullwidth={false}
        />
        <nav>
          <ul
            className={
              isOpened
                ? "menu__nav-list menu__nav-list--visible"
                : "menu__nav-list"
            }
          >
            <li onClick={handleClick}>
              <a href="#home">Home</a>
            </li>
            <li onClick={handleClick}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={handleClick}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={handleClick}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleClick}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
