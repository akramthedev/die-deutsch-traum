import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const examDate = new Date('2025-02-22T00:00:00');
  const uniStartDate = new Date('2025-04-01T00:00:00');
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

  useEffect(() => {
    const timer = setInterval(() => {
      setExamTimeLeft(calculateTimeLeft(examDate));
      setUniTimeLeft(calculateTimeLeft(uniStartDate));
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
      <div className="Home2">
        <h1>Countdown to IELTS Exam (22/02/2025)</h1>
        <div className="Timer">
          {formatTime(examTimeLeft)}
        </div>
        <h1>Countdown to University Start (01/04/2025)</h1>
        <div className="Timer">
          {formatTime(uniTimeLeft)}
        </div>
        <span className='sojqefd' onClick={() => { nav('/Dokument') }}>
          <em>Docs</em>
        </span>
       
      </div>
    </div>
  );
};

export default Home;
