import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const targetDate = new Date('2025-02-22T00:00:00');
  const nav = useNavigate();

  const calculateTimeLeft = () => {
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        setIsTimeUp(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
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
        <h1>
          {isTimeUp ? "Timer completed" : "IELTS : 22/02/2025"}
        </h1>
        <div className="Timer">
          {formatTime()}
        </div>
        <br />
        <span className='sojqefd' onClick={() => { nav('/Dokument') }}>
          <em>Important Documents</em>
        </span>
      </div>
    </div>
  );
};

export default Home;
