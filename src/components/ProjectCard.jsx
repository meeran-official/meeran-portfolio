import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa'; 

function ProjectCard({ title, description, techStack, githubLink, liveLink, highlight }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      
      {highlight && (
        <div className="project-highlight">
          <span>⭐</span>
          <p>{highlight}</p>
        </div>
      )}

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>}
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;