import React from 'react';

function Banner({ status, numberOfGuesses, answer }) {
  const className = status === "won" ? "happy" : "sad";
  return <div className={`banner ${className}`}>
    <p>
      {status === "won" ? <><strong>Congratulations!</strong> Got it in {" "}
        <strong>{numberOfGuesses} guesses</strong>.
      </> : <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>}
    </p>
  </div>;
}

export default Banner;
