import React, { useState, useCallback } from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(['Đọc sách', 'Code', 'Làm bài tập toán']);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');  // Clear the input after adding
    }
  }, [newTodo, todos]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Thêm công việc mới"
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
