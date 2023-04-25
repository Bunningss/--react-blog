import "../styles/Menu.css";
import { navLinks } from "../static";
import { list_item_styles } from "./Navbar";
import ListItem from "../Components/ListItem";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu_list">
        {navLinks.map((item, indx) => (
          <ListItem item={item} key={indx} styles={list_item_styles} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
