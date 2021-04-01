import React from 'react'

const Footer = () => {
    const myName = 'Silk';
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let date = new Date();
let month = monthNames[date.getMonth()];
let currentYear = date.getFullYear();
    return (
        <div>
            <footer>
                <p>Made with 🧡 &nbsp;and&nbsp;☕️ &nbsp;by {myName}</p>
                <p>Copyright © {month} {currentYear}</p>

            </footer>
        </div>
    )
}

export default Footer
