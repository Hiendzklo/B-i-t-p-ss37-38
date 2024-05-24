import React, { useReducer } from 'react';

// Định nghĩa kiểu dữ liệu cho action
interface InputAction {
  type: 'update';
  payload: string;
}

// Định nghĩa kiểu dữ liệu cho state
type InputState = string;

// Function reducer để xử lý cập nhật giá trị input
function inputReducer(state: InputState, action: InputAction): InputState {
  switch (action.type) {
    case 'update':
      return action.payload;  // Cập nhật state bằng giá trị mới từ payload
    default:
      return state;  // Giữ nguyên state nếu không có action phù hợp
  }
}

function InputText() {
  const [inputValue, dispatch] = useReducer(inputReducer, '');  // Giá trị khởi tạo là chuỗi rỗng

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => dispatch({ type: 'update', payload: e.target.value })}
      />
      <p>{inputValue}</p>  {/* Hiển thị giá trị nhập vào */}
    </div>
  );
}

export default InputText;
