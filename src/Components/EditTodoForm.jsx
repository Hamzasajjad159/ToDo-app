import React from "react";
import { useState } from "react";

const EditToDoFrom = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditToDoFrom;
