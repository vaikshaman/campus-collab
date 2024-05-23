import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component from React Router
import './HomeFeed.css';
import Infobar from "./Infobar";
import axios from "axios";

const HomeFeed = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the backend when the component mounts
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Make a GET request to fetch projects from the backend API
      const response = await axios.get(`http://localhost:8050/api/fetchProject`);
      if (response.data.status === "success") {
        // Set the projects state with the fetched project data
        setProjects(response.data.data);
      } else {
        console.error("Failed to fetch projects:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div className="HomeFeed">
      <div className="biggest-container">
        <div className="biggest-box">
          {projects.map((project) => (
            <Link 
              to={`/project/${project.projectId}`} // Create link to project detail page with project ID
              key={project.projectId} 
              className="project-box" 
            >
              <img
                src={project.images} // Assuming images is an array
                alt="Project"
                className="project-image"
                style={{ width: '28vw' }}
              />
              <div className="project-details">
                <h3>{project.projectId}</h3>
                {project.inputFields.map((field, index) => (
                  field.type === 'heading' && <p key={index}>{field.value}</p>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Infobar />
    </div>
  );
};

export default HomeFeed;
