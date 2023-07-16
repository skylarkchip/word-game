import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const [gameStatus, setGameStatus] = useState("");

  function onHandleSubmittedGuess(userGuess) {
    const newGuesses = [...guesses, userGuess];
    setGuesses(newGuesses);

    if (answer === userGuess) {
      setGameStatus("won");
    } else if (
      answer !== userGuess &&
      newGuesses.length === NUM_OF_GUESSES_ALLOWED
    ) {
      setGameStatus("lost");
    }
  }

  const verifyAllGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        onHandleSubmit={onHandleSubmittedGuess}
        numOfGuesses={guesses.length}
      />
      <Keyboard verifiedGuesses={verifyAllGuesses} />
      {gameStatus === "won" && <HappyBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
