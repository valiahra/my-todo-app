import React from 'react';

interface TaskProps {
  task: { id: number; text: string; completed: boolean };
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <li style={{border:'1px solid #e1e1e0', display:'flex', justifyContent:'space-between', marginBottom:'1.5%', borderRadius:'5px', boxShadow:'5px 4px 4px #e1e1e0', background:'white' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default Task;