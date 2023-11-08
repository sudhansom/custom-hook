import React from "react";

import "./TaskForm.css";

const TaskForm = () => {
  return (
    <form className="task-form">
      <label>
        Id:
        <input type="text" name="" id="" />
      </label>
      <label>
        Title:
        <input type="text" name="" id="" />
      </label>
      <label>
        Content:
        <input type="text" name="" id="" />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default TaskForm;
