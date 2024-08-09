import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  function handleAddTask() {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-5"> To-Do List</h2>
      
      <div className="flex mb-5 w-full max-w-md">
        <input 
          type="text" 
          className="border border-gray-300 p-2 flex-grow rounded-l" 
          placeholder="Enter a task" 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
        />
        <button 
          onClick={handleAddTask} 
          className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Add Task
        </button>
      </div>
      
      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <li key={index} className="border-b border-gray-300 p-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
