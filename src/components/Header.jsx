import React from 'react';
import './Header.css';

function Header() {
  // This function handles the smooth scroll
  const handleNavClick = (event, sectionId) => {
    event.preventDefault(); // Prevent the default instant jump
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#" onClick={(e) => handleNavClick(e, '#hero')}>Meeran</a>
      </div>
      <nav className="nav-links">
        {/* Each link now calls our smooth scroll function */}
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;