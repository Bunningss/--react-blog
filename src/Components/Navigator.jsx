import "../styles/Navigator.css";
import { navLinks } from "../static";
import ListItem from "../Components/ListItem";

const Navigator = ({ setActive }) => {
  // Hide navbar popup on click
  const handleClick = () => {
    setActive(false);
  };

  return (
    <div className="navigator">
      <ul className="list">
        {navLinks.map((item, indx) => (
          <ListItem item={item} key={indx} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default Navigator;
