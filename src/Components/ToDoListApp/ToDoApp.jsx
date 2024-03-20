import React, { useState } from "react";
import "./ToDoApp.css";
import ToDoFrom from "../ToDoFrom";
import { v4 as uuidv4 } from "uuid";
import ToDo from "../ToDo";
import EditToDoFrom from "../EditTodoForm";
uuidv4();

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1> Get Things Done!</h1>
      <ToDoFrom addTodo={addTodo} />
      {todos.map((value, index) =>
        value.isEditing ? (
          <EditToDoFrom editTodo={editTask} task={value} />
        ) : (
          <ToDo
            task={value}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoList;
