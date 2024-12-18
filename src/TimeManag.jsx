import React, { useState, useEffect } from "react";
import "./App.css";

const TimeManag = () => {
  // Define exam data for each year
  const exams = {
    "Exams of 2024": generateExams(2024),
    "Exams of 2023": generateExams(2023),
    "Exams of 2022": generateExams(2022),
    "Exams of 2021": generateExams(2021),
    "Exams of 2020": generateExams(2020),
  };

  // Generate 2 exams per month for a given year
  function generateExams(year) {
    const exams = [];
    if(year === 2024){
      for (let month = 0; month < 7; month++) {
        exams.push(`${year}-${String(month + 1).padStart(2, "0")}-Exams`);
      }
    }
    else{
      for (let month = 0; month < 12; month++) {
        exams.push(`${year}-${String(month + 1).padStart(2, "0")}-Exams`);
      }
    }
    return exams;
  }

  // Retrieve saved progress and notes from localStorage or initialize
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("trackingProgress");
    return saved ? JSON.parse(saved) : {};
  });
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("examNotes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  // Update localStorage whenever progress or notes change
  useEffect(() => {
    localStorage.setItem("trackingProgress", JSON.stringify(progress));
    localStorage.setItem("examNotes", JSON.stringify(notes));
  }, [progress, notes]);

  // Handle cell toggle and prompt for note
  const toggleCell = (exam, category) => {
    const note = prompt("Enter the Note result for this exam:");
    if (note !== null && note.trim() !== "") {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [exam]: note
      }));
      setProgress((prev) => {
        const updated = { ...prev };
        if (!updated[exam]) updated[exam] = {};
        updated[exam][category] = true; // Assume completion when note is added
        return updated;
      });
    }
  };

  const categories = ["Test 1", "Test 2"];

  return (
    <div className="Tracking">
      <div className="caseOO">
        {Object.entries(exams).map(([year, exams]) => (
          <div key={year} className="yearBlock">
            <h3 className="yearTitle">{year}</h3>
            <div className="bodyTable">
              {exams.map((exam) => (
                <div className="row" key={exam}>
                  <div className="dateCell">{exam}</div>
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`checkOrNot ${
                        progress[exam] && progress[exam][category] ? "completed" : ""
                      }`}
                      onClick={() => toggleCell(exam, category)}
                    >
                      {/* Show note if available, else show category */}
                      {notes[exam] ? notes[exam] : category}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeManag;
