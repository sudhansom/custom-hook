import React, { useState } from "react";

import "./TaskForm.css";

const TaskForm = ({ handleTask }) => {
  const [task, setTask] = useState({ id: 0, title: "", author: "" });
  const submitForm = (e) => {
    e.preventDefault();
    handleTask(task);
    setTask({ id: 0, title: "", author: "" });
  };
  const handleChange = (e) => {
    setTask((prev) => {
      return {
        ...task,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form className="task-form">
      <label>
        Id:
        <input
          type="text"
          name="id"
          id=""
          value={task.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          id=""
          value={task.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          id=""
          value={task.author}
          onChange={handleChange}
        />
      </label>

      <button onClick={submitForm}>Submit</button>
    </form>
  );
};

export default TaskForm;
