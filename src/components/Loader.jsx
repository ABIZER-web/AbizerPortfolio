import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onLoaded }) => {
  const [loadingText, setLoadingText] = useState("INITIALIZING...");
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Check screen width to detect mobile
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    };
    checkMobile();

    // Sequence of loading texts
    const texts = [
      "LOADING ASSETS...",
      "ESTABLISHING CONNECTION...",
      "CONFIGURING INTERFACE...",
      "SYSTEM READY"
    ];

    let delay = 0;
    texts.forEach((text, index) => {
      setTimeout(() => {
        setLoadingText(text);
        
        // If it's the last text (System Ready)
        if (index === texts.length - 1) {
          if (window.innerWidth <= 768) {
            // Show warning on mobile instead of finishing immediately
            setShowWarning(true);
          } else {
            // Finish immediately on desktop
            setTimeout(onLoaded, 800);
          }
        }
      }, delay);
      delay += 800; // 0.8s per text update
    });

  }, [onLoaded]);

  const handleEnterAnyway = () => {
    onLoaded();
  };

  return (
    <div className="loader-container">
      {/* BACKGROUND EFFECTS */}
      <div className="loader-scanlines"></div>
      
      <div className="loader-content">
        {!showWarning ? (
          <>
            <div className="spinner">
              <div className="inner-spin"></div>
            </div>
            <h2 className="loading-text glitch-load" data-text={loadingText}>
              {loadingText}
            </h2>
            <div className="loader-bar">
              <div className="loader-progress"></div>
            </div>
          </>
        ) : (
          <div className="mobile-warning fade-in">
            <h2 className="warning-title">⚠️ OPTIMIZATION NOTICE</h2>
            <p className="warning-text">
              For the best visual experience, this portfolio is designed for 
              <span className="highlight"> Desktop / Laptop</span> displays.
            </p>
            <p className="warning-subtext">
              You may continue on mobile, but some animations may be simplified.
            </p>
            <button className="enter-btn" onClick={handleEnterAnyway}>
              [ CONTINUE ANYWAY ]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;