import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

// Pages
import Index from "./Pages/index";
import Articles from "./Pages/articles";
import Account from "./Pages/account";
import Publish from "./Pages/publish";
import Post from "./Pages/post";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<ComingSoon />} />
        <Route exact path="/" element={<Index />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/account" element={<Account />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/article/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
