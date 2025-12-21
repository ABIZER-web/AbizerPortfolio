import React from "react";
import "./Skills.css";

// --- 1. FontAwesome Icons ---
import { 
  FaReact, FaJs, FaNodeJs, FaDocker, FaAws, FaBootstrap, 
  FaGithub, FaLinux, FaFigma, FaJava, FaPython, FaWindows
} from "react-icons/fa";

// --- 2. Simple Icons (Fixed Imports) ---
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs, 
  SiMongodb, SiExpress, SiMysql, SiSqlite,
  SiPostman, SiWireshark, 
  SiDjango, SiFlask, SiFastapi, SiFlutter, SiHtml5, SiCss3
} from "react-icons/si";

// --- 3. VS Code Icon (Import from 'vsc' library to fix error) ---
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      theme: "frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Three.js", icon: <SiThreedotjs /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiFlutter /> },
      ]
    },
    {
      title: "Backend",
      theme: "backend",
      skills: [
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ]
    },
    {
      title: "Frameworks / Libraries",
      theme: "framework",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
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
            <h3 className={`category-title ${category.theme}-title`}>
              <span className="hash">//</span> {category.title}
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