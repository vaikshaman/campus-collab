// // SidebarProfile.js

import React, { useState } from "react";
import "./Infobar.css"; // Make sure to include your CSS file
import mapIcon from "../../assets/map-icon.png"
import NotFriend from "../../assets/make-friend.png"
import isFriend from "../../assets/is-friend.png"

const Sidebar = () => {
  // State to track which accordion section is open
  const [openSection, setOpenSection] = useState("discover");

  const toggleSection = (section) => {
    if (openSection === section) {
      // setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const [friend, setFriend] = useState(false);

  function madeFriend(){
    setFriend((prevState) =>!prevState)
  }

  return (
    <div className="sidebar">
      <div className="profile-section">
        <button
          className="accordion"
          onClick={() => toggleSection("notification")}
        >
          Notification
        </button>
        <div
          className={`panel ${
            openSection === "notification" ? "open" : "instant-close"
          }`}
        >
          <div className="profile-content">
            {/* Profile Bio Here */}
            <div className="profile-image"></div>
            <div className="profile-info">
              <div>Message from Rishi Kiran</div>
              <p>Do you know how to use figma</p>
            </div>
          </div>
          <div className="profile-content">
            {/* Profile Bio Here */}
            <div className="profile-image"></div>
            <div className="profile-info">
              <div>Message from Rishi Kiran</div>
              <p>Do you know how to use figma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <button className="accordion" onClick={() => toggleSection("discover")}>
          Discover
        </button>
        <div
          className={`panel ${
            openSection === "discover" ? "open" : "instant-close"
          }`}
        >
          {/* Expertise Content Here */}
          <div className="profile-content">
            <div className="profile-image"></div>
            <div className="profile-info">
              <div>Rishi Kiran</div>
              <p><img src={mapIcon} alt="Map Icon" /> IIT Guwahati</p>
            </div>
            <div className="profile-select" onClick={madeFriend}>
              <img
                src={friend ? isFriend : NotFriend}
                alt="request friend"
              />
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-image"></div>
            <div className="profile-info">
              <div>Rishi Kiran</div>
              <p><img src={mapIcon} alt="Map Icon" /> IIT Guwahati</p>
            </div>
            <div className="profile-select" onClick={madeFriend}>
              <img
                src={friend ? isFriend : NotFriend}
                alt="request friend"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section fixed-bottom">
        <button className="accordion">
        {/* <button className="accordion" onClick={() => toggleSection("club")}> */}
          Club
        </button>
        <div
          className= "panel open"
          // className={`panel ${
          //   openSection === "club" ? "open" : "instant-close"
          // }`}
        >
          {/* Courses Content Here */}
          <div class="profile-content">
            <div class="profile-image"></div>
            <div class="profile-info">
              <div>Coding Club, IITG</div>
              <p>17 project • 32 courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
