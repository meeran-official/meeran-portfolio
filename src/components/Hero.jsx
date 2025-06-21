import React from 'react';
import './Hero.css'; // <-- This is the important line to add

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">A Software Craftsman specializing in Java...</h1>
        <p className="hero-tagline">
          ...with a passion for building robust backend systems and exploring the full potential of technology.
        </p>
      </div>
    </section>
  );
}

export default Hero;