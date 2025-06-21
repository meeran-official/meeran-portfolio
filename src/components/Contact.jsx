import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing the icons

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out!</p>
      <div className="contact-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;