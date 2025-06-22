import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Meeran. All rights reserved.</p>
      <p className="footer-link">
        <a href="https://github.com/meeran-official/meeran-portfolio" target="_blank" rel="noopener noreferrer">
          Built with React & 🖤
        </a>
      </p>
    </footer>
  );
}

export default Footer;