import React, { useState } from 'react'; // <--- FIXED: Added { useState }
import './App.css';

// Importing Components
import Navbar from './components/Navbar';
import HeroSection from './components/Home'; // Assuming file is Home.jsx or HeroSection.jsx
import AboutSection from "./components/About";  // Assuming file is AboutSection.jsx
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechDivider from './components/TechDivider';
import Footer from './components/Footer';
import Background from './components/Background';
import Loader from './components/Loader';

function App() {
  // State to track if loading is complete
  const [loading, setLoading] = useState(true);

  // Function to hide loader
  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {/* Show Loader if loading is true */}
      {loading ? (
        <Loader onLoaded={handleLoaded} />
      ) : (
        /* Show App Content once loading is false */
        <div className="App fade-in-content">
          <Background />
          <Navbar />
          
          {/* Sections have IDs for Navigation */}
          <div id="home">
            <HeroSection />
          </div>

          <TechDivider />

          <div id="about">
            <AboutSection />
          </div>

          <TechDivider />

          <div id="skills">
            <Skills />
          </div>

          <TechDivider />

          <div id="projects">
            <Projects />
          </div>

          <TechDivider />

          <div id="contact">
            <Contact />
          </div>

          <TechDivider />

          <div id="footer">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;