import React, { useState } from 'react';
import './time.css';

const Time = () => {
  const myDate = new Date();
  // const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"];
  
  const day = myDate.getDate();
  const monthNames = myDate.toLocaleString('default', { month: 'long' });
  const year = myDate.getFullYear();
  // const month = monthNames[myDate.getMonth()];
  //const date = myDate.toLocaleDateString();
  
  //const time = myDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false});
  
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
    colorChange.color = "purple";
  } else {
    message = "Good Evening";
    colorChange.color = "blue";
  }
  
  return (
    <div>
     <h4>Hi, <span style={colorChange}>{message}</span> 😊 </h4>
    <h4>It is currently  <span style={colorChange}>{time}</span>, {day} {monthNames} {year} </h4> 
    </div>
  )
}

export default Time

