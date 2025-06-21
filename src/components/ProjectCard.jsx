import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, techStack, githubLink, liveLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;