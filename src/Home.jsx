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
    const { months, days, hours } = timeLeft;
    return (
      <div className='timer-display'>
        <button>
          <span>{months}</span>
          <span>Months</span>
        </button>
        <button>
          <span>{days}</span>
          <span>Days</span>
        </button>
        <button>
          <span>{hours.toString().padStart(2, '0')}</span>
          <span>Hours</span>
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
          <h1>IELTS</h1>
          <div className="Timer">
            {formatTime(examTimeLeft)}
          </div>
        </div>
        <div className="simo">
          <h1>Applications</h1>
          <div className="Timer">
            {formatTime(uniTimeLeft)}
          </div>
        </div>
        <div className="simo">
          <h1>Escape this Hell</h1>
          <div className="Timer">
            {formatTime(gotodeTimeLeft)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
