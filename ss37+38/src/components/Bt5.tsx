import React, { useReducer } from 'react';

// Định nghĩa kiểu cho action
interface Action {
  type: string;
}

// Định nghĩa hàm reducer với kiểu cho state và action
function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
}

function Increase() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increase
      </button>
    </div>
  );
}

export default Increase;
