import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`${result ? result[num].status : ""} cell`}
          >
            {result ? result[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
