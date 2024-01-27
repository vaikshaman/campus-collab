// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isActive ? 'active' : ''}`} />
        <div className={`bar ${isActive ? 'active' : ''}`} />
        <div className={`bar ${isActive ? 'active' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
