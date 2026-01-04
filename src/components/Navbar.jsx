import React, { useState, useEffect } from "react";
// Import necessary icons
import { FaUser, FaDownload, FaBars, FaTimes } from "react-icons/fa"; 
import "./Navbar.css";
import MyResume from "./resume.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo">
           &lt; Abizer Saify /&gt;
        </div>

        {/* Hamburger Icon (Only visible on Mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>
          
          <li className="nav-item">
            <a href="#about" className="icon-link" onClick={toggleMenu}>
              <FaUser className="nav-icon" /> About
            </a>
          </li>

          <li className="nav-item">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>

          <li className="nav-item">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>

          <li className="nav-item">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>

          {/* Resume Button */}
          <li className="nav-item">
            <a href={MyResume} download="Abizer_Saify_Resume.pdf" className="resume-btn" onClick={toggleMenu}>
              <FaDownload className="nav-icon" /> Resume
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;