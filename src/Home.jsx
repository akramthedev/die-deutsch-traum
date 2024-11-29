 import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const Home = () => {
  const nav = useNavigate();

  // Normalize dates to local midnight
  const normalizeToMidnight = (date) => {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0); // Set to midnight
    return normalized;
  };

  // Set the start date and end date
  const FirstDate = normalizeToMidnight(new Date("2024-11-20"));
  const endDate = normalizeToMidnight(new Date("2025-02-22"));

  // State to track the number of days passed and remaining
  const [daysPassed, setDaysPassed] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(0);

  // Function to calculate days remaining
  const calculateDaysRemaining = () => {
    const now = normalizeToMidnight(new Date());
    const differenceInTime = endDate - now;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days
    return Math.max(differenceInDays, 0); // Ensure days remaining is not negative
  };

  // Function to calculate days passed
  const calculateDaysPassed = () => {
    const now = normalizeToMidnight(new Date());
    const differenceInTime = now - FirstDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days
    return Math.min(differenceInDays, 90); // Ensure we don't exceed total days
  };

  // Use useEffect to calculate days passed and remaining
  useEffect(() => {
    setDaysPassed(calculateDaysPassed());
    setDaysRemaining(calculateDaysRemaining());

    // Recalculate every 15 minutes
    const interval = setInterval(() => {
      setDaysPassed(calculateDaysPassed());
      setDaysRemaining(calculateDaysRemaining());
    }, 900000); // 15 minutes in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [FirstDate, endDate]);

  // Generate squares for the days
  const totalDays = 90; // Total days to track
  const squares = Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(FirstDate);
    currentDate.setDate(FirstDate.getDate() + index);
    return {
      day: currentDate.getDate(),
      hasPassed: index < daysPassed,
    };
  });

  // Fullscreen toggle handlers
  const toggleFullscreen = () => {
    const element = document.documentElement; // The whole page
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit full-screen mode: ${err.message}`);
      });
    }
  };

  // Listen for key presses
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        toggleFullscreen();
      } else if (event.key === "Escape") {
        exitFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div className="container">
      <h1>The only way to get ABIH</h1>
      <br />
      <div className="grid">
        {squares.map(({ day, hasPassed }, index) => (
          <div key={index} className={`square ${hasPassed ? 'passed' : ''}`}>
            {day}
          </div>
        ))}
      </div>
      <br />
      <div className="zrsfsrefzse">
        {daysRemaining} days remaining until your target date!
      </div>
      <br />
      <div onClick={() => nav('/Dokument')} className="zrsfsrefzse">
        Important Documents
      </div>
    </div>
  );
};

export default Home;
