import React, { useState, useEffect } from "react";
import { FaUser, FaDownload } from "react-icons/fa"; // Importing icons
import "./Navbar.css";
import MyResume from "./resume.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effect to detect scrolling and add background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left Side: Logo */}
      <div className="nav-logo">
       &lt; Abizer Saify /&gt;
      </div>

      {/* Right Side: Links */}
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        
        <li className="nav-item">
          <a href="#about" className="icon-link">
            <FaUser className="nav-icon" /> About
          </a>
        </li>

        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>

        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>

        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>

        {/* Resume Button */}
        <li className="nav-item">
          {/* 2. USE THE VARIABLE HERE */}
          <a href={MyResume} download="Abizer_Saify_Resume.pdf" className="resume-btn">
            <FaDownload className="nav-icon" /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;