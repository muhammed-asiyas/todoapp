import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch all todos
  const loadTodos = async () => {
    const res = await axios.get("https://todoappbackend-x56u.onrender.com/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!text) return;
    await axios.post("https://todoappbackend-x56u.onrender.com/todos", { text });
    setText("");
    loadTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`https://todoappbackend-x56u.onrender.com/todos/${id}`);
    loadTodos();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List App</h2>

      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
