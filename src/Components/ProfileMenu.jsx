import "../styles/ProfileMenu.css";
import ListItem from "../Components/ListItem";
import { profileLinks } from "../static";

const ProfileMenu = ({ setSelected }) => {
  return (
    <div className="profile_menu">
      <ul className="profile_menu_list">
        {profileLinks.map((item, indx) => (
          <ListItem
            item={item}
            key={indx}
            handleClick={() => setSelected(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
