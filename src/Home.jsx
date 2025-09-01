import React, { useState, useEffect } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const targetDate = new Date('2025-12-30T00:00:00');  
  const nav = useNavigate();
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;  
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

    const formatTime = () => {
    const { days, hours, minutes, seconds } = timeLeft;
    return (
      <div className='timer-display'>
        <button>
          <span>
            {days}
          </span>
          <span>
            Tage
          </span>
        </button>
        <button>
          <span>
            {hours.toString().padStart(2, '0')}
          </span>
          <span>
            Stunden
          </span>
        </button>
        <button>
          <span>
            {minutes.toString().padStart(2, '0')}
          </span>
          <span>
            Minuten
          </span>
        </button>
        <button>
          <span>
            {seconds.toString().padStart(2, '0')}
          </span>
          <span>
            Sekunden
          </span>
        </button>
      </div>
    );
  };
  return (
    <div className='Home'>
      <div className="Home2">
        <h1>
          telc B2
        </h1>
        <div className="Timer">
          {formatTime()}
        </div>
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
          alert('Time is up!') 
        )}
        <br />

        <a className='sojqefd' style="color : white !important;"  href="https://telc-b2.netlify.app" >
          <em>
            Telc Drive Essential
          </em>
        </span>

        <br />


        
        <span className='sojqefd'  onClick={()=>{nav('/Dokument')}} >
          <em>
            Andere Dokument
          </em>
        </span>
        <br />
        <span className='sojqefd'  onClick={()=>{nav('/Dokument-Telc')}} >
          <em>
            Telc Dokument
          </em>
        </span>

        <br />
      
         <span style="color : white;"   >
          Morgan Plus Four is waiting for you 
        </span>
      </div>
    </div>
  );
};
export default Home;









