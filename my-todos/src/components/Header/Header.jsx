import React from 'react'
import './header.css'
import Time from '../DateTime/Time'

const Header = () => {
     
  const logo = <img className="header_logo" src="https://www.clipartkey.com/mpngs/m/20-204932_pin-check-mark-symbol-png-check-mark-symbol.png" alt="task_logo"  />;
    return (
        <div>
        <header>
           {logo}  
           <h1> Notes</h1>
         </header> 
          <br />
           <hr /> 
          <br/>
          <Time />
        </div>
    
        

    
    )
}

export default Header
