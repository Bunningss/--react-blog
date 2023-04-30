import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { navLinks } from "../static";
import logo from "../Images/logo.webp";
import SecondaryButton from "./SecondaryButton";
import ListItem from "../Components/ListItem";

export const list_item_styles = {
  color: "var(--content-bg)",
  fontSize: "14px",
  textTransform: "uppercase",
  padding: "5px",
};

export const secondary_button = {
  height: "100%",
  padding: "0 20px",
  backgroundColor: " var(--content-bg)",
  border: "none",
  outline: "none",
  color: "var(--primary)",
  textTransform: "uppercase",
  borderRadius: "3px",
  cursor: "pointer",
};

const Navbar = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.currentUser?.userData);

  // End session
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  // Navigate to auth page
  const handleNavigate = () => {
    navigate("/account");
  };

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="col">
          <Link to="/" className="logo_container">
            <img src={logo} alt="" className="nav_logo" />
          </Link>
          <ul className="nav_list">
            {navLinks.map((link, indx) => (
              <ListItem item={link} key={indx} styles={list_item_styles} />
            ))}
          </ul>
        </div>
        <div className="col">
          {user ? (
            <SecondaryButton
              btn_styles={secondary_button}
              handleClick={handleLogout}
              text={"logout"}
            />
          ) : (
            <SecondaryButton
              btn_styles={secondary_button}
              handleClick={handleNavigate}
              text={"Login"}
            />
          )}
          {/* #TODO: Find a spot for hamburger */}
          {/* <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
