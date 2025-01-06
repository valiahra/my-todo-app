import React from 'react';

interface TaskFilterProps {
  setFilter: (filter: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ setFilter }) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', marginTop:'5%'}}>
      <button onClick={() => setFilter('all')}>Все задачи</button>
      <button onClick={() => setFilter('active')}>Активные задачи</button>
      <button onClick={() => setFilter('completed')}>Выполненные задачи</button>
    </div>
  );
};

export default TaskFilter;