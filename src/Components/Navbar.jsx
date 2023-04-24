import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.webp";
import dropdown from "../Images/icons/dropdown.webp";

const Navbar = ({ active, setActive }) => {
  return (
    <nav className="default navbar">
      <div className="wrapper">
        <div className="col">
          <Link to="/">
            <img src={logo} alt="" className="nav_logo" />
          </Link>
        </div>
        <div className="col">
          <img
            src={dropdown}
            alt=""
            className="nav_icon"
            onClick={() => setActive(!active)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
