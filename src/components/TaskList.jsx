import React, { useState, useEffect } from 'react';
import '../stylesheets/TaskList.css';
import { libros } from './libros';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedCompleted = JSON.parse(localStorage.getItem('completed')) || [];

    setTasks(storedTasks);
    setCompleted(storedCompleted);
  }, []); 

  const handleSelectChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleAddComplete = (index) => {
    const tarea = tasks[index];
    setCompleted([...completed, tarea]);
    localStorage.setItem('completed', JSON.stringify([...completed, tarea]));
    handleDeleteTask(index);
  };

  const taskExistList = (e, index) => {
    let taskExist = tasks.some((task) => task === e.name);
    let completedExist = completed.some((comp) => comp === e.name);
    if (taskExist || completedExist) {
      
    } else {
      return (
        <option key={index} value={e.name}>
          {e.name}
        </option>
      );
    }
  };

  const taskExist = (e, index) => {
    let taskExist = tasks.some((task) => task === e.name);
    let completedExist = completed.some((comp) => comp === e.name);
    if (taskExist || completedExist) {
      
    } else {
      if (opcionSeleccionada.trim() !== '') {
        setTasks([...tasks, opcionSeleccionada]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, opcionSeleccionada]));
        setOpcionSeleccionada('');
      }
    }
  };

  return (
    <>
      <div className='tasklist'>
        <h1>Por leer</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>
                <i className='bi bi-trash'></i>
              </button>
              <button onClick={() => handleAddComplete(index)}>
                <i className='bi bi-check-all'></i>
              </button>
            </li>
          ))}
        </ul>
        <div className='agregar-tarea'>
          <form>
            <select value={opcionSeleccionada} onChange={handleSelectChange}>
              {libros.map((e, index) => (
                taskExistList(e, index)
              ))} 
            </select>
          </form>
          <button onClick={taskExist}>
            Agregar<i className='bi bi-caret-up'></i>
          </button>
        </div>
      </div>
      <div className='completados'>
        <h1>Leídos</h1>
        <ul>
          {completed.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};