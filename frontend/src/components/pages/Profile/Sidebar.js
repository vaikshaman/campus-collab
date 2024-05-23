import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import './Sidebar.css'
import {Avatar} from "flowbite-react"
import Side_arrow from "../../assets/side-arrow.png"
import Graduation_hat from "../../assets/graduation-hat.png"
import School_Pic from "../../assets/school-pic.png"
import diamond from "../../assets/diamond.png";


function Sidebar() {

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
  



  
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? section : section);
  };
  return (
    <div className="app">
      <div className="profile-nav">
        <div
          className={
            activeSection === "profile"
              ? "view-profile-open"
              : "view-profile-close"
          }
        >
          <button
            className="profile-btn"
            onClick={() => handleSectionToggle("profile")}
          >
            <img src={Side_arrow} className="Sidarrow"></img>Profile 
          </button>

          {activeSection === "profile" && (
            <div className="profile-details">
              <div className="profile-head">
                {/* <img src=""></img> */}
                <Avatar img={profiles.imageUrl} alt="avatar" rounded />
                <div className="profile-name">
                <p className="p1">{profiles.name}</p>
                  
                </div>
              </div>
              <div className="profile-origin">

                <div className="profile-know">
                  <p className="p3">Web Development</p>
                  <p className="p4">UI Design</p>
                </div>

                <div className="education">
                  <div><img src={Graduation_hat}></img> <p>Web Dev</p></div>
                  <div> <img src={School_Pic}></img><p>DSA</p></div>
                </div>
                
              </div>

              <button className="line"></button>

              {/* <div className="profile-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div> */}
            </div>

          )}
        </div>

        <div
          className={
            activeSection === "expertise"
              ? "view-expertise-open"
              : "view-expertise-close"
          }
        >
          <button
            className="profile-btn"
            onClick={() => handleSectionToggle("expertise")}
          >
            <img src={Side_arrow} className="Sidarrow"></img>Expertise{" "}
            {/* {activeSection === "expertise" ? "▲" : "▼"} */}
          </button>
          {activeSection === "expertise" && (
            <div className="expertise-details">
              <button className="line"></button>
              {/* <ul>
                <li>Backend Dev</li>
                <li>UI Design</li>
                <li>Frontend Dev</li>
                <li>Product Management</li>
                <li>Aero-modelling</li>
                <li>Web Development</li>
              </ul> */}
              <div className="data1"><img src={diamond}></img>Backend Dev <img src={Side_arrow}></img></div>
              <div className="data1"><img src={diamond}></img>UI Design<img src={Side_arrow}></img></div>
              <div className="data1"><img src={diamond}></img>Frontend Dev<img src={Side_arrow}></img></div>
              <div className="data1"><img src={diamond}></img>Product Managemen<img src={Side_arrow}></img></div>
              <div className="data1"><img src={diamond}></img>Aero-modelling<img src={Side_arrow}></img></div>
              <div className="data1"><img src={diamond}></img>Web Development<img src={Side_arrow}></img></div>
            </div>
          )}
        </div>
        <div className="view-profile-close">
          <Link to="/courses" className="profile-btn">
            {" "}
            <img src=""></img> Courses
          </Link>
        </div>
        {/* <div className="view-profile-close">
          <button className="profile-btn">
            {" "}
            <img src=""></img>Get In Touch
          </button>
        </div> */}
      </div>
      <div>
        <Link className="edit-profile-btn1" to="/EditProfile">Edit Profile</Link>
        <button className="edit-profile-btn2">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;