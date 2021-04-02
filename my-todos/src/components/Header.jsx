import React from 'react'

const Header = () => {
const myDate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const day = myDate.getDate();
const year = myDate.getFullYear();
const month = monthNames[myDate.getMonth()];
//const date = myDate.toLocaleDateString();

const time = myDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true});
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
          <header>
              <h1>Notes📝</h1>
          </header> 
          <br />
          <hr />
          <br/>
          <h4>Hi, <span style={colorChange}>{message}</span> 😊 </h4>
          <h4>It is currently {day} {month} {year} <em>and</em> <span style={colorChange}>{time}</span></h4>
          
        </div>
    
        

    
    )
}

export default Header
