import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import './Sidebar.css'
import {Avatar} from "flowbite-react"
import Side_arrow from "../../assets/side-arrow.png"
import Graduation_hat from "../../assets/graduation-hat.png"
import School_Pic from "../../assets/school-pic.png"
import diamond from "../../assets/diamond.png";
import { useParams } from "react-router-dom";

function Sidebar() {

  const[profiles,setProfiles]=useState([]);
  const storedUserData = localStorage.getItem('user');
  const user = JSON.parse(storedUserData);

    const { userid } = useParams(); // Extract userid from URL
    

  useEffect(() => {
    axios.get(`http://localhost:8050/api/profile/${userid}`)
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

  const currentUserId = user.email;
  const  userId = profiles.email;

  const [followedUsers, setFollowedUsers] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Fetch followed users when the component mounts
    const fetchFollowedUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8050/api/followedUsers/${userId}/${currentUserId}`);
        setFollowedUsers(response.data.followedUsers);
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error('Error fetching followed users:', error);
      }
    };

    fetchFollowedUsers();
  }, [userId, currentUserId]); // Fetch followed users whenever userId or currentUserId changes

  // Function to handle follow action
  const handleFollow = async () => {
    try {
      await axios.post('http://localhost:8050/api/follow', { follower_username: currentUserId, following_username: userId });
      setIsFollowing(true);
      alert(`You started following ${profiles.name}`);

    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  // Function to handle unfollow action
  const handleUnfollow = async () => {
    try {
      await axios.delete('http://localhost:8050/api/unfollow', { data: { follower_username: currentUserId, following_username: userId } });
      setIsFollowing(false);
      alert(`You unfollowed ${profiles.name}`);
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
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
      {user.uid !== userid && (
  isFollowing ? (
    <button className="edit-profile-btn1" onClick={handleUnfollow}>Unfollow</button>
  ) : (
    <button className="edit-profile-btn1"  onClick={handleFollow}>Follow</button>
  )
)}



    </div>
    {user.uid === userid && (
        <>
          <Link className="edit-profile-btn1" to="/EditProfile">Edit Profile</Link>
          <button className="edit-profile-btn2">Logout</button>
        </>
      )}
    </div>
  );
}

export default Sidebar;