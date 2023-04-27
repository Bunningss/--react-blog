import "../styles/Profile.css";
import { useState } from "react";
import ProfileMenu from "../Components/ProfileMenu";
import ProfileArticles from "../Components/ProfileArticles";
import ProfileSettings from "../Components/ProfileSettings";

const Profile = ({ setError }) => {
  const [selected, setSelected] = useState("Profile Settings");

  return (
    <div className="profile fade_in">
      <div className="col">
        <ProfileMenu setSelected={setSelected} />
      </div>
      <div className="col default_padding">
        {selected === "Profile Settings" ? (
          <ProfileSettings setError={setError} />
        ) : selected === "My Articles" ? (
          <ProfileArticles setError={setError} />
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
