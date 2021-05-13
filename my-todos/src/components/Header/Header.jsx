import React from 'react'
import './header.css'
import Time from '../DateTime/Time'
//import {useHistory} from 'react-router-dom'
import DarkModePage from '../DarkMode/DarkModePage'


const Header = () => {

  // const history = useHistory();
  // function handleClick() {
  //   history.push("/");
  // } 
  const logo = <img className="header_logo" src="https://www.clipartkey.com/mpngs/m/20-204932_pin-check-mark-symbol-png-check-mark-symbol.png" alt="task_logo"  />;
    return (
        <div>
        <header>
           {logo}  
          <h1> Notes</h1>
          <Time />
          <DarkModePage />
          {/* <button className="header_button" onClick={handleClick}>Log out</button> */}
         </header> 
          <br />
           <hr /> 
        </div>
    
        

    
    )
}

export default Header
