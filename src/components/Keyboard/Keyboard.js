import React from "react";

const keysArray = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function checkLetterStatus(verifiedGuesses) {
  const letterObj = {};
  verifiedGuesses.forEach((guesses) => {
    guesses.forEach(({ letter, status }) => {
      letterObj[letter] = status;
    });
  });

  return letterObj;
}

function Keyboard({ verifiedGuesses }) {
  const verifyLetterStatus = checkLetterStatus(verifiedGuesses);

  return (
    <div className="keyboard">
      {keysArray.map((keys, num) => (
        <div key={num} className="keyboard-row">
          {keys.map((key, idx) => (
            <span
              className={`key ${
                verifyLetterStatus[key] ? verifyLetterStatus[key] : ""
              }`}
              key={idx}
            >
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
