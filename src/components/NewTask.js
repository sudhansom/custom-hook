import React, { useState } from "react";

import TaskForm from "./TaskForm";

import "./NewTask.css";
import useHttp from "../use-http";

const NewTask = ({ updateTask }) => {
  const { isLoading, err, sendRequest } = useHttp();
  const applyData = (givenTask, createdTask) => {
    console.log(givenTask);
    updateTask(createdTask);
  };
  const handleSave = (givenTask) => {
    let abc;
    sendRequest(
      {
        url: "http://localhost:5000/posts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: givenTask,
      },
      applyData.bind(null, givenTask) // we can send updateTask from , so no need to create applyData
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
