import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={`${!task.completed ? "Todo" : "Todo-completed"}`}>
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`${task.completed ? "completed" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          onClick={() => {
            editTodo(task.id);
          }}
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          className="delete-icon"
          onClick={() => {
            deleteTodo(task.id);
          }}
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default ToDo;
