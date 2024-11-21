 import {useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './App.css';

const Home = () => {
  // Define the total number of days (60 days)
  const totalDays = 60;
  const nav = useNavigate();
  // Set the start date as today
  const FirstDate = new Date("2024-11-19");
  
  // Set the end date as 22nd January 2025
  const endDate = new Date("2025-01-22");

  // State to track the number of days passed from FirstDate
  const [daysPassed, setDaysPassed] = useState(0);

  // Function to calculate the difference in days
  const calculateDaysPassed = () => {
    const now = new Date();
    const differenceInTime = now - FirstDate; // Difference in milliseconds
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days
    return Math.min(differenceInDays, totalDays); // Ensure we don't exceed 60 days
  };

  // Use useEffect to calculate days passed and update every day
  useEffect(() => {
    // Initialize the number of days passed immediately
    setDaysPassed(calculateDaysPassed());

    const interval = setInterval(() => {
      // Recalculate days passed each day
      setDaysPassed(calculateDaysPassed());
    }, 86400000); // Check every 24 hours (1 day in ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [FirstDate]); // The dependency array contains "FirstDate", so it recalculates when necessary

  // Generate 60 squares (true if the day has passed, false otherwise)
  const squares = Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(FirstDate);
    currentDate.setDate(FirstDate.getDate() + index); // Get the date for each square
    return {
      day: currentDate.getDate(), // Get the day of the month
      hasPassed: index < daysPassed, // Whether this day has passed
    };
  });

  return (
    <div className="container">
      <h1>IELTS Band 7.0</h1>   
      <br />
      <br />
       <div className="grid">
        {squares.map(({ day, hasPassed }, index) => (
          <div
            key={index}
            className={`square ${hasPassed ? 'passed' : ''}`}
          >
            {day} {/* Display the day of the month inside each square */}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div  className='zrsfsrefzse' >Days Passed: {daysPassed}</div>
      <br />
      <div className='zrsfsrefzse'>End Date: {endDate.toDateString()}</div>
      <br />
      <div onClick={()=>{nav('/Dokument')}} className='zrsfsrefzse'>Important Documents</div>
    </div>
  );
};

export default Home;
