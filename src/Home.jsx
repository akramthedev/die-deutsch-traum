import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const targetDate = new Date('2024-11-05T19:00:00'); // Target date (YYYY-MM-DD)

  const nav = useNavigate();

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now; // Difference in milliseconds

    // Convert the difference into days, hours, minutes, and seconds
    const totalSeconds = Math.abs(Math.floor(difference / 1000)); // Use absolute value for negative countdown
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return difference < 0
      ? { days: -days, hours: -hours, minutes: -minutes, seconds: -seconds } // Negative values if the date has passed
      : { days, hours, minutes, seconds }; // Regular countdown if still in the future
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
        <h1>Journey - Don't Stop Believin'</h1>
        <div className="Timer">
          {formatTime()}
        </div>
        
        {isTimeUp && (
          <div className="Home2"> {/* Display the message with the same styling */}
            <p>Timer completed</p>
          </div>
        )}
        
        <br />
        <span className='sojqefd' onClick={() => { nav('/Dokument') }}>
          <em>Wesentliches Dokument</em>
        </span>
      </div>
    </div>
  );
};

export default Home;
