import "../styles/Navigator.css";
import { navLinks } from "../static";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import ListItem from "../Components/ListItem";
import PrimaryButton from "../Components/PrimayButton";

const Navigator = ({ setActive }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);

  // Hide navbar popup on click
  const handleClick = () => {
    setActive(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navigator">
      <ul className="list">
        {navLinks.map((item, indx) => (
          <ListItem item={item} key={indx} handleClick={handleClick} />
        ))}
      </ul>
      {user && <PrimaryButton text={"Logout"} handleClick={handleLogout} />}
    </div>
  );
};

export default Navigator;
