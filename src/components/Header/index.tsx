import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <>
      <Link to={"/"}>{/* <img src={logo} /> */} 홈으로</Link>
      <input placeholder="검색창" />
    </>
  );
}

export default Header;
