import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter as Router
import './Navbar.css';

const Navbar = () => {
  return (
    
      <nav className="Navbar-container">
        <Link to="/" className="home">Home</Link>
        <Link to="/queries" className="queries">Queries</Link>
        <Link to="/courses" className="courses">Courses</Link>
        
        <input type="text" className="search-input" placeholder="Search" />
        
        <Link to="/profile" className="myprofile">My Profile</Link>
        <Link to="/Project" className="createproject">Create Project
          <img src="" className="createproject-img" />
        </Link>
      </nav>
    
  );
};

export default Navbar;