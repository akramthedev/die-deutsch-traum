import React, {useState, useEffect} from 'react';
import './App.css';  
import { useNavigate } from 'react-router-dom';




const Home = () => {


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState('');
  const examDate = new Date('2025-01-22T00:00:00');


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const nav = useNavigate();
  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));

    // Approximate months (30.44 days average per month)
    const months = Math.floor(totalDays / 30.44);
    const days = totalDays % 30;

    return { months, days, hours };
  };


  const [examTimeLeft, setExamTimeLeft] = useState(calculateTimeLeft(examDate));


  useEffect(() => {
    const timer = setInterval(() => {
      setExamTimeLeft(calculateTimeLeft(examDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const formatTime = (timeLeft) => {
    const { months, days, hours } = timeLeft;
    return (
      <div className='timer-display'>
          <span>{months} Months</span>&nbsp;&nbsp;
          <span>{days} Days</span>&nbsp;&nbsp;
          <span>{hours.toString().padStart(2, '0')} Hours</span>
      </div>
    );
  };





  const saveTasksToStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isDone: !task.isDone } : task
    );
    saveTasksToStorage(updatedTasks);
  };
 


  const handleSaveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, content: editContent } : task
    );
    saveTasksToStorage(updatedTasks);
    setEditIndex(null);
    setEditContent('');
  };




  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    saveTasksToStorage(updatedTasks);
  };


  const handleAddTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks, { content: newTask, isDone: false }];
      saveTasksToStorage(updatedTasks);
      setNewTask('');
    }
  };




  const timelineData = [
    {
      isDone : true, 
      date: '',
      content: '',
      logo: '',
    },
    
     
    {
      isDone : true, 
      date: '06-07-2024',
      content: 'TELC B1 Vorbereitung',
      logo: 'https://www.inlingua-augsburg.de/fileadmin/_processed_/d/a/csm_Logo-telc-border_0f42165ff9.png',
    },
    {
      isDone : true, 
      date: '06-11-2024',
      content: 'TELC B1 Prüfung',
      logo: 'https://www.inlingua-augsburg.de/fileadmin/_processed_/d/a/csm_Logo-telc-border_0f42165ff9.png',
    },
    {
      isDone : false, 
      date: '06-12-2024',
      content: 'TELC B1 Ergebnis',
      logo: 'https://www.inlingua-augsburg.de/fileadmin/_processed_/d/a/csm_Logo-telc-border_0f42165ff9.png',
    },
    {
      isDone : false, 
      date: '10-01-2025',
      content: 'Internship Wrap-Up',
      logo: 'https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg',
    },
    {
      isDone : false, 
      date: '22-01-2025',
      content: 'IELTS Exam',
      logo: 'https://ielts-academic.com/wp-content/uploads/2017/01/IELTS-Academic-Logo-300.png',
    },
    {
      isDone : false, 
      date: '01-02-2025',
      content: 'Univ Process (Öst,DE)',
      logo: 'https://www.batiactu.com/images/auto/620-465-c/20151216_190843_reichstagbuildingberlinviewfromwestbeforesunset.jpg',
    },
    {
      isDone : false, 
      date: '03-27-2025',
      content: 'TB Treatment Wrap-up',
      logo: 'https://www.sic-candeen.fr/medias/2021/02/medecin.jpg',
    },
    {
      isDone : false, 
      date: '09-15-2025',
      content: 'Nach Deutschland',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
    },
  ];

  return (
    <div className="XXX">
      <div className="caseOn98 caseOn982">
        <h2>
          Next Goal&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;IELTS&nbsp;&nbsp;&nbsp;&nbsp;7.5 Band
          {formatTime(examTimeLeft)}

        </h2>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.isDone ? 'task-done' : ''}>
              {editIndex === index ? (
                <div className="edit-task">
                  <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <div className="task-item">
                  <span onClick={() => toggleTaskDone(index)}>
                    {task.content}
                  </span>
                  <div className="task-actions">
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="caseOn98 caseOn981">
        <div className="timeline">
          {timelineData.map((event, index) => (
            
              <div key={index} className={`timeline-item ${event.isDone === true ? "MarkAsDoneItem" : ""}`}>
                {event.content !== "" && (  
                <>
                  <div className={`timeline-item-date ${event.isDone === true ? "MarkAsDone" : ""}`}>
                    {event.date}
                  </div>
                  <div className="timeline-item-content">
                    <img src={event.logo} alt="Event logo" className="timeline-item-logo" />
                    <p>{event.content}</p>
                  </div>
                </>
                )}
              </div>
            
          ))}

            <div className='sojqefd' onClick={() => { nav('/Dokument') }}>
              <span>Essential Documents</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
