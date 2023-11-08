import React from "react";

// https://abcd-d4c9f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json

import "./App.css";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";

const App = () => {
  return (
    <div className="container">
      <NewTask></NewTask>
      <Tasks></Tasks>
    </div>
  );
};

export default App;
