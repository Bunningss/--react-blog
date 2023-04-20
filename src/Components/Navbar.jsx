import "../styles/Navbar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="default navbar">
      <div className="wrapper">
        <div className="col">
          <ul className="list">
            <Link to="/articles">
              <li className="text_regular list_item">all articles</li>
            </Link>
            <Link to="/authors">
              <li className="text_regular list_item">authors</li>
            </Link>
            <Link to="/cookbook">
              <li className="text_regular list_item">cook book</li>
            </Link>
          </ul>
        </div>
        <div className="col">
          <Link to="/" className="nav_logo_wrapper">
            <img src={logo} alt="" className="logo_image" />
          </Link>
        </div>
        <div className="col">
          <ul className="list">
            <Link to="/account">
              <li className="text_regular list_item">my account</li>
            </Link>
            <Link to="/publish">
              <li className="text_regular list_item">publish</li>
            </Link>
            <Link to="/promotions">
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
