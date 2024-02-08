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
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getprofile")
      .then((Profile) => setProfile(Profile.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(profile);
  const [active, setActive] = React.useState("ongoing");

  const [divCount, setDivCount] = useState(0);

  const handleAddProject = () => {
    setDivCount((prevCount) => prevCount + 1);
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
              <div className="profile_ongoing_btn">Ongoing</div>
              <div className="profile_complete_btn">Complete</div>
            </div>
          </div>
          <div className="show-project">
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
  );
};

export default Profile;
