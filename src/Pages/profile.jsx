import "../styles/Profile.css";
import { useState, lazy, Suspense } from "react";
import Preloader from "../Components/Preloader";
import ProfileMenu from "../Components/ProfileMenu";
const ProfileSettings = lazy(() => import("../Components/ProfileSettings"));
const ProfileArticles = lazy(() => import("../Components/ProfileArticles"));

const Profile = ({ setError }) => {
  const [selected, setSelected] = useState("Profile Settings");

  return (
    <div className="profile fade_in">
      <div className="col">
        <ProfileMenu selected={selected} setSelected={setSelected} />
      </div>
      <div className="col default_padding">
        {selected === "Profile Settings" ? (
          <Suspense fallback={<Preloader />}>
            <ProfileSettings setError={setError} />
          </Suspense>
        ) : selected === "My Articles" ? (
          <Suspense fallback={<Preloader />}>
            <ProfileArticles setError={setError} />
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
