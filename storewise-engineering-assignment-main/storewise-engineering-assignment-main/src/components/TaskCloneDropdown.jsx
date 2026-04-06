import { useState } from "react";

const TaskCloneDropdown = ({ tasks, onClone }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select Task</option>
        {tasks.map(t => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      <button onClick={() => onClone(selected)}>Clone Task</button>
    </div>
  );
};

export default TaskCloneDropdown;