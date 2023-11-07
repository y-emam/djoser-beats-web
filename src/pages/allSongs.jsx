import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";
import SongsList from "../components/songsList";

function AllSongs() {
  return (
    <div>
      <NavbarComponent />
      <SongsList isAllSongs={true} />
      <Footer />
    </div>
  );
}

export default AllSongs;
