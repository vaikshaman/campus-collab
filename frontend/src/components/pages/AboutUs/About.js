import React from "react"
import { Link } from "react-router-dom";

import './About.css';

const About =()=>{
    
        return (
          <nav className="Navbar">
            <div className="About-logo">CampusCollaborator</div>
            <Link to="/Login" className="querie">Login</Link>
            <Link to="/Login" className="course">Signup with Outlook</Link>
          </nav>
        );
      
}
export default About;