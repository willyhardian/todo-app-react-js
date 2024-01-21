import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          text: newTask, completed: false
        }
      ])
      setNewTask('')
    }
  }

  const toggleTaskStatus = (index) => {
    const updatedTask = [...tasks]
    updatedTask[index].completed = !updatedTask[index].completed
    setTasks(updatedTask)
  }

  const deleteTask = (index) => {
    const updatedTask = [...tasks]
    updatedTask.splice(index, 1);
    setTasks(updatedTask)
  }
  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {
          tasks.map((task, index) => {
            return (
              <li key={index}>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                <button onClick={() => toggleTaskStatus(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
