import "./styles.scss";
import logo from "../../assets/img/Logo-white.png";
import Menu from "../Menu";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Header() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [400, 600], [80, 0]);
  const headerScale = useTransform(scrollY, [400, 600], [0.2, 1]);

  return (
    <div className="header" ref={ref}>
      <div className="header__logo">
        <motion.img
          src={logo}
          alt="Logo"
          className="header__logo"
          style={{ y: headerY, scale: headerScale }}
        />
      </div>
      <Menu />
    </div>
  );
}

export default Header;
