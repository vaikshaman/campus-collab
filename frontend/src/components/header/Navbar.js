import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import search from '../assets/search-add.png';
import "./Navbar.css"; // Assuming you have a CSS file for Navbar styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburger-span">
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        </div>
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <div className="campus">CAMPUS COLLABORATOR</div>
        <hr className="horizontal-line" />
        <Link to="/Home" className={`home ${location.pathname === "/Home" ? "active" : ""}`}>Home</Link>
        <Link to="/Queries" className={`queries ${location.pathname === "/Queries" ? "active" : ""}`}>Queries</Link>
        <Link to="/Courses" className={`courses ${location.pathname === "/Courses" ? "active" : ""}`}>Courses</Link>
        <input type="text" className="search-input" placeholder="Search" />
        <Link to="/profile" className={`myprofile ${location.pathname === "/profile" ? "active" : ""}`}>My Profile</Link>
        <Link to="/Project" className="createproject">Create Project
          <img src={search} className="createproject-img" alt="Create Project" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
