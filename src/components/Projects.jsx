import React from "react";
import "./Projects.css";
import GymImage from './Gym.png';
import portfolioImage from './portfolio-image.png';
import happyBirthdayImage from './happy-birthday.png';
import doctorImage from './doctor-appointment.png';
import particalMorphingImage from './partical-morphing.png';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  
  // --- DATA STRUCTURE: Add your projects here ---
  const projectCategories = [
    {
      title: "Own Projects", // Category 1
      description: "Major personal projects built from scratch.",
      projects: [
        {
          title: "Portfolio Website",
          image: portfolioImage,
          github: "https://github.com/ABIZER-web/Own-Projects.git",
          demo: "https://abizer-web.github.io/portfolio/" //pending deployment
        },
        {
          title: "Wishing Birthday App",
          image: happyBirthdayImage,
          github: "https://github.com/ABIZER-web/Own-Projects.git",
          demo: "https://happybirthday000123.netlify.app/"
        },
        {
          title: "Particle Morph",
          image: particalMorphingImage,
          github: "https://github.com/ABIZER-web/Own-Projects.git",
          demo: "https://partical-morph.netlify.app/"
        }

//         Gesture-controlled 3D visualizer using Three.js and MediaPipe, rendering and animating 15,000+ particles with high performance.
// Pinch gestures to control complex scene physics, including 3D rotation, dynamic color shifting, and smooth geometric morphing.
// Integrated AI-powered hand tracking to create a touch-free user interface.


      ]
    },
    {
      title: "Mini Projects", // Category 2
      description: "Small, focused tools and experiments.",
      projects: [
        {
          title: "Gym Management System",
          image: GymImage,
          github: "https://github.com/ABIZER-web/gymmy.git",
          demo: "https://drive.google.com/drive/folders/1dr_vmjg-jBzwoDdlqmIw3yZEJ4F_msmd?usp=drive_link"
        },

        {
          title: "Doctor Appointment System",
          image: doctorImage,
          github: "",
          demo: "https://prescripto.vercel.app/"
        }
      ]
    },
    {
      title: "Course Projects", // Category 3
      description: "Academic and certification coursework.",
      projects: [
        {
          title: "Airbnd Clone",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXA5AYw_ahMfnRX-LnLoTtb9hrJziQi-VXMw&s",
          github: "https://github.com/ABIZER-web/Apnacollege.git",
          demo: "#"
        },
        {
          title: "Simon Says Game",
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
          <div key={catIndex} className="category-section">
            
            {/* Category Title */}
            <div className="category-header">
              <h3 className="category-title">
                <span className="hash">#</span> {category.title}
              </h3>
              <p className="category-desc">{category.description}</p>
              <div className="category-line"></div>
            </div>

            {/* Grid of Projects for this Category */}
            <div className="projects-grid">
              {category.projects.map((project, projIndex) => (
                <div key={projIndex} className="project-card">
                  
                  {/* Image */}
                  <div className="image-container">
                    <img src={project.image} alt={project.title} />
                    <div className="overlay"></div>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h4 className="project-name">{project.title}</h4>
                    
                    {/* Buttons */}
                    <div className="btn-group">
                      <a href={project.github} className="btn project-btn github">
                        <FaGithub /> Code
                      </a>
                      <a href={project.demo} className="btn project-btn live">
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