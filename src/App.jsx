import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AllSongs from "./pages/allSongs";
import Contacts from "./pages/contacts";
import NoPage from "./pages/noPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<AllSongs />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
