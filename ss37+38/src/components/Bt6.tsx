import React, { useReducer } from 'react';

// Định nghĩa kiểu cho các action
type ActionType = {
  type: 'decrement';
};

// Function reducer để xử lý giảm giá trị
function counterReducer(state: number, action: ActionType): number {
  switch (action.type) {
    case 'decrement':
      return state > 0 ? state - 1 : state; // Chỉ giảm nếu giá trị lớn hơn 0
    default:
      return state; // Giữ nguyên state nếu không có action phù hợp
  }
}

function Decrease() {
  const [count, dispatch] = useReducer(counterReducer, 10); // Giá trị khởi tạo là 10

  return (
    <div>
      <p>{count}</p> {/* Hiển thị số hiện tại */}
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrease
      </button> {/* Nút để giảm giá trị */}
    </div>
  );
}

export default Decrease;
