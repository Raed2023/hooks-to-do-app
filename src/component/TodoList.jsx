import React, { useState } from 'react';



function TodoList(props) {
  const [todos, setTodos] = useState(props.todos);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (e) => {
    const newTodos = [...todos];
    newTodos.splice(e, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, e) => (
          <li key={e}>
            {todo}
            <button onClick={() => handleDeleteTodo(e)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a new todo" onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleAddTodo(event.target.value);
          event.target.value = '';
        }
      }} />
    </div>
  );
}

export default TodoList;
