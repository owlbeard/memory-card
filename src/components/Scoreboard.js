import React from 'react';

export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreBoard">
      <div id="score">Score: {score}</div>
      <div id="highScore">High Score: {highScore}</div>
    </div>
  );
}
