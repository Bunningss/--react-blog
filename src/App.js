import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import ComingSoon from "./Components/ComingSoon";
import AuthenticationError from "./Components/AuthenticationError";
import Menu from "./Components/Menu";

// Pages
import Index from "./Pages/index";
import Articles from "./Pages/articles";
import Account from "./Pages/account";
import Publish from "./Pages/publish";
import Article from "./Pages/article";

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
      {active && <Menu setActive={setActive} />}
      <Routes>
        <Route exact path="*" element={<ComingSoon />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/articles" element={<Articles />} />
        {!user && <Route path="/account" element={<Account />} />}
        <Route
          path="/publish"
          element={user ? <Publish /> : <AuthenticationError />}
        />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
