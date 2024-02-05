
import React from "react";
import {useState,useEffect} from "react";
import "./Profile.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import Navbar from "../../header/Navbar";

import arrow from '../../assets/side-arrow.png'
import { constants } from "constants-browserify";

const Profile = () => {
  const[profile,setProfile]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/getprofile')
    .then(Profile=>setProfile(Profile.data))
    .catch(err=>console.log(err));

  },[])
  console.log(profile);
  const [active, setActive] = React.useState('ongoing');
  return (
    <div>
      <Navbar/>
    <div className="Profile">
    
        <Sidebar />
        <div className="profile_nav">
          <div className="profile_pjt_view">Project Overview</div>
          <div className="profile_btn">
          <div className="profile_ongoing_btn">Ongoing</div>
          <div className="profile_complete_btn">Complete</div>
          </div>
      
      </div>
</div>
    </div>
    
    
      

        );
};

export default Profile;