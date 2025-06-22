import React from 'react';
import './About.css';
import Reveal from './Reveal'; // We'll use our Reveal component to animate it!

function About() {
  return (
    <section id="about" className="about-section">
      <Reveal>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            With four years of experience as a Product Engineer, I specialize in developing and maintaining backend systems for complex supply chain management applications. What truly drives me is going beyond the immediate task—pioneering new tools like Git and AI at my organization, mentoring my team through detailed documentation, and exploring new frameworks like Flutter to understand the complete software lifecycle. I am now seeking a challenging role where I can apply my deep Java expertise and my passion for building intelligent, high-impact systems.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default About;