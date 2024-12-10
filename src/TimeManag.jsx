import React, { useState, useEffect } from "react";
import "./App.css";

const tasksByDay = {
  "2024-12-10": ["Writing Task 1 : Pie Charts", "Writing Task 1 : Tables","Writing Task 1 : Diagrams", "Writing Task 1 : Maps", , "Speaking Task 3 : Finish 9 papers"],
  "2024-12-11": ["Writing Task 2 : 10", "Writing Task 2 : 11","Writing Task 2 : 12", "Writing Task 2 : 13", "Writing Task 2 : 14", "Writing Task 2 : 15", "Writing Task 2 : 16", "Writing Task 2 : 17", "Writing Task 2 : 18", "Writing Task 2 : 19"],
  "2024-12-12": ["Writing Task 2 : 20", "Writing Task 2 : 21","Writing Task 2 : 22", "Writing Task 2 : 23", "Writing Task 2 : 24", "Writing Task 2 : 25", "Writing Task 2 : 26", "Writing Task 2 : 27", "Writing Task 2 : 28", "Writing Task 2 : 29"],
  "2024-12-13": ["Writing Task 2 : 30", "Writing Task 2 : 31","Writing Task 2 : 32", "Writing Task 2 : 33", "Writing Task 2 : 34", "Writing Task 2 : 35", "Writing Task 2 : 36", "Writing Task 2 : 37", "Writing Task 2 : 38", "Writing Task 2 : 39"],
  "2024-12-14": ["Writing Task 2 : 40", "Writing Task 2 : 41","Writing Task 2 : 42", "Writing Task 2 : 43", "Writing Task 2 : 44", "Writing Task 2 : 45", "Writing Task 2 : 46", "Writing Task 2 : 47", "Writing Task 2 : 48", "Writing Task 2 : 49"],
  "2024-12-15": ["Writing Task 2 : 50", "Writing Task 2 : 51","Writing Task 2 : 52", "Writing Task 2 : 53", "Writing Task 2 : 54", "Writing Task 2 : 55", "Writing Task 2 : 56", "Writing Task 2 : 57", "Writing Task 2 : 58", "Writing Task 2 : 59"],
  "2024-12-16": ["Grab telc B1 Zertifikat", "Writing Task 2 : 60", "Writing Task 2 : 61","Writing Task 2 : 62", "Writing Task 2 : 63", "Writing Task 2 : 64", "Writing Task 2 : 65", "Writing Task 2 : 66", "Writing Task 2 : 67", "Writing Task 2 : 68", "Writing Task 2 : 69"],
  "2024-12-17": ["Writing Task 2 : 70", "Writing Task 2 : 71","Writing Task 2 : 72", "Writing Task 2 : 73", "Writing Task 2 : 74", "Writing Task 2 : 75", "Writing Task 2 : 76", "Writing Task 2 : 77", "Writing Task 2 : 78", "Writing Task 2 : 79"],
  "2024-12-18": ["Writing Task 2 : 80", "Writing Task 2 : 81","Writing Task 2 : 82", "Writing Task 2 : 83", "Writing Task 2 : 84", "Writing Task 2 : 85", "Writing Task 2 : 86", "Writing Task 2 : 87", "Writing Task 2 : 88", "Writing Task 2 : 89"],
  "2024-12-19": ["Technopark Conference 16:00 -> 18:00 - check Gmail","Talk With Scolarité Settat - LST diplomate", "Writing Task 2 : 90", "Writing Task 2 : 91","Writing Task 2 : 92", "Writing Task 2 : 93", "Writing Task 2 : 94", "Writing Task 2 : 95", "Writing Task 2 : 96"],
  "2024-12-20": ["Watch This Video Before Taking any exam : https://youtu.be/xGtKdsVxV8A?si=w9vc3WmNN8lilg9j","Start Memorization of all writen data", "Register for IELTS exam", "END of Internship", "Starting IELTS EXAM preparation from tomorrow :)"],
};

const TimeManag = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dayStatus, setDayStatus] = useState({});

  // Helper function to get today's date in local timezone
  const getLocalDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-CA"); // Format: 'YYYY-MM-DD'
  };

  // Function to load tasks for a given day
  const loadTasksForDay = (day) => {
    const savedTasks = JSON.parse(localStorage.getItem(day));
    if (savedTasks) {
      setTasks(savedTasks);
    } else if (tasksByDay[day]) {
      const initialTasks = tasksByDay[day]
        .filter((task) => typeof task === "string") // Filter out invalid entries
        .map((task) => ({
          name: task,
          completed: false,
        }));
      setTasks(initialTasks);
      localStorage.setItem(day, JSON.stringify(initialTasks));
    } else {
      setTasks([]);
    }
  };
  

  // Function to evaluate if tasks are completed for the current day
  const evaluateDay = () => {
    const allCompleted = tasks.every((task) => task.completed);

    setDayStatus((prevStatus) => ({
      ...prevStatus,
      [currentDay]: allCompleted ? "green" : "red",
    }));

    console.log(`Day ${currentDay} evaluated as ${allCompleted ? "green" : "red"}`);
  };

  // Initialize tasks and statuses on component mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDay(today);

    const savedStatuses = JSON.parse(localStorage.getItem("dayStatus")) || {};
    setDayStatus(savedStatuses);

    loadTasksForDay(today);
  }, []);

  // Save day statuses and tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("dayStatus", JSON.stringify(dayStatus));
    if (currentDay) {
      localStorage.setItem(currentDay, JSON.stringify(tasks));
    }
  }, [dayStatus, tasks, currentDay]);

  // Check if the current time matches 22:30
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 23 && now.getMinutes() === 30) {
        console.log("It's 22:59. Evaluating today's tasks...");
        evaluateDay();
      }
    }, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, [tasks, currentDay]);

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="esirhghsfhisd" >
      <div className="zrfsuhsdfwo">
          
          <h1>Daily Task Manager</h1>

          <div className="ZUSHDFOUHSUDOFH">
            <h2>Tasks for {currentDay}</h2>
            {tasks.length > 0 ? (
              <>
                {tasks.map((task, index) => (
                  <li key={index}   >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(index)}
                    />
                    <span>
                    {task.name}
                    </span>
                  </li>
                ))}
              </>
            ) : (
              <p>No tasks for today!</p>
            )}
          </div>
          <br />
          <div className="eushfdwohswdf">
            <h2>Daily Summary</h2>
            {Object.keys(dayStatus).length > 0 ? (
              <ul>
                {Object.entries(dayStatus).map(([date, status]) => (
                  <li
                    key={date}
                    style={{ fontWeight : "700", color: status === "green" ? "#0e990e" : "red" }}
                  >
                    • {date}: {status === "green" ? "Completed" : "Not Completed"}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{color : "grey"}} >&nbsp;&nbsp;No summary data available!</p>
            )}
          </div>
      </div>
    </div>
  );
};

export default TimeManag;
 
