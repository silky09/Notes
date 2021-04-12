import React from 'react'

const Footer = () => {
    const myName = 'Silk';
    

let date = new Date();
let currentYear = date.getFullYear();
    return (
        <div>
            <footer>
                <p>Made with 🧡 &nbsp;and&nbsp;☕️ &nbsp;by {myName}</p>
                <p>Copyright © {currentYear}</p>

            </footer>
        </div>
    )
}

export default Footer
