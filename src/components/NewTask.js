import React, { useState } from "react";

import TaskForm from "./TaskForm";

import "./NewTask.css";
import useHttp from "../use-http";

const NewTask = ({ updateTask }) => {
  const { isLoading, err, sendRequest } = useHttp();
  const handleSave = (task) => {
    sendRequest(
      {
        url: "http://localhost:5000/posts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: task,
      },
      updateTask
    );
  };
  return (
    <div className="container">
      <h1>Create A Task:</h1>
      <TaskForm handleTask={handleSave} />
    </div>
  );
};

export default NewTask;
