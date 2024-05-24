import React, { useState } from 'react';

const RandomNumberGenerator: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const generateRandomNumber = () => {
    // Generate a random number between 0 and 100
    const newNumber = Math.floor(Math.random() * 101);
    setRandomNumber(newNumber);
  };

  return (
    <div>
      <h1>Number random: {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
}

export default RandomNumberGenerator;
