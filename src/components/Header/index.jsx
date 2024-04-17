import "./styles.scss";
import logo from "../../assets/img/Logo-white.png";
import Menu from "../Menu";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <Menu />
      {/* <nav>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Header;
