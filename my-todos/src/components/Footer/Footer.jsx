import React from 'react'
import './footer.css'

const Footer = () => {
    const myName = 'Silk';
    

let date = new Date();
let currentYear = date.getFullYear();
    return (
        <div className="footer">
            <footer>
                <p>Made with 🧡 &nbsp;and&nbsp;☕️ &nbsp;by {myName}</p>
                <p className="copyright">© {currentYear} All rights reserved.</p>

            </footer>
        </div>
    )
}

export default Footer
