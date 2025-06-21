import React from 'react';
import './Header.css'; // We will create this file next for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">Meeran</a>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;