import React from 'react'
import './header.css'
import Time from '../DateTime/Time'

const Header = () => {
     
  const logo = <img className="header_logo" src="https://i.pinimg.com/originals/16/3a/a6/163aa6aa75341681c25b0160bc67a306.png" alt="task_logo" width="70" height="50" />;
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
