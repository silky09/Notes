import React from 'react'

const Header = () => {
const myDate = new Date();
const date = myDate.toLocaleDateString(); 
//let time = myDate.toLocaleTimeString();
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
          <h4>{date} <span style={colorChange}>{message}</span> </h4>
          
        </div>
    
        

    
    )
}

export default Header
