import React, { useState } from 'react';
import './time.css';


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
        <h4><span className="msg_font" style={colorChange} >{message}</span>&nbsp;&nbsp;{day} {monthNames} {year}&nbsp;&nbsp;<span className="msg_font" style={colorChange}>{time}</span></h4>
        {/* <h4>It is currently  <span style={colorChange}>{time}, {day} {monthNames} {year}</span> </h4> */}
        
      </div>
    </>
  )
}

export default Time

