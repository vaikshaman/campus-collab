
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
    <div className="profile">

      <div className="div-3">
        <div className="rectangle-3" />
        <div className="text-wrapper-11">Project Overview</div>
        <div className="frame-29">
          <div className="text-wrapper-12">{profile[0].name}</div>
        </div>
        <div className="frame-30">
          <div className="text-wrapper-12">{profile[1].name}</div>
        </div>

      </div>
      
      
    
      

    
  );
};

export default Profile;