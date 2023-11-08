import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <div className="container">
      {tasks.length &&
        tasks.map((task) => (
          <div className="each-task" key={task.id}>
            <p>{task.id}</p>
            <p>{task.title}</p>
            <p>{task.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
