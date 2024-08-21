import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>{<img src={logo} className="logo" />}</Link>
      <input placeholder="검색창" />
    </div>
  );
}

export default Header;
