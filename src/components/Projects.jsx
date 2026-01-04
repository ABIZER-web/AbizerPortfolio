import React from "react";
import "./Projects.css";
// Import your images...
import GymImage from './Gym.png';
import portfolioImage from './portfolio-image.png';
import happyBirthdayImage from './happy-birthday.png';
import doctorImage from './doctor-appointment.png';
import particalMorphingImage from './partical-morphing.png';
import devcommandhubImage from './devcommandhub.png';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  // --- HELPER 1: Splits text for Letter Pop-up Effect (Still used for Category Titles) ---
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hover-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  // --- HELPER 2: Highlights "NOTE:" in Red ---
  const renderDescription = (text) => {
    if (text.includes("NOTE:")) {
      const parts = text.split("NOTE:");
      return (
        <>
          {parts[0]}
          <span className="note-highlight">NOTE:{parts[1]}</span>
        </>
      );
    }
    if (text.includes("NOTE:-")) {
        const parts = text.split("NOTE:-");
        return (
          <>
            {parts[0]}
            <span className="note-highlight">NOTE:-{parts[1]}</span>
          </>
        );
      }
    return text;
  };

  const projectCategories = [
    {
      title: "Own Projects", 
      description: "Major personal projects built from scratch.",
      projects: [
        {
          title: "Portfolio Website",
          description: "A fully responsive personal portfolio built with React, Vite, and Framer Motion to showcase skills.",
          image: portfolioImage,
          github: "https://github.com/ABIZER-web/Own-Projects.git",
          demo: "https://abizer-portfolio.vercel.app/" 
        },
        {
          title: "Dev Command Hub",
          description: "A centralized platform for developers to store, manage, and access essential CLI commands efficiently.",
          image: devcommandhubImage,
          github: "https://github.com/ABIZER-web/DevCommandHub.git",
          demo: "https://dev-command-hub.vercel.app/"
        },
        {
          title: "Wishing Birthday App",
          description: "An interactive web experience allowing users to send personalized, animated birthday wishes.",
          image: happyBirthdayImage,
          github: "https://github.com/ABIZER-web/Own-Projects.git",
          demo: "https://happybirthday000123.netlify.app/"
        },
        {
          title: "Particle Morph",
          description: "Gesture-controlled 3D visualizer using Three.js & MediaPipe, rendering 15,000+ interactive particles.",
          image: particalMorphingImage,
          github: "https://github.com/ABIZER-web/Own-Projects.git",
          demo: "https://partical-morph.netlify.app/"
        }
      ]
    },
    {
      title: "Mini Projects", 
      description: "Small, focused tools and experiments.",
      projects: [
        {
          title: "Gym Management System",
          description: "A management tool for tracking gym memberships, scheduling, and user data efficiently. NOTE:- Download APK from drive and run in on desktop or laptop.",
          image: GymImage,
          github: "https://github.com/ABIZER-web/gymmy.git",
          demo: "https://drive.google.com/drive/folders/1dr_vmjg-jBzwoDdlqmIw3yZEJ4F_msmd?usp=drive_link"
        },
        {
          title: "Doctor Appointment System",
          description: "A booking platform connecting patients with doctors for streamlined appointment scheduling.",
          image: doctorImage,
          github: "",
          demo: "https://prescripto.vercel.app/"
        }
      ]
    },
    {
      title: "Course Projects", 
      description: "Academic and certification coursework.",
      projects: [
        {
          title: "Airbnb Clone",
          description: "A full-stack replica of Airbnb features, including property listings and booking functionality.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXA5AYw_ahMfnRX-LnLoTtb9hrJziQi-VXMw&s",
          github: "https://github.com/ABIZER-web/Apnacollege.git",
          demo: "#"
        },
        {
          title: "Simon Says Game",
          description: "The classic memory game rebuilt with JavaScript logic and interactive DOM manipulation. NOTE: It only plays on desktop or laptop.",
          image: "https://ids.si.edu/ids/deliveryService?id=NMAH-2006-18803&max=800",
          github: "https://github.com/ABIZER-web/Apnacollege.git",
          demo: "https://simonsaysgame0123.netlify.app/"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* --- MAIN HEADER --- */}
        <div className="projects-header">
          <h2 className="glitch-text" data-text="PROJECTS">PROJECTS</h2>
          <p className="subtitle">~ Active services running in production</p>
        </div>

        {/* --- CATEGORY LOOP --- */}
        {projectCategories.map((category, catIndex) => (
          <div key={catIndex} className="category-section fade-in">
            
            {/* Category Title with POP-UP Effect (Unchanged) */}
            <div className="category-header">
              <h3 className="category-title slide-in">
                <span className="hash">#</span> 
                {splitText(category.title)}
              </h3>
              <p className="category-desc slide-in-delay">{category.description}</p>
              <div className="category-line grow-line"></div>
            </div>

            {/* Grid of Projects */}
            <div className="projects-grid">
              {category.projects.map((project, projIndex) => (
                <div key={projIndex} className="project-card pop-in">
                  
                  <div className="image-container">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="card-content">
                    {/* --- UPDATED: Project Name with GLITCH Hover Effect --- */}
                    {/* Added data-text attribute and removed splitText */}
                    <h4 
                        className="project-name glitch-hover" 
                        data-text={project.title}
                    >
                        {project.title}
                    </h4>
                    
                    {/* Description with Red Note */}
                    <p className="project-desc-text">
                        {renderDescription(project.description)}
                    </p>
                    
                    <div className="btn-group">
                      <a href={project.github} className="btn project-btn github" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                      <a href={project.demo} className="btn project-btn live" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;