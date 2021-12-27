import FamilyCard from "./components/FamilyCard";
import wallpaper from "./assets/landscape.png"
import React, {useEffect, useRef} from "react";
import lofiMp3Asset from "./assets/Studio Ghibli Lofi Playlist Vol. 1.mp3"

function App() {
  useEffect(() => {
      const audio = document.getElementById("lofi-audio-player");
      audio.volume = 0.4;
      }, [])

  return (
    <div className="w-screen h-screen" style={{backgroundImage: `url(${wallpaper})`}}>
      <audio
          id="lofi-audio-player"
          autoPlay
          loop
          preload={"auto"}
          src={lofiMp3Asset}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <FamilyCard/>
    </div>
  );
}

export default App;
