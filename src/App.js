import React, { useEffect, useState } from "react";

// https://abcd-d4c9f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json

import "./App.css";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import useHttp from "./use-http";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const applyData = (data) => {
    setTasks(data);
  };

  const { isLoading, err, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: "http://localhost:5000/posts" }, applyData);
  }, [sendRequest]);
  const updateTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="container">
      <NewTask updateTask={updateTask}></NewTask>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
};

export default App;
