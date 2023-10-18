import "./allSongs.css";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSongs = () => {
  const [songsList, setsongsList] = useState([
    { name: "stressed out", songUrl: "../assets/stressed.mp3" },
    { name: "Xenogenesis", songUrl: "../assets/fatrat.mp3" },
    { name: "NF Motto", songUrl: "../assets/motto.mp3" },
  ]);
  const [songsComponents, setsongsComponents] = useState([]);

  useEffect(() => {
    const temp = [];
    songsList.forEach((song) => {
      temp.push(
        <div className="song-item" key={song.name}>
          <img src={require("../assets/logo.jpg")} alt="logo" />
          <div className="name">{song.name}</div>
          <div className="play-button">{song.songUrl}</div>
          <div className="release-date"></div>
          <div className="duration"></div>
          <Link to={"/songDetails"} className="show-more">
            ShowMore
          </Link>
        </div>
      );
    });
    setsongsComponents(temp);
    console.log(temp);
  }, []);

  return (
    <div className="songs-page">
      <Navbar />
      <div className="songs-content">{songsComponents}</div>
    </div>
  );
};

export default AllSongs;

// // state
// const [isPlaying, setIsPlaying] = useState(false);
// const [duration, setDuration] = useState(0);
// const [currentTime, setCurrentTime] = useState(0);

// // references
// const audioPlayer = useRef(); // reference our audio component
// const progressBar = useRef(); // reference our progress bar
// const animationRef = useRef(); // reference the animation

// useEffect(() => {
//   const seconds = Math.floor(audioPlayer.current.duration);
//   setDuration(seconds);
//   progressBar.current.max = seconds;
// }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

// const calculateTime = (secs) => {
//   const minutes = Math.floor(secs / 60);
//   const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//   const seconds = Math.floor(secs % 60);
//   const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//   return `${returnedMinutes}:${returnedSeconds}`;
// };

// const togglePlayPause = () => {
//   const prevValue = isPlaying;
//   setIsPlaying(!prevValue);
//   if (!prevValue) {
//     audioPlayer.current.play();
//     animationRef.current = requestAnimationFrame(whilePlaying);
//   } else {
//     audioPlayer.current.pause();
//     cancelAnimationFrame(animationRef.current);
//   }
// };

// const whilePlaying = () => {
//   progressBar.current.value = audioPlayer.current.currentTime;
//   changePlayerCurrentTime();
//   animationRef.current = requestAnimationFrame(whilePlaying);
// };

// const changeRange = () => {
//   audioPlayer.current.currentTime = progressBar.current.value;
//   changePlayerCurrentTime();
// };

// const changePlayerCurrentTime = () => {
//   progressBar.current.style.setProperty(
//     "--seek-before-width",
//     `${(progressBar.current.value / duration) * 100}%`
//   );
//   setCurrentTime(progressBar.current.value);
// };

// const backThirty = () => {
//   progressBar.current.value = Math.floor(progressBar.current.value - 5);
//   changeRange();
// };

// const forwardThirty = () => {
//   progressBar.current.value = Math.floor(progressBar.current.value + 5);
//   changeRange();
// };

// {/* <div className={"audioPlayer"}>
//   <audio
//     ref={audioPlayer}
//     src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
//     preload="metadata"
//   ></audio>
//   <button className="forwardBackward" onClick={backThirty}>
//     <BsArrowLeftShort /> 5
//   </button>
//   <button onClick={togglePlayPause} className="playPause">
//     {isPlaying ? <FaPause /> : <FaPlay className="play" />}
//   </button>
//   <button className="forwardBackward" onClick={forwardThirty}>
//     5 <BsArrowRightShort />
//   </button>

//   {/* current time */}
//   <div className="currentTime">{calculateTime(currentTime)}</div>

//   {/* progress bar */}
//   <div>
//     <input
//       type="range"
//       className="progressBar"
//       defaultValue="0"
//       ref={progressBar}
//       onChange={changeRange}
//     />
//   </div>

//   {/* duration */}
//   <div className="duration">
//     {duration && !isNaN(duration) && calculateTime(duration)}
//   </div>
// </div> */}
