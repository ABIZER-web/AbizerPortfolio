import React from "react";
import "./Skills.css";

// --- 1. FontAwesome Icons ---
import { 
  FaReact, FaJs, FaNodeJs, FaDocker, FaAws, FaBootstrap, 
  FaGithub, FaLinux, FaFigma, FaJava, FaPython, FaWindows
} from "react-icons/fa";

// --- 2. Simple Icons ---
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs, 
  SiMongodb, SiExpress, SiMysql, SiSqlite,
  SiPostman, SiWireshark, 
  SiDjango, SiFlask, SiFastapi, SiFlutter, SiHtml5, SiCss3
} from "react-icons/si";

// --- 3. VS Code Icon ---
import { VscVscode } from "react-icons/vsc";

const Skills = () => {

  // --- HELPER: Splits text into interactive letters ---
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hover-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const skillCategories = [
    {
      title: "Frontend",
      theme: "frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        // { name: "Three.js", icon: <SiThreedotjs /> },
        // { name: "Flutter", icon: <SiFlutter /> },
        // { name: "Dart", icon: <SiFlutter /> },
      ]
    },
    {
      title: "Backend",
      theme: "backend",
      skills: [
        // { name: "Java", icon: <FaJava /> },
        // { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        // { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ]
    },
    {
      title: "Frameworks / Libraries",
      theme: "framework",
      skills: [
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ]
    },
    {
      title: "Database & Cloud",
      theme: "database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
      ]
    },
    {
      title: "Tools & Platforms",
      theme: "tools",
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Wireshark", icon: <SiWireshark /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Windows", icon: <FaWindows /> },
      ]
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        
        <div className="skills-header">
          <h2 className="glitch-text" data-text="SKILLS">SKILLS</h2>
          <p className="subtitle">~ The tech stack powering my projects</p>
        </div>

        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            
            {/* Header with Color Theme Class */}
            <h3 className={`category-title ${category.theme}-title`}>
              <span className="hash">//</span> 
              
              <span className="title-text-wrapper">
                {splitText(category.title)}
              </span>

              <div className={`line ${category.theme}-line`}></div>
            </h3>
            
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className={`skill-card ${category.theme}-card`}>
                  <div className="icon">{skill.icon}</div>
                  <span className="name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="skills-footer">
          <div className="code-block">
            <p><span className="keyword">const</span> <span className="variable">continuousLearning</span> = <span className="boolean">true</span>;</p>
            <p className="comment">// Always exploring new technologies and best practices</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;