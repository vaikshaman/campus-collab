// import React from 'react'
// import './YourProject.css'; // Make sure the path to your CSS file is correct

// // const ToggleButtons = () => {
    
//     function YourProject() {
        
//         const [projects, setProjects] = React.useState([]);
    
//         const addProject = () => {
//           const newProject = {
//             id: projects.length,
//             name: `Project ${projects.length + 1}`
//             // You can add more project details here
//           };
//           setProjects([...projects, newProject]);
//         }; 
           
//     const [active, setActive] = React.useState('completed'); // 'ongoing' or 'completed'
  
//     return (
//     <div>
//         <div className='profile-overview'>
//             Project Overview
           
//             <div className="toggle-buttons">
//                 <button
//                     className={`toggle-button ${active === 'ongoing' ? 'active' : ''}`}
//                     onClick={() => setActive('ongoing')}
//                 >
//                     Ongoing
//                 </button>
//                 <button
//                     className={`toggle-button ${active === 'completed' ? 'active' : ''}`}
//                     onClick={() => setActive('completed')}
//                 >
//                     Completed
//                 </button>
//             </div>
//         </div>   

//         <button onClick={addProject}>Add Project</button>
//       <div className="projects-container">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <h3>{project.name}</h3>
//             {/* More project details can go here */}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default YourProject
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./YourProject.css";

const YourProject = ({ property1, frameClassName, frame = "/img/frame-17-7.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "closed",
  });

  return (
    <div
      className={`frame ${state.property1}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="div">
        <div className="div-2">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
          <div className="text-wrapper">UI Design</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Profficient</div>
          </div>
        </div>
        <img
          className={`img ${frameClassName}`}
          alt="Frame"
          src={state.property1 === "open" ? "/img/frame-17-6.png" : frame}
        />
      </div>
      <p className="p">Experience : Design Executive, Coding Club IITG</p>
      <p className="p">Tools : Figma, Sketch, Webflow</p>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "open",
      };
  }

  return state;
}

YourProject.propTypes = {
  property1: PropTypes.oneOf(["closed", "open"]),
  frame: PropTypes.string,
};

export default YourProject;
