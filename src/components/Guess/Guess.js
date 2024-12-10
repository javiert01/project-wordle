import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const checkGuessResult = checkGuess(guess, answer);
  return <p className="guess">
    {range(5).map((_, index) => {
      const status = checkGuessResult ? checkGuessResult[index]?.status : "";
      return <span key={index} className={`cell ${status}`}>
        {guess.split("")[index] ?? ""}
      </span>
    })
    }
  </p>;
}

export default Guess;
