import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => setTodos([...todos, text]);
  const clearAll = () => setTodos([]);

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Todo List</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onClear={clearAll} />
    </div>
  );
}