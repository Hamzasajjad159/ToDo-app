import React from "react";
import { useState } from "react";

const ToDoFrom = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError("Field cannot be empty");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("");
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the next task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default ToDoFrom;
