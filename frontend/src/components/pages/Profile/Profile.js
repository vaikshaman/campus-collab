

import React from "react";
import {useState,useEffect} from "react";
import "./Profile.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import arrow from '../../assets/side-arrow.png'
import { constants } from "constants-browserify";

const Profile = () => {
  const[profile,setProfile]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/getprofile')
    .then(Profile=>setProfile(Profile.data))
    .catch(err=>console.log(err));

  })
  console.log(profile);
  const [active, setActive] = React.useState('ongoing');
  return (
    <div className="profile">

      <div className="div-3">
        <div className="rectangle-3" />
        <div className="text-wrapper-11">Project Overview</div>
        <div className="frame-29">
          <div className="text-wrapper-12">{profile.name} Completed</div>
        </div>
        <div className="frame-30">
          <div className="text-wrapper-12">{profile.name} Ongoing</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle-4" />
          <div className="rectangle-5" />
        </div>
        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <Sidebar
          className="profile-nav-instance"
          frameClassName="profile-nav-2"
          frameClassName1="profile-nav-7"
          frameClassNameOverride="profile-nav-4"
          frameFrameClassName="profile-nav-3"
          iconParkOutline="/img/icon-park-outline-degree-hat-1.svg"
          imgClassName="profile-nav-5"
          imgClassNameOverride="profile-nav-6"
          mingcuteSchoolLine="/img/mingcute-school-line.svg"
          property1="section-1"
          vectorClassName="design-component-instance-node"
        />
      </div>
    </div>
  );
};

export default Profile;