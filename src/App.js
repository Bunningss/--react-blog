import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import ComingSoon from "./Components/ComingSoon";

// Pages
import Index from "./Pages/index";
import Articles from "./Pages/articles";
import Account from "./Pages/account";
import Publish from "./Pages/publish";
import Post from "./Pages/post";
import Navigator from "./Components/Navigator";

function App() {
  // Toggle navbar popup
  const [active, setActive] = useState(false);

  // Stop scroll when popup active
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [active]);

  // Fetch logged in user
  const user = useSelector((state) => state.user?.currentUser?.userData);

  return (
    <BrowserRouter>
      <Navbar active={active} setActive={setActive} />
      {active && <Navigator setActive={setActive} />}
      <Routes>
        <Route exact path="*" element={<ComingSoon />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/articles" element={<Articles />} />
        {!user && <Route path="/account" element={<Account />} />}
        {user && <Route path="/publish" element={<Publish />} />}
        <Route path="/article/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
