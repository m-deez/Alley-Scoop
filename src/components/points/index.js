import React, { useState, useEffect } from "react";
import "./style.css";

const Points = () => {
  const [points, setPoints] = useState(0);
  const [fouls, setFouls] = useState(0);

  useEffect(() => {}, [points]);
  useEffect(() => {}, [fouls]);

  return (
    <div>
      <div id="scoreBoard">
        <div id="container">
          <p id="title">POINTS</p>
          <p id="score">{points}</p>
          <button
            onClick={() => setPoints(points + Math.round(Math.random() + 2))}
          >
            SCORE!
          </button>
        </div>
        <div id="container">
          <p id="title">FOULS</p>
          <p id="score">{fouls}</p>
          <button onClick={() => setFouls(fouls + 1)}>FOUL!</button>
        </div>
      </div>
    </div>
  );
};

export default Points;
