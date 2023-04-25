import "../styles/Menu.css";
import { navLinks } from "../static";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import ListItem from "./ListItem";
import PrimaryButton from "./PrimayButton";

const Menu = ({ setActive }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);

  // Hide navbar popup on click
  const handleClick = () => {
    setActive(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <>
      <div className="menu_bg"></div>
      <div className="menu">
        <ul className="list">
          {navLinks.map((item, indx) => (
            <ListItem item={item} key={indx} handleClick={handleClick} />
          ))}
        </ul>
        {user && <PrimaryButton text={"Logout"} handleClick={handleLogout} />}
      </div>
    </>
  );
};

export default Menu;
