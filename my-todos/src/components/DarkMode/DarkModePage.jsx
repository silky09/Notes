import React from 'react';
import './DarkModePage.css';

const DarkModePage = () => {
  let clickButton = "clicked";
  const body = document.body; // contains the content for the document.
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  // using window.localStorage
  
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  (theme === lightTheme || theme === darkTheme) ? body.classList.add(theme) : body.classList.add(lightTheme);

 function switchTheme(e) {
   if (theme === darkTheme) {
     body.classList.replace(darkTheme, lightTheme) // body.classList returns a live DOMTokenList(replace, add,remove)
     e.target.classList.remove(clickButton)
     localStorage.setItem("theme", "light")
     theme = lightTheme
   } else {
     body.classList.replace(lightTheme, darkTheme)
     e.target.classList.remove(clickButton)
     localStorage.setItem("theme", "dark")
     theme = darkTheme
   }
 }

  return (
    <>
      <div>
        <button onClick={switchTheme}
          className={theme === "dark" ? clickButton : ''}
          id="darkMode"></button>
      </div>
    </>
    
  )
}

export default DarkModePage
