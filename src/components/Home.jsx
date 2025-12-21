import React, { useState, useEffect } from "react";
import "./Home.css";
import heroImage from './hero-image.png';

// --- Helper Component for Typing Effect ---
const Typewriter = ({ text, delay = 0 }) => {
  const [currentText, setCurrentText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (startTyping && currentText.length < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentText.length]);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentText, startTyping, text]);

  return (
    <span>
      {currentText}
      <span className="cursor"></span>
    </span>
  );
};

// ------------------------------------------

const HeroSection = () => {
  const roles = ["Fullstack Developer", "Frontend Developer", "Tech Enthusiast"];
  const [displayName, setDisplayName] = useState("ABIZER");
  const [statusText, setStatusText] = useState("Available for opportunities");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Role switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      
      <div className="hero-content">
        {/* Left Side: Image */}
        <div className="hero-image-wrapper">
          <img 
            src={heroImage} 
            alt="Abizer" 
            className="hero-img floating-animation" 
          />
        </div>

        {/* Right Side: Text */}
        <div className="hero-text">
          <div className="status-badge">
            <span className="green-dot"></span>
            <span className="status-text">Available for opportunities</span>
          </div>

          <div className="name-container" >
            <h1
             className="hero-name" 
             data-text={displayName}
             onMouseEnter={() => setDisplayName("SAIFY")}
             onMouseLeave={() => setDisplayName("ABIZER")}
            >
             {displayName}
            </h1>
          </div>

          <h2 className="hero-role">&lt;
            <font color="#64ffda"> {roles[currentRoleIndex]} </font> /&gt;
          </h2>

          <div className="code-comments">
            <p className="comment-line">
              <Typewriter text="// Building Web Applications" delay={0} />
            </p>
            <p className="comment-line">
              <Typewriter text="// 3rd Year I.T. Student" delay={1500} />
            </p>

            <p className="comment-line">
              <Typewriter text="// Based in India" delay={3000} />
            </p>

            <p className="comment-line">
              <Typewriter text="// Passionate about coding" delay={4500} />
            </p>

            <p className="comment-line">
              <Typewriter text="// React Developer" delay={6000} />
            </p>



          </div>

          <div className="hero-buttons">
  <a href="#projects" className="btn primary-btn">
    View Projects <span className="arrow">→</span>
  </a>
  <a href="#contact" className="btn secondary-btn">
    Get in Touch
  </a>
</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;