import React, { useEffect, useState } from "react";

// https://abcd-d4c9f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json

import "./App.css";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    try {
      const res = fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
        });
    } catch (error) {
      setErr(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
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
