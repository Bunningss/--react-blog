import "../styles/Navbar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="default navbar">
      <div className="wrapper">
        <div className="col">
          <ul className="list">
            <Link href="/articles">
              <li className="text_regular list_item">all articles</li>
            </Link>
            <Link href="/authors">
              <li className="text_regular list_item">authors</li>
            </Link>
            <Link href="/cookbook">
              <li className="text_regular list_item">cook book</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <Link href="/" className="nav_logo_wrapper">
            <img src={logo} alt="" className="logo_image" />
          </Link>
        </div>
        <div className="col">
          <ul className="list">
            <Link href="/account">
              <li className="text_regular list_item">my account</li>
            </Link>
            <Link href="/publish">
              <li className="text_regular list_item">publish</li>
            </Link>
            <Link href="/promotions">
              <li className="text_regular list_item">promotions</li>
            </Link>
          </ul>
        </div>
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
