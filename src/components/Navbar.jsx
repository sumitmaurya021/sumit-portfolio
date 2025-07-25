import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'; // ✅ Corrected import

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
