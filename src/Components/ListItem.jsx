import "../styles/ListItem.css";
import { Link } from "react-router-dom";

const ListItem = ({ item, handleClick }) => {
  return (
    <Link to={item.href} onClick={handleClick}>
      <li className="text_regular listItem">{item.name}</li>
    </Link>
  );
};

export default ListItem;
