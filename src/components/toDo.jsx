import React from "react";

const Todo = ({ todo, handleToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={todo.id}
        name="status"
        checked={todo.complete}
        onChange={() => handleToggle(todo.id)}
      />
      <span className={todo.complete ? "strike" : ""}>{todo.task}</span>
    </div>
  );
};

export default Todo;
