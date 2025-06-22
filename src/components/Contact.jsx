import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing the icons

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out!</p>
      <div className="contact-links">
        <a href="http://github.com/meeran-official" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href="http://linkedin.com/in/meeranOfficial" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:meeran.official@gmail.com">
          <FaEnvelope />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;