import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const targetDate = new Date('2024-12-06T00:00:00'); 

  const nav = useNavigate();

  const calculateTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now; // Difference in milliseconds

  // If the difference is less than or equal to zero, set all units to 0
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Convert the difference into days, hours, minutes, and seconds
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false); // New state to track if the timer has completed

  // Countdown logic: update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      // Check if the countdown has completed
      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        setIsTimeUp(true); // Set the flag when the timer completes
        clearInterval(timer); // Stop the timer when time is up
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  // Format the time left into a readable format
  const formatTime = () => {
    const { days, hours, minutes, seconds } = timeLeft;
    return (
      <div className='timer-display'>
        <button>
          <span>{days}</span>
          <span>Tage</span>
        </button>
        <button>
          <span>{hours.toString().padStart(2, '0')}</span>
          <span>Stunden</span>
        </button>
        <button>
          <span>{minutes.toString().padStart(2, '0')}</span>
          <span>Minuten</span>
        </button>
        <button>
          <span>{seconds.toString().padStart(2, '0')}</span>
          <span>Sekunden</span>
        </button>
      </div>
    );
  };

  return (
    <div className='Home'>
      <div className="Home2">
        <h1>
          {isTimeUp ? "Timer completed" : "Deutsch-Prüfungsergebnisse : service@telc.net"}    
        </h1>
        <div className="Timer">
          {formatTime()}
        </div>
        
        
        
        <br />
        <span className='sojqefd' onClick={() => { nav('/Dokument') }}>
          <em>Wesentliches Dokument</em>
        </span>
      </div>
    </div>
  );
};

export default Home;
