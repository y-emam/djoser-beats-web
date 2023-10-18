import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AllSongs from "./pages/allSongs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<AllSongs />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
