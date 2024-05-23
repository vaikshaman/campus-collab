import React, { useState, useEffect } from "react";
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
  const [selectedStatus, setSelectedStatus] = useState("button1");
  const [projects, setProjects] = useState([]);

  const handleAddProject = () => {
    setDivCount((prevCount) => prevCount + 1);
  };

  const handleStatusClick = (button) => {
    setSelectedStatus(button);
  };

  const storedUserData = localStorage.getItem('user');
  const user = JSON.parse(storedUserData);

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8050/api/fetchProject/${user.email}`);
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
    fetchProjectDetails();
  }, []);

  const fetchProject = (projectId) => {
    // Fetch the project details for the selected project and navigate to its page
    console.log("Fetch project with ID:", projectId);
  };

  return (
    <div>
    <Navbar />
    <div className="Profile">
      <Sidebar />
      <div className="prof-homer">
        <div className="profile_nav">
          <div className="profile_pjt_view">Project Overview</div>
          <div className="profile_btn">
            <div className={selectedStatus === 'button1' ? 'activeStatus profile_ongoing_btn' : 'profile_ongoing_btn'} onClick={() => handleStatusClick('button1')}>Ongoing</div>
            <div className={selectedStatus === 'button2' ? 'activeStatus profile_complete_btn' : 'profile_complete_btn'} onClick={() => handleStatusClick('button2')}>Complete</div>
          </div>
        </div>

        <div className="show-project">
          <div className="projects">
            {projects.map((project) => (
              <Link 
                to={`/profile/${project.projectId}`} 
                key={project.projectId} 
                className="project-box" 
              >
                <div className="project-box">
                  <img
                    src={project.images}
                    alt="Project"
                    className="project-image"
                    style={{ width: '28vw' }}
                  />
                  <div className="project-details" onClick={() => fetchProject(project.projectId)}>
                    <h3>{project.projectId}</h3>
                    {project.inputFields.map((field, index) => (
                      field.type === 'heading' && <p key={index}>{field.value}</p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Profile;
