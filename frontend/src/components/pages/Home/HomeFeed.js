import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

     
   

          {projects && projects.length > 0 ? (
            // Render project boxes if projects array is not empty
            projects.map((project) => (
              <Link 
                to={`/project/${project.projectId}`} 
                key={project.projectId} 
                className="project-box" 
              >
                <img
                  src={project.images} 
                  alt="Project"
                  className="project-image"
                  style={{ width: '28vw' }}
                />
                <div className="project-details">
                  <h3>{project.projectId}</h3>
                  {project.inputFields && project.inputFields.map((field, index) => (
                    field.type === 'heading' && <p key={index}>{field.value}</p>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            // Render loading message or error message if projects array is empty or undefined
            <p>{projects ? "No projects found" : "Loading..."}</p>
          )}
        </div>
      </div>
      <Infobar />

      
    </div>




  );
};

export default HomeFeed;
