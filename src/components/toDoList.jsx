import React, { useState } from "react";
import AddNewTodo from "./addNewTodo";
import Todo from "./toDo";
import data from "../data.json";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const addTodo = (userInput) => {
    const newTodo = [
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(newTodo);
  };
  return (
    <div>
      <AddNewTodo addTodo={addTodo} />
      {toDoList.map((todo, index) => (
        <Todo
          todo={todo}
          index={index}
          key={index}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default ToDoList;
