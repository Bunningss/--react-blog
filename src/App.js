import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar"

import Index from "./Pages/index"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
