import React from 'react';

function WordInput({updateGuessList}) {
  const [guess, setGuess] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuessList(guess);
    setGuess('');
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" 
    type="text" 
    value={guess} 
    onChange={e => setGuess(e.target.value.toUpperCase())} 
    required
    maxLength={5}
    minLength={5}
    pattern="[A-Z]{5}"
    />
  </form>;
}

export default WordInput;
