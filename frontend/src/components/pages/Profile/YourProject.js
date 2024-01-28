import React from 'react'
import './YourProject.css'; // Make sure the path to your CSS file is correct

// const ToggleButtons = () => {
    
    function YourProject() {
        
        const [projects, setProjects] = React.useState([]);
    
        const addProject = () => {
          const newProject = {
            id: projects.length,
            name: `Project ${projects.length + 1}`
            // You can add more project details here
          };
          setProjects([...projects, newProject]);
        }; 
           
    const [active, setActive] = React.useState('completed'); // 'ongoing' or 'completed'
  
    return (
    <div>
        <div className='profile-overview'>
            Project Overview
           
            <div className="toggle-buttons">
                <button
                    className={`toggle-button ${active === 'ongoing' ? 'active' : ''}`}
                    onClick={() => setActive('ongoing')}
                >
                    Ongoing
                </button>
                <button
                    className={`toggle-button ${active === 'completed' ? 'active' : ''}`}
                    onClick={() => setActive('completed')}
                >
                    Completed
                </button>
            </div>
        </div>   

        <button onClick={addProject}>Add Project</button>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            {/* More project details can go here */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default YourProject