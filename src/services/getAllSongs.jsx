const getAllSongs = async () => {
  try {
    return (
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/allSongs`)
    ).json();
  } catch (err) {
    console.log(`Failed to fetch allSongs: ${err.message}`);
  }
};

export default getAllSongs;
