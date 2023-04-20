import "../styles/ListItem.css";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <Link to={item.href}>
      <li className="text_regular listItem">{item.name}</li>
    </Link>
  );
};

export default ListItem;
