import React, { useState } from 'react';
import './time.css';
import DarkModePage from '../DarkMode/DarkModePage'

const Time = () => {
  const myDate = new Date();
  const day = myDate.getDate();
  const monthNames = myDate.toLocaleString('default', { month: 'long' });
  const year = myDate.getFullYear();
  
  // used hook for adding live clock
  let now = new Date().toLocaleTimeString('en-GB');

  const [time, setTime] = useState(now);

  const updateTime = () => {
  now = new Date().toLocaleTimeString('en-GB');
  setTime(now);
  }
  setInterval(updateTime, 1000);

  
  const currentHours = myDate.getHours();
  let message = "";
  
  const colorChange = {
    color: ""
  };
  
  if (currentHours < 12) {
    message = "Good Morning";
    colorChange.color = "red";
  } else if (currentHours < 18) {
    message = "Good Afternoon";
    colorChange.color = "green";
  } else {
    message = "Good Evening";
    colorChange.color = "blue";
  }
  
  return (
    <>
      <div>
      {/* <h4><DarkModePage /></h4> */}
        <h4><DarkModePage /><span style={colorChange}>{message}</span> </h4>
        <h4>It is currently  <span style={colorChange}>{time}, {day} {monthNames} {year}</span> </h4>
        
      </div>
    </>
  )
}

export default Time

