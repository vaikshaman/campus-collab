import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import search from "../assets/search-add.png";
import "./Navbar.css"; // Assuming you have a CSS file for Navbar styles
import axios from "axios";

const Navbar = () => {
  const inputRef = useRef(null);
  const [Target, setTarget] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSubmit();
    }
  }

// Define the function you want to trigger when Enter is pressed
  const handleSubmit = () => {
    console.log(Target);
    const url = `/search?target=${Target}`;
    // Navigate to the constructed URL
    window.location.href=url;
    setTarget('')
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }


  const[profiles,setProfiles]=useState([]);
  const storedUserData = localStorage.getItem('user'); // Retrieve the stored user data

    const user = JSON.parse(storedUserData); // Parse the stored user data from JSON to JavaScript object
  

  useEffect(() => {
    axios.get(`http://localhost:8050/api/profile/${user.uid}`)
      .then(Profile => {

        console.log(Profile);
        setProfiles(Profile.data);
      })
      .catch(err => console.log(err));
  }, []);
  



  



  return (
    <nav className="navbar">
      <div className={`hamburger ${isOpen ? "" : "ham-active"}`} onClick={toggleMenu}>
        <div className="hamburger-span">
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        </div>
        <div className={`ham-heading ${isOpen ? "ham-heading-active" : ""}`}>Campus Collaborator</div>
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <div className="campus" onClick={toggleMenu}>CAMPUS COLLABORATOR</div>
        <hr className="horizontal-line" />
        <Link
          to="/Home"
          className={`home ${location.pathname === "/Home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/Queries"
          className={`queries ${
            location.pathname === "/Queries" ? "active" : ""
          }`}
        >
          Queries
        </Link>
        <Link
          to="/about"
          className={`courses ${
            location.pathname === "/Queries" ? "active" : ""
          }`}
        >
          About
        </Link>
       
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => setTarget(e.target.value)}
          onKeyDown={handleKeyDown}
        />
       <Link
      to={`/userprofile/${profiles.userid}`}
      className={`myprofile ${
        location.pathname === `/profile/${profiles.userid}` ? "active" : ""
      }`}
    >
      My Profile
    </Link>
        <Link to="/Project" className="createproject">
          Create Project
          <img
            src={search}
            className="createproject-img"
            alt="Create Project"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
