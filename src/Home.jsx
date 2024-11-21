 import React, { useState, useEffect } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const targetDate = new Date('2025-01-25T00:00:00'); // Target date (YYYY-MM-DD)
  const nav = useNavigate();
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now; // Difference in milliseconds
    // If the target date has passed, return 0 for all units
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    // Convert the difference into days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // Countdown logic: update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);
  // Format the time left into a readable format
  const formatTime = () => {
    const { days, hours, minutes, seconds } = timeLeft;
    return (
      <div className='timer-display'>
        <button>
          <span>
            {days}
          </span>
          <span>
            Days
          </span>
        </button>
        <button>
          <span>
            {hours.toString().padStart(2, '0')}
          </span>
          <span>
            Hours
          </span>
        </button>
        <button>
          <span>
            {minutes.toString().padStart(2, '0')}
          </span>
          <span>
            Minutes
          </span>
        </button>
        <button>
          <span>
            {seconds.toString().padStart(2, '0')}
          </span>
          <span>
            Seconds
          </span>
        </button>
      </div>
    );
  };
  return (
    <div className='Home'>
      <div className="Home2">
        <h1>TOEFL&nbsp;&nbsp;Band : 100</h1>
        <div className="Timer">
          {formatTime()}
        </div>
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
          alert('Time is up!') // You can replace this with any action (popup, sound, etc.)
        )}
        <br />
        <span className='sojqefd'  onClick={()=>{nav('/Dokument')}} >
          <em>
            Wesentliches Dokument
          </em>
        </span>
      </div>
    </div>
  );
};
export default Home;
