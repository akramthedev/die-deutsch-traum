import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const examDate = new Date('2025-02-22T00:00:00');
  const uniStartDate = new Date('2025-04-01T00:00:00');
  const goToDeu = new Date('2025-08-15T00:00:00');
  const nav = useNavigate();

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days: totalDays, hours, minutes, seconds };
  };

  const [examTimeLeft, setExamTimeLeft] = useState(calculateTimeLeft(examDate));
  const [uniTimeLeft, setUniTimeLeft] = useState(calculateTimeLeft(uniStartDate));
  const [gotodeTimeLeft, setgotodeTimeLeft] = useState(calculateTimeLeft(goToDeu));

  useEffect(() => {
    const timer = setInterval(() => {
      setExamTimeLeft(calculateTimeLeft(examDate));
      setUniTimeLeft(calculateTimeLeft(uniStartDate));
      setgotodeTimeLeft(calculateTimeLeft(goToDeu));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeLeft) => {
    const { days, hours, minutes, seconds } = timeLeft;
    return (
      <div className='timer-display'>
        <button>
          <span>{days}</span>
          <span>Days</span>
        </button>
        <button>
          <span>{hours.toString().padStart(2, '0')}</span>
          <span>Hours</span>
        </button>
        <button>
          <span>{minutes.toString().padStart(2, '0')}</span>
          <span>Minutes</span>
        </button>
        <button>
          <span>{seconds.toString().padStart(2, '0')}</span>
          <span>Seconds</span>
        </button>
      </div>
    );
  };

  return (
    <div className='Home'>
       <span className='sojqefd' onClick={() => { nav('/Dokument') }}>
          <em>Docs</em>
        </span>
      <div className="Home2">
        <div className="simo">
          <h1>IELTS Exam</h1>
          <div className="Timer">
            {formatTime(examTimeLeft)}
          </div>
        </div>
        <div className="simo">
           <h1>University Application</h1>
           <div className="Timer">
             {formatTime(uniTimeLeft)}
           </div>
        </div>
         <div className="simo">
           <h1>Deutsch Traum</h1>
           <div className="Timer">
             {formatTime(gotodeTimeLeft)}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
