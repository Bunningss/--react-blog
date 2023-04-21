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

function App() {
  const user = useSelector((state) => state.user?.currentUser);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<ComingSoon />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/articles" element={<Articles />} />
        {!user ? <Route path="/account" element={<Account />} /> : null}
        <Route path="/publish" element={<Publish />} />
        <Route path="/article/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
