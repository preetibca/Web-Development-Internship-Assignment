import { useState } from "react";

const TaskModal = ({ task, onClose, onSave }) => {
  const [name, setName] = useState(task.name);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    onSave({ ...task, name, status });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>

        <input value={name} onChange={(e) => setName(e.target.value)} />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskModal;