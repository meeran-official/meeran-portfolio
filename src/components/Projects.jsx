import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectData = [
  {
    title: 'Tamil Track',
    description: 'A cross-platform app built in a weekend to help users find where to stream movies with Tamil-dubbed audio, featuring live data from the TMDb API.',
    techStack: ['Flutter', 'Dart', 'TMDb API', 'sqflite', 'Multi-platform'],
    githubLink: 'https://github.com/your-username/tamil_track', // TODO: Replace with your actual link
  },
  {
    title: 'Digital Doppelgänger',
    description: 'A personal AI assistant that uses a local database to provide context to the Google Gemini LLM, allowing it to answer questions based on a user-defined knowledge base.',
    techStack: ['Flutter', 'Dart', 'Gemini API', 'flutter_dotenv', 'State Management'],
    githubLink: 'https://github.com/your-username/doppelganger_flutter', // TODO: Replace with your actual link
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Personal Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;