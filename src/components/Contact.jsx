import React from "react";
import "./Contact.css";
// Import necessary icons
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const contactDetails = {
    email: "abizersaifee5253@gmail.com",
    githubLink: "https://github.com/ABIZER-web",
    linkedinLink: "#" // Replace with actual LinkedIn URL if you have it
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* --- 1. Header Section with Glitch --- */}
        <div className="contact-header">
          <h2 className="glitch-text" data-text="CONTACT">CONTACT</h2>
          <p className="subtitle">~ Ready to collab to make it huge</p>
        </div>

        {/* --- 2. Terminal Section (Rust Code) --- */}
        <div className="terminal-wrapper">
          <div className="terminal-window">
            {/* Terminal Header Bar */}
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">contact.rs</div>
            </div>
            
            {/* Terminal Body Content */}
            <div className="terminal-body">
              <p className="comment">// Let's build something together</p>
              <p>
                <span className="keyword">pub struct</span> <span className="type">Contact</span> {'{'}
              </p>
              <p className="indent">
                <span className="field">email:</span> <span className="string">"{contactDetails.email}"</span>,
              </p>
              <p className="indent">
                <span className="field">github:</span> <span className="string">"@ABIZER-web"</span>,
              </p>
              <p className="indent">
                <span className="field">linkedin:</span> <span className="string">"Mr.Abizer Saify"</span>,
              </p>
              <p className="indent">
                <span className="field">status:</span> <span className="type">Status::Available</span>,
              </p>
              <p>{'}'}</p>
              <br />
              <p className="command-line">
                <span className="prompt">$</span> cargo run --release
              </p>
              <p className="output">Compiling portfolio v1.0.0...</p>
              <p className="output success">Finished release [optimized] target(s) in 1.2s</p>
              <p className="output highlight">Running `target/release/contact`</p>
            </div>
          </div>
        </div>

        {/* --- 3. Three Cards Row --- */}
        <div className="contact-cards-grid">
          {/* Email Card */}
          <div className="contact-card email-card">
            <div className="card-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>{contactDetails.email}</p>
          </div>

          {/* GitHub Card */}
          <div className="contact-card github-card">
            <div className="card-icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>@ABIZER-web</p>
          </div>

           {/* LinkedIn Card */}
           <div className="contact-card linkedin-card">
            <div className="card-icon">
              <FaLinkedinIn />
            </div>
            <h3>LinkedIn</h3>
            <p>Mr.Abizer Saify</p>
          </div>
        </div>

        {/* --- 4. Action Buttons --- */}
        <div className="contact-actions">
          <a href={`mailto:${contactDetails.email}`} className="btn primary-btn">
            <FaPaperPlane className="btn-icon-left" /> Send Email <FaArrowRight className="btn-icon-right" />
          </a>
          <a href={contactDetails.githubLink} target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
             <FaGithub className="btn-icon-left" /> View GitHub <FaArrowRight className="btn-icon-right" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;