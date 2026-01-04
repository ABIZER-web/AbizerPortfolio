import React, { useState } from "react";
import "./About.css";
import { FaFolder, FaBolt, FaGraduationCap, FaCoffee, FaLock, FaUnlock } from "react-icons/fa";

const AboutSection = () => {
  // State to handle lock mechanism
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // The secret password
  const correctPassword = "ameen";

  const handleUnlock = (e) => {
    e.preventDefault();
    // Check if password matches (trim removes accidental spaces)
    if (password.toLowerCase().trim() === correctPassword.toLowerCase()) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      // Reset error animation after a brief moment so it can trigger again
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <section id="about" className="about-section">
      {/* --- 1. TOP: HEADER (Always Visible) --- */}
      <div className="about-header">
        <h2 className="glitch-text" data-text="ABOUT">
          ABOUT
        </h2>
        <p className="subtitle">~ Who am I?</p>
      </div>

      {/* --- CONDITIONAL RENDERING --- */}
      {!isUnlocked ? (
        /* --- LOCKED STATE: SECURITY PANEL --- */
        <div className="lock-screen-container">
          <div className="lock-card">
            <div className="lock-icon-wrapper">
              <FaLock className="lock-icon" />
            </div>
            
            <h3>SYSTEM LOCKED</h3>
            <p className="lock-subtext">Authentication Required to View Profile</p>

            {/* Password Hint */}
            <div className="hint-box">
              <span className="hint-label">HINT:</span>
              <span className="hint-value">"Pray for Abizer got a 35LPA package inshallah."</span>
            </div>

            <form onSubmit={handleUnlock} className="unlock-form">
              <input 
                type="text" 
                placeholder="Enter the magic words..." 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? "password-input error" : "password-input"}
              />
              
              <button type="submit" className="unlock-btn">
                UNLOCK <FaUnlock />
              </button>
            </form>
            
            {error && <p className="error-msg">❌ Access Denied: Incorrect Password</p>}
          </div>
        </div>
      ) : (
        /* --- UNLOCKED STATE: MAIN CONTENT --- */
        <div className="about-content-wrapper fade-in-up">
          
          {/* --- LEFT SIDE: Stats Cards --- */}
          <div className="about-cards-column">
            <div className="stats-grid">
              {/* Card 1: Projects */}
              <div className="stat-card">
                <div className="stat-icon green-icon">
                  <FaFolder />
                </div>
                <h3 className="stat-number green-text">10+</h3>
                <p className="stat-label">Completed Projects</p>
              </div>

              {/* Card 2: Technologies */}
              <div className="stat-card">
                <div className="stat-icon orange-icon">
                  <FaBolt />
                </div>
                <h3 className="stat-number orange-text">25+</h3>
                <p className="stat-label">Technologies Mastered</p>
              </div>

              {/* Card 3: Experience */}
              <div className="stat-card">
                <div className="stat-icon purple-icon">
                  <FaGraduationCap />
                </div>
                <h3 className="stat-number purple-text">2+</h3>
                <p className="stat-label">Years Experience</p>
              </div>

              {/* Card 4: Fun/Student Stat */}
              <div className="stat-card">
                <div className="stat-icon blue-icon">
                  <FaCoffee />
                </div>
                <h3 className="stat-number blue-text">3rd</h3>
                <p className="stat-label">Year I.T. Student</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Terminal Window --- */}
          <div className="about-terminal-column">
            <div className="terminal-window">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">about_me.txt</div>
              </div>

              {/* Terminal Content */}
              <div className="terminal-body">
                <p className="terminal-comment">// Developer Information</p>
                <p className="terminal-text">
                  As a <span className="highlight">Full Stack Developer</span> specializing in the <span className="highlight">MERN stack </span> 
                  (MongoDB, Express, React, Node.js), I design and deploy dynamic
                  web applications. My background covers database management,
                  RESTful API development, and creating responsive front-end
                  interfaces. Proficient in both
                  client-side and server-side technologies, I bridge the gap
                  between user interface and technical implementation to deliver
                  robust, user-centric solutions.
                </p>
                <br />
                <p className="terminal-comment">// My Interests</p>
                <ul className="interest-list">
                  <li>👉 Explore new Technologies</li>
                  <li>👉 Using Artificial Intelligence</li>
                  <li>👉 Playing video games</li>
                  <li>👉 High-Performance Cars (<span className="highlight">BMW</span> & <span className="highlight">Toyota Supra</span>)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;