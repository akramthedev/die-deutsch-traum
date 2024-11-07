import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const targetDate = new Date('2025-01-25T00:00:00');
  const nav = useNavigate();

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
    
    // Calculate months by dividing days by approximate days per month (30.44)
    const months = Math.floor(totalDays / 30.44);
    const days = totalDays - months * 30.44;
    
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { months, days: Math.floor(days), hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.months === 0 &&
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
    const { months, days, hours, minutes, seconds } = timeLeft;
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
      <div className="Home2">
        <h1>
          {isTimeUp ? "Timer completed" : "IELTS : 25/01/2025"}
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
