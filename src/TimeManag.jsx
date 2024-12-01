import React, { useState, useEffect } from 'react';
import "./App.css";


const TimeManag = () => {
  const [tasks, setTasks] = useState([]);
  const [xp, setXp] = useState(0);
  const [goal, setGoal] = useState(200000); // Default goal is 200,000 XP
  const [newTask, setNewTask] = useState('');
  const [level, setLevel] = useState(1); // Start at level 1
  const [xpForNextLevel, setXpForNextLevel] = useState(25); // XP required for level 2

  // Load tasks, XP, level, and goal from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedXp = parseInt(localStorage.getItem('xp')) || 0;
    const storedGoal = parseInt(localStorage.getItem('goal'));
    const storedLevel = parseInt(localStorage.getItem('level')) || 1;
    const storedXpForNextLevel = parseInt(localStorage.getItem('xpForNextLevel')) || 25;

    setTasks(storedTasks);
    setXp(storedXp);
    setGoal(storedGoal || 200000); // Default goal
    setLevel(storedLevel);
    setXpForNextLevel(storedXpForNextLevel);
  }, []);

  // Save tasks, XP, level, and next-level XP to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('xp', xp);
    localStorage.setItem('goal', goal);
    localStorage.setItem('level', level);
    localStorage.setItem('xpForNextLevel', xpForNextLevel);
  }, [tasks, xp, level, xpForNextLevel]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const lowerCaseTask = newTask.toLowerCase();

      const isSpeakingTask2Hours =
        lowerCaseTask.includes('s') && lowerCaseTask.includes('p') && lowerCaseTask.includes('k')  && lowerCaseTask.includes('2');  && lowerCaseTask.includes('h');

      const isSpeakingTask1Hour =
        lowerCaseTask.includes('s') && lowerCaseTask.includes('p') && lowerCaseTask.includes('k') && lowerCaseTask.includes('1');  && lowerCaseTask.includes('h');
 const isSpeakingTask3Hour =
        lowerCaseTask.includes('s') && lowerCaseTask.includes('p') && lowerCaseTask.includes('k') && lowerCaseTask.includes('3');  && lowerCaseTask.includes('h');

      const isWritingTask =
        lowerCaseTask.includes('w') && lowerCaseTask.includes('r') && lowerCaseTask.includes('t');


        const isTotalExam =
        lowerCaseTask.includes('i') && lowerCaseTask.includes('e') && lowerCaseTask.includes('l') && lowerCaseTask.includes('t') && lowerCaseTask.includes('s') && lowerCaseTask.includes('e') && lowerCaseTask.includes('x');
    

      const taskXp = isSpeakingTask1Hour
        ? 30
        :isSpeakingTask2Hours ? 60 : isSpeakingTask3Hour ? 90 
        : isWritingTask
        ? 20
        : isTotalExam 
        ? 50
        : 10;

      setTasks([...tasks, { text: newTask, completed: false, xp: taskXp }]);
      setNewTask('');
    }
  };

  
  



  const completeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    
    const taskToComplete = tasks[index];  
    if (taskToComplete && !taskToComplete.completed) {
      let newXp = xp + taskToComplete.xp;
      while (newXp >= xpForNextLevel) {
        newXp -= xpForNextLevel;  
        setLevel((prevLevel) => prevLevel + 1);  
        setXpForNextLevel((prevXpForNextLevel) => prevXpForNextLevel * 1.2); 
        alert('👏 Fantastic progress, next level unlocked!');
      }
      setXp(newXp);  
    }
    setTasks(updatedTasks);  
  };

  
  const deleteTask = (index)=>{
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);  
  }
  


 

  const progress = Math.min((xp / xpForNextLevel) * 100, 100);

  return (
    <div className='jackkksonn'>
      <div className='TimeManag'>
        <h1>Level&nbsp;&nbsp;:&nbsp;&nbsp;{level}</h1>

        {/* Task Input */}
        <div>
          <input
            type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Enter a task...'
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        {/* Tasks List */}
        <ul className='eusrhfduohsougfhosdhf'>
          {tasks.map((task, index) => (
            <li key={index}>
              <span style={{ color: 'white', textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text} (XP: {task.xp})
              </span>
              <div>
                {!task.completed && <button onClick={() => completeTask(index)}>✔️</button>}
                {
                    !task.completed && <button onClick={() => deleteTask(index)}>❌</button>
                }
              </div>
            </li>
          ))}
        </ul>

        {/* Goal and Progress */}
        <div>
          <div
            style={{
              overflow: 'hidden',
              background: '#eee',
              width: '100%',
              height: '20px',
              margin: '10px 0',
              marginTop: '1rem',
              borderRadius: '3rem',
            }}
          >
            <div
              style={{
                background: 'limegreen',
                width: `${progress}%`,
                height: '100%',
                transition: 'width 1.5s',
              }}
            ></div>
          </div>
          <p>
            {parseInt(xp)}/{parseInt(xpForNextLevel)} XP
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeManag;
