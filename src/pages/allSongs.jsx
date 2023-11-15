import { useEffect } from "react";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";
import SongsList from "../components/songsList";
import ReactGA from "react-ga";

function AllSongs() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <NavbarComponent />
      <SongsList isAllSongs={true} />
      <Footer />
    </div>
  );
}

export default AllSongs;
