import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0);
  const [days, setDays] = useState([ "Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  let currentDay = time.getDay();
  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let meridian = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return (
    <>
      <main className="mn">
        <div className="clock">
          <div className="dis">
            <div className="day">
              {
                days.map((day, index) => (
                  <h3 className={`day-name ${currentDay === index ? 'day-active': ''}`} key={index}>{day}</h3>
                ))
              }
            </div>
            <h2 className="time">
              <span className="time-tellr">{hours}<span className='blinker'>:</span>{minutes}</span>
            </h2>
            <div className="mer">
              <h3 className="mr">{meridian}</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
