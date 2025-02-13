// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import icons

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/UnknownKonflikt" target="_blank" rel="author" aria-label="GitHub">
      <FaGithub size={24} />
    </a>
    <a href="https://www.linkedin.com/in/anthony-gillespie-4b0412170/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin size={24} />
    </a>
    <a href="https://www.facebook.com/anthony.gillespie.35/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook size={24} />
    </a>
    <a href="https://www.instagram.com/unknown_konflikt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram size={24} />
    </a>
    
  </footer>
);

export default Footer;