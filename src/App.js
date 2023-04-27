import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import ComingSoon from "./Components/ComingSoon";
import AuthenticationError from "./Components/AuthenticationError";
import Menu from "./Components/Menu";
import Popup from "./Components/Popup.jsx";

// Pages
import Index from "./Pages/index";
import Articles from "./Pages/articles";
import Account from "./Pages/account";
import Publish from "./Pages/publish";
import Article from "./Pages/article";

function App() {
  const [error, setError] = useState("");
  // Fetch logged in user
  const user = useSelector((state) => state.user?.currentUser?.userData);

  // Reset error popup
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 10000);
    }
  }, [error]);

  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      {error && <Popup error={error} />}
      <Routes>
        <Route exact path="*" element={<ComingSoon />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/articles" element={<Articles />} />
        {!user && (
          <Route path="/account" element={<Account setError={setError} />} />
        )}
        <Route
          path="/publish"
          element={
            user ? <Publish setError={setError} /> : <AuthenticationError />
          }
        />
        <Route path="/article/:id" element={<Article setError={setError} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
