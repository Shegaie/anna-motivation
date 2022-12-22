import FamilyCard from "./components/FamilyCard";
import wallpaper from "./assets/night-city.jpg"
import React, {useEffect, useRef} from "react";
import lofiMp3Asset from "./assets/Music/Studio Ghibli Lofi Playlist Vol. 1.mp3"
import lofimp3Asset2 from "./assets/Music/Lofi Hip Hop Chillhop Music Mix GEMN Chill Lo fi Hip Hop Beats FREE 2021.mp3"

function App() {
  useEffect(() => {
      const audio = document.getElementById("lofi-audio-player");
      audio.volume = 0.1;
      }, [])

  return (
    <div className="w-screen h-screen" style={{backgroundImage: `url(${wallpaper})`}}>
      <audio
          id="lofi-audio-player"
          autoPlay
          loop
          preload={"auto"}
          src={lofimp3Asset2}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <FamilyCard/>
    </div>
  );
}

export default App;
