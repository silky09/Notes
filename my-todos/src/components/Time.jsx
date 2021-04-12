import React from 'react'

const Time = () => {
  const myDate = new Date();
  // const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"];
  
  const monthNames = myDate.toLocaleString('default', { month: 'long' });
  const day = myDate.getDate();
  const year = myDate.getFullYear();
  // const month = monthNames[myDate.getMonth()];
  //const date = myDate.toLocaleDateString();
  
  const time = myDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false});
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
    <div>
     <h4>Hi, <span style={colorChange}>{message}</span> 😊 </h4>
    <h4>It is currently  <span style={colorChange}>{time} </span> , {day}  {monthNames} {year} </h4> 
    </div>
  )
}

export default Time

