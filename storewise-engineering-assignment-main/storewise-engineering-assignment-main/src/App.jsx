import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import TaskCloneDropdown from "./components/TaskCloneDropdown";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Create Task
  const handleCreate = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      name: input,
      status: "Pending"
    };

    setTasks(prev => [...prev, newTask]);
    setInput("");
  };

  // Delete
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Open Modal
  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  // Save Edit
  const handleSave = (updatedTask) => {
    setTasks(prev =>
      prev.map(t => (t.id === updatedTask.id ? updatedTask : t))
    );
    setModalOpen(false);
  };

  // Clone
  const handleClone = (taskId) => {
    const t = tasks.find(t => t.id === Number(taskId));
    if (!t) return;

    const clone = {
      ...t,
      id: Date.now(),
      name: t.name + " (Copy)"
    };

    setTasks(prev => [...prev, clone]);
  };

  return (
    <div>
      <Header />

      <div className="container">
        <h2>Tasks ({tasks.length})</h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />

        <button onClick={handleCreate}>Create Task</button>

        <TaskCloneDropdown tasks={tasks} onClone={handleClone} />

        <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />

        {modalOpen && (
          <TaskModal
            task={selectedTask}
            onClose={() => setModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}

export default App;