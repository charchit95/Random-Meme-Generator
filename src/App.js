import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const len = data.memes.length;
  const [current, setCurrent] = useState(Math.floor(Math.random() * len))
  const [meme, setMeme] = useState(data.memes[current])
  const loadAnother = () => {
    const rand = Math.floor(Math.random() * len);
    setCurrent(rand)
    setMeme(data.memes[rand])
  }
  return (
    <div className="App">
      <div className="memeContainer">
        <img src={meme.url} alt={meme.name}/>
        <h1>{meme.name}</h1>
      </div>
      <div className="load-another" onClick={loadAnother}>
        Load Another
      </div>
    </div>
  );
}

export default App;
