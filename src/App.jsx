import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AllSongs from "./pages/allSongs";
import SongDetails from "./pages/songDetails";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import NoPage from "./pages/noPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<AllSongs />} />
        <Route path="/songDetails" element={<SongDetails />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
