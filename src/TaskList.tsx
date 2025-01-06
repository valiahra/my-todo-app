import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks?.map(task => (
        <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;