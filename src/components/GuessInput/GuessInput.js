import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ onHandleSubmit, numOfGuesses }) {
  const [guess, setGuess] = useState("");

  function onFormSubmitHandler(e) {
    e.preventDefault();
    onHandleSubmit(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={numOfGuesses > NUM_OF_GUESSES_ALLOWED}
      />
    </form>
  );
}

export default GuessInput;
