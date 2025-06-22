import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectData = [
  {
    title: 'Full-Stack Mood Tracker',
    description: 'A full-stack application to track daily emotions, view trends, and gain insights into your mental well-being.',
    techStack: ['React', 'Spring Boot', 'Spring Data JPA', 'Chart.js', 'H2'],
    highlight: 'Built a full-stack application with a RESTful API backend and a reactive frontend.', // from README-mood-tracker.md
    githubLink: 'https://github.com/meeran-official/mood-tracker',
  },
  {
    title: 'Habit Tracker API',
    description: 'This project is a Spring Boot application designed to help users track their habits. It provides a RESTful API for managing users, habits, and habit completion logs.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA'],
    highlight: 'Implemented secure, stateless authentication using JSON Web Tokens (JWT).', // from README-habit-tracker.md
    githubLink: 'https://github.com/meeran-official/habit-tracker-spring',
  },
  {
    title: 'TechFeed - AI-Powered News',
    description: 'An AI-powered platform to help users stay informed about the news that matters most, with intelligent insights that promote understanding and positive action.',
    techStack: ['Android (Java)', 'NewsAPI', 'Gemini API', 'MVP Architecture'],
    highlight: 'Integrated an AI model to perform sentiment analysis and solution detection on live news articles.', // from README-tech-feed.md
    githubLink: 'https://github.com/meeran-official/TechFeeds',
  },
  {
    title: 'Digital Doppelgänger - AI Assistant',
    description: 'A personal AI voice/chat assistant that uses a local database to provide context to the Google Gemini LLM, allowing it to answer questions based on a user-defined knowledge base.',
    techStack: ['Flutter', 'Dart', 'Gemini API', 'sqflite', 'TTS'],
    highlight: 'Features a multi-layer fallback system for voice synthesis (Gemini TTS → Device TTS) for reliability.', // from README-doppleganger.md
    githubLink: 'https://github.com/meeran-official/doppelganger',
  },
  {
    title: 'Cognitive Bias Companion',
    description: 'An Android app that uses AI to spot cognitive biases in NEWS and text. Think of it as a BS detector powered by Google\'s Gemini AI.',
    techStack: ['Android (Java)', 'Gemini API', 'Retrofit', 'NewsAPI'],
    highlight: 'Engineered a custom prompt that asks the Gemini API to return structured JSON for reliable parsing.', // from README-cognitive.md
    githubLink: 'https://github.com/meeran-official/CognitiveBiasCompanion',
  },
  {
    title: 'Tamil Track',
    description: 'A cross-platform app built to help users find where to stream movies with Tamil-dubbed audio, featuring live data from the TMDb API.',
    techStack: ['Flutter', 'Dart', 'TMDb API', 'Multi-platform'],
    highlight: 'Solves a real-world problem by checking for Tamil dubs across multiple streaming platforms in India.', // from README-tamil-track.md
    githubLink: 'https://github.com/meeran-official/tamil-movies-tracker',
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
            highlight={project.highlight}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;