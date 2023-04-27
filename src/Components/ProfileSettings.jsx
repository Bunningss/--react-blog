import "../styles/ProfileSettings.css";
import { useSelector } from "react-redux";

const ProfileSettings = ({ setError }) => {
  const user = useSelector((state) => state.user?.currentUser?.userData);
  return (
    <div className="profile_settings fade_in">
      <div className="header_section">
        <h2 className="header">Hello, {user?.Name} </h2>
      </div>
      <div className="profile_update">
        <h6 className="profile_update_header">update your profile</h6>
      </div>
    </div>
  );
};

export default ProfileSettings;
