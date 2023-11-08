import React from "react";

import TaskForm from "./TaskForm";

import "./NewTask.css";

const NewTask = ({ updateTask }) => {
  const handleSave = (task) => {
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
