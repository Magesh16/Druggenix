import React, { useState } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlayiing, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlayiing}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong}/> 
    </div>
  );
}

export default App;
