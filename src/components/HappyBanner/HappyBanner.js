import React from "react";

function HappyBanner({ numOfGuesses, restartGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Great!</strong> You got the correct answer in{" "}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default HappyBanner;
