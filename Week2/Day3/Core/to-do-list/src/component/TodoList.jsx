import React, { useState, useEffect } from 'react';


const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [
      { text: 'Get MERN black belt', completed: false },
      { text: 'Get Python black belt', completed: false },
    ]
  );
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodoText) {
      setTodos([...todos, { text: newTodoText, completed: false }]);
      setNewTodoText('');
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => handleRemoveTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button className="add-button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoList;
