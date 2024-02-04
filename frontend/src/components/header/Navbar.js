import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import search from '../assets/search-add.png';
import searchsch from '../assets/search-sch.png';

const Navbar = () => {
  return (
    <nav className="Navbar-container">
      <Link to="/" className="home">Home</Link>
      <Link to="/queries" className="queries">Queries</Link>
      <Link to="/courses" className="courses">Courses</Link>
      
      <input type="text" className="search-input" placeholder="Search" />
      
      <Link to="/profile" className="myprofile">My Profile</Link>
      <Link to="/Project" className="createproject">Create Project
        <img src={search} className="createproject-img" />
      </Link>
    </nav>
  );
};

export default Navbar;