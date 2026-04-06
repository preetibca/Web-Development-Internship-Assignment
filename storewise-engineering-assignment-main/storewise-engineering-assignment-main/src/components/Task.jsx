import React from "react";

function Task({ task, onClick, deleteTask, updateTask }) {
  const handleStatusChange = (e) => {
    updateTask({ ...task, status: e.target.value });
  };

  return (
    <div className="task-card" onClick={onClick}>
      <h3>{task.name}</h3>
      <select
        className="status-select"
        value={task.status}
        onChange={handleStatusChange}
        onClick={(e) => e.stopPropagation()}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Complete</option>
      </select>
      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;