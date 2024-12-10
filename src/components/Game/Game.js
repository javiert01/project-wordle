import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput';
import GuessList from '../GuessList';
import Banner from '../Banner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([])
  const [gameStatus, setGameStatus] = useState("playing");
  const updateGame = (guess) => {
    setGuessList([...guessList, guess]);
    if(guess === answer) setGameStatus( "won");
    if(guessList.length >= 5) setGameStatus("lost");
  }

  return <>
    <GuessList guessList={guessList} answer={answer}/>
    {gameStatus !== "playing" && <Banner status={gameStatus} numberOfGuesses={guessList.length} answer={answer}/>}
    <WordInput updateGuessList={updateGame} />
  </>;
}

export default Game;
