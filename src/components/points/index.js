import React, { useState, useEffect } from "react";
import "./style.css";

const Points = () => {
  const [points, setPoints] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {}, [points]);
  useEffect(() => {}, [fouls]);
  useEffect(() => {}, [disable]);

  return (
    <div>
      <div id="scoreBoard">
        <div id="container">
          <p id="title">POINTS</p>
          <p id="score">{points}</p>
          <button
            disabled={disable}
            onClick={() => {
              setPoints(points + Math.round(Math.random() + 2));
              setDisable(true);
            }}
          >
            SCORE!
          </button>
        </div>
        <div id="container">
          <p id="title">FOULS</p>
          <p id="score">{fouls}</p>
          <button
            disabled={disable}
            onClick={() => {
              setFouls(fouls + 1);
              setDisable(true);
            }}
          >
            FOUL!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Points;
