import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Добавьте новую задачу"
        style={{marginRight:'1%', borderRadius:'5px'}}
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default TaskInput;