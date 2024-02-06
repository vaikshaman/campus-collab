import React from 'react'
import { Link } from "react-router-dom";
import "./Nav_About.css"

function Nav_About() {
  return (
    <div className='Nav_About_Main'>
      
      <nav className="Navbar_about">
            <div className="About-logo">CampusCollaborator</div>
            <Link to="/Login" className="querie_about">Login</Link>
            <Link to="/Login" className="course_about">Signup with Outlook</Link>
      </nav>

    </div>
  )
}

export default Nav_About
