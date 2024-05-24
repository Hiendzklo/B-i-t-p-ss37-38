import React, { useState, useCallback } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;
