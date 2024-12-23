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
  const FirstDate = normalizeToMidnight(new Date("2024-12-24"));
  const endDate = normalizeToMidnight(new Date("2025-01-18"));

  const [daysPassed, setDaysPassed] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [notes, setNotes] = useState({}); // Stores notes for dates

  useEffect(() => {
    // Load notes from localStorage on mount
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || {};
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const calculateDaysRemaining = () => {
    const now = normalizeToMidnight(new Date());
    const differenceInTime = endDate - now;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return Math.max(differenceInDays, 0);
  };

  const calculateDaysPassed = () => {
    const now = normalizeToMidnight(new Date());
    const differenceInTime = now - FirstDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return Math.min(differenceInDays, 90);
  };

  useEffect(() => {
    setDaysPassed(calculateDaysPassed());
    setDaysRemaining(calculateDaysRemaining());

    const interval = setInterval(() => {
      setDaysPassed(calculateDaysPassed());
      setDaysRemaining(calculateDaysRemaining());
    }, 900000);

    return () => clearInterval(interval);
  }, [FirstDate, endDate]);

  const totalDays = 25;
  const squares = Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(FirstDate);
    currentDate.setDate(FirstDate.getDate() + index);
    const dateKey = currentDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    return {
      day: currentDate.getDate(),
      hasPassed: index < daysPassed,
      dateKey,
    };
  });

  const handleSquareClick = (dateKey) => {
    if (notes[dateKey]) {
      // If a note exists, show an alert with its content
      alert(`${notes[dateKey]}`);
    } else {
      // Otherwise, prompt for a new note
      const note = prompt(`Add a note :`);
      if (note) {
        setNotes({ ...notes, [dateKey]: note });
      }
    }
  };

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(`Error enabling full-screen mode: ${err.message}`);
      });
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error exiting full-screen mode: ${err.message}`);
      });
    }
  };

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
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1>The only way to get a German G</h1>
      <br />
     <div onClick={() => nav('/TimeManag')} className="zrsfsrefzse">
        Reading Track
      </div>
      <div onClick={() => nav('/TimeManag2')} className="zrsfsrefzse">
        Listening Track
      </div>
      <br />
      <div className="grid">
        {squares.map(({ day, hasPassed, dateKey }, index) => (
          <div
            key={index}
            className={`square ${hasPassed ? 'passed' : ''} ${notes[dateKey] ? 'with-note' : ''}`}
            onClick={() => handleSquareClick(dateKey)}
          >
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
