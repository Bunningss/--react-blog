import "../styles/ListItem.css";
import { Link } from "react-router-dom";

const ListItem = ({ item, handleClick, styles }) => {
  return (
    <Link to={item.href} onClick={handleClick}>
      <li className="text_regular listItem" style={styles}>
        {item.name}
      </li>
    </Link>
  );
};

export default ListItem;
