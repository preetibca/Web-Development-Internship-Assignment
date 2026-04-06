import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="grid">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;