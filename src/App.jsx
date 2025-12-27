// App.jsx
import React from 'react';
import './App.css';

// Importing Components (We will define these below)
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechDivider from './components/TechDivider';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      
      {/* Sections have IDs for Navigation */}
      <div id="home">
        <Home />
      </div>

      <TechDivider />

      <div id="about">
        <About />
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
  );
}

export default App;