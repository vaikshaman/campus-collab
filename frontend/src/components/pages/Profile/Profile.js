import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Profile.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import Navbar from "../../header/Navbar";

import arrow from "../../assets/side-arrow.png";
import { constants } from "constants-browserify";

const Profile = () => {
  const [active, setActive] = React.useState("ongoing");

  const [divCount, setDivCount] = useState(0);

  const handleAddProject = () => {
    setDivCount((prevCount) => prevCount + 1);
  };


  const [projects, setProjects] = useState([]);

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/addProject');
      if (response.ok) {
        const data = await response.json();
        setProjects(data.data);
      } else {
        throw new Error('Failed to fetch project details');
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  useEffect(() => {
    // Fetch project details when the component mounts
    fetchProjectDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="Profile">
        <Sidebar />
        <div className="prof-homer">
          <div className="profile_nav">
          
            <div className="profile_pjt_view">Project Overview</div>
            <div className="profile_btn">
              <div className="profile_ongoing_btn">Ongoing</div>
              <div className="profile_complete_btn">Complete</div>
            </div>
          </div>
          
          <div className="show-project">
          <div className="projects">
        {projects.map((project) => (
            <div key={project.projectId} className="project-box">
            <img
              // src={project.image[0]}
              src="http://localhost:8080/uploads\\23d2d58b7cbfd54b635c526d4b199a39"
              alt="Project"
               className="project-image"
               style={{ width: '28vw' }}
              />

              <div className="project-details">
                <h3>{project.projectId}</h3>
                
                {project.inputFields
                      .filter((field) => field.type === 'heading' || field.type === 'subheading')
                      .map((field, index) => (
                        <p key={index}>{field.value}</p>
                      ))}
               
              </div>
            </div>
          ))}


          {[...Array(divCount)].map((_, index) => (
              <div key={index} className="show-divs">This is div {index + 1}</div>
            ))}
            <div className="show-button">
              <p>Add your latest ongoing or completed projects</p>
              <Link className="link" to="/Project" onClick={handleAddProject}>Create a Project</Link>

            </div>
        </div>


           
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Profile;