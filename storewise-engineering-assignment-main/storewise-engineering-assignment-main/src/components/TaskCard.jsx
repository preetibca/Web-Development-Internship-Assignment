const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>{task.name}</h3>
      <p>Status: {task.status}</p>

      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;