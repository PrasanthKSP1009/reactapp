// Footer.js

import React from 'react';
import '../../css/FooterComp.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="left-section">
                <p>&copy; 2024 RAMPeX Technologies</p>
                <p>Contact: <a href='mailto:info@rampex.in'>info@rampex.in</a></p>
            </div>
            <div className="right-section">
                <div>
                    <p>Follow Us</p>
                    <a href="https://www.linkedin.com/company/rampextechnologies" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href="https://instagram.com/rampextech" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
