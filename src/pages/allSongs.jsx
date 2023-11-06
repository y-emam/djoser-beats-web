import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SongsList from "../components/songsList";

function AllSongs() {
  return (
    <div>
      <Navbar />
      <SongsList isAllSongs={true} />
      <Footer />
    </div>
  );
}

export default AllSongs;
