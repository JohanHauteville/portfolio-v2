import "./styles.scss";
import logo from "../../assets/img/Logo-white.png";
import Menu from "../Menu";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <Menu />
    </div>
  );
}

export default Header;
