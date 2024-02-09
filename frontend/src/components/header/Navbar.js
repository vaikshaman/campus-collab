import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from '../assets/search-add.png';
import "./Navbar.css"; // Assuming you have a CSS file for Navbar styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  

  return (
    <nav className="navbar" >
      <div className="hamburger" onClick={toggleMenu} >
        <div className="hamburger-span">
        <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        </div>
        {/* <div className="hamburger-text">CAMPUS COLLABORATOR</div> */}
        
      </div>
        
      <div className={`nav-items  ${isOpen ? "open" : ""}`}>
        <div className="campus" onClick={toggleMenu} >CAMPUS COLLABORATOR</div>
        <hr className="horizontal-line" />
        <Link to="/Home" className="home">Home</Link>
        <Link to="/Queries" className="queries">Queries</Link>
        <Link to="/Courses" className="courses">Courses</Link>
        <input type="text" className="search-input" placeholder="Search" />
        <Link to="/profile" className="myprofile">My Profile</Link>
        <Link to="/Project" className="createproject">Create Project
          <img src={search} className="createproject-img" alt="Create Project" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;