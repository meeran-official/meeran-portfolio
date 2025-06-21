import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Core Backend',
    skills: ['Java (17, 8)', 'Spring Boot', 'Microservices', 'SQL (Oracle, PostgreSQL)', 'REST APIs', 'JSP/Servlet', 'JUnit', 'Maven']
  },
  {
    category: 'Frontend & Mobile',
    skills: ['Flutter', 'Dart', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Firebase', 'Google Gemini API', 'TMDb API', 'VS Code', 'GitHub Copilot']
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Toolkit</h2>
      <div className="skills-container">
        {skillsData.map((categoryItem, index) => (
          <div key={index} className="skill-category">
            <h3>{categoryItem.category}</h3>
            <div className="skills-list">
              {categoryItem.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;