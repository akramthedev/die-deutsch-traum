import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const Home = () => {
  const nav = useNavigate();

  // Set the start date and end date
  const FirstDate = new Date("2024-11-20"); // The start date
  const endDate = new Date("2025-02-14");   // The target end date

  // State to track the number of days passed
  const [daysPassed, setDaysPassed] = useState(0);

  // State to track the number of days remaining
  const [daysRemaining, setDaysRemaining] = useState(0);

  // Function to calculate the difference in days
  const calculateDaysRemaining = () => {
    const now = new Date();
    const differenceInTime = endDate - now; // Difference in milliseconds
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days
    return Math.max(differenceInDays, 0); // Ensure days remaining is not negative
  };

  const calculateDaysPassed = () => {
    const now = new Date();
    const differenceInTime = now - FirstDate; // Difference in milliseconds
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days
    return Math.min(differenceInDays, 86); // Ensure we don't exceed 86 days
  };

  // Use useEffect to calculate both days passed and days remaining
  useEffect(() => {
    // Initialize the number of days passed and days remaining immediately
    setDaysPassed(calculateDaysPassed());
    setDaysRemaining(calculateDaysRemaining());

    // Check every 15 minutes (900,000 ms)
    const interval = setInterval(() => {
      // Recalculate days passed and remaining every 15 minutes
      setDaysPassed(calculateDaysPassed());
      setDaysRemaining(calculateDaysRemaining());
    }, 900000); // 15 minutes in milliseconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [FirstDate, endDate]); // Recalculate if FirstDate or endDate changes

  // Generate squares for the passed days
  const totalDays = 86; // Number of days to track
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
      <h1>Getting the TOEFL with 100 to study in Germany </h1>   
      <h1>is the only key to marrying Hiba!</h1>   
      <br />
      <div className="grid">
        {squares.map(({ day, hasPassed }, index) => (
          <div key={index} className={`square ${hasPassed ? 'passed' : ''}`}>
            {day} {/* Display the day of the month inside each square */}
          </div>
        ))}
      </div>
      <br />
      <div className="zrsfsrefzse">
        {daysRemaining} days remaining until your target date!
      </div>
      <br />
     <div className="zrsfsrefzse">The only way to get C1 within 3 months: Everyday 12 hours +</div>
      <br />
      <div onClick={() => { nav('/Dokument') }} className="zrsfsrefzse">Important Documents</div>
    </div>
  );
};

export default Home;
