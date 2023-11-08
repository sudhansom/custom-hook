import React from "react";

import TaskForm from "./TaskForm";

import "./NewTask.css";

const NewTask = ({ updateTask }) => {
  const handleSave = (task) => {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    updateTask(task);
  };
  return (
    <div className="container">
      <h1>Create A Task:</h1>
      <TaskForm handleTask={handleSave} />
    </div>
  );
};

export default NewTask;
