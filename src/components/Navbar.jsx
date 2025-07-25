import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
