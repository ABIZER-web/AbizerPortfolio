import React from "react";
import "./Footer.css";
import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* --- Line 1: Comment Style Tech Stack --- */}
        <div className="footer-tech">
            <p>
                <span className="comment">// Built with React.js, CSS3 & lots of Chai</span> 
                <FaCoffee className="coffee-icon" />
            </p>
        </div>

        {/* --- Line 2: Copyright --- */}
        <div className="footer-copyright">
            <p>&copy; 2025 Abizer Saify. All rights reserved.</p>
        </div>

        {/* --- Line 3: Rust Code Snippet --- */}
        <div className="footer-code">
            <p>
                <span className="keyword">fn</span> <span className="function">main</span>() {'{'} 
                <span className="macro"> println!</span>(<span className="string">"Thanks for visiting!"</span>); 
                {'}'}
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;