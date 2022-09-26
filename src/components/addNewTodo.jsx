import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = () => {
    addTodo(userInput);
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        className="addNewTodo"
        placeholder="Add a new task"
      />
      <button className="addNewButton" type="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
export default AddNewTodo;
