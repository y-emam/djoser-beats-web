import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AllSongs from "./pages/allSongs";
import Contacts from "./pages/contacts";
import NoPage from "./pages/noPage";
import CartPage from "./pages/cart";
import SongDetails from "./pages/songDetails";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<AllSongs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/SongDetails" element={<SongDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
