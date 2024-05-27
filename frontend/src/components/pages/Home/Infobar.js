import React, { useState, useEffect } from "react";
import "./Infobar.css";
import mapIcon from "../../assets/map-icon.png";
import NotFriend from "../../assets/make-friend.png";
import isFriend from "../../assets/is-friend.png";
import AVATAR from "../../assets/Avatar.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Infobar = () => {
  const [openSection, setOpenSection] = useState("discover");
  const [profiles, setProfiles] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);
  const currentUserId = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    if (openSection === "discover") {
      fetchProfiles();
      fetchFollowedUsers();
    }
  }, [openSection]);

  const fetchProfiles = async () => {
    try {
      const response = await axios.get("http://localhost:8050/api/profiles");
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const fetchFollowedUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8050/api/followedUsers/${currentUserId}`);
      setFollowedUsers(response.data.followedUsers);
    } catch (error) {
      console.error("Error fetching followed users:", error);
    }
  };

  const handleFollowToggle = async (profileId, isCurrentlyFollowing) => {
    try {
      if (isCurrentlyFollowing) {
        await axios.delete("http://localhost:8050/api/unfollow", {
          data: { follower_username: currentUserId, following_username: profileId },
        });
        setFollowedUsers(followedUsers.filter((userId) => userId !== profileId));
        alert(`You unfollowed ${profileId}`);
      } else {
        await axios.post("http://localhost:8050/api/follow", {
          follower_username: currentUserId,
          following_username: profileId,
        });
        setFollowedUsers([...followedUsers, profileId]);
        alert(`You started following ${profileId}`);
      }
    } catch (error) {
      console.error("Error toggling follow status:", error);
    }
  };

  return (
    <div className="infobar">
      <div className="info-section">
        <button className="accordion" onClick={() => setOpenSection("notification")}>
          Notification
        </button>
        <div className={`panel ${openSection === "notification" ? "open" : "instant-close"}`}>
        <div className="info-content">
            {/* Profile Bio Here */}
            <img src={AVATAR} className="info-image" alt="Avatar" />
            <div className="info-info">
              <div>Message from Rishi Kiran</div>
              <p>Do you know how to use figma</p>
            </div>
          </div>
          <div className="info-content">
            {/* Profile Bio Here */}
            <img src={AVATAR} className="info-image" alt="Avatar" />
            <div className="info-info">
              <div>Message from Rishi Kiran</div>
              <p>Do you know how to use figma</p>
            </div>
          </div>
        

          {/* Notification panel content */}
        </div>
      </div>

      <div className="info-section">
        <button className="accordion" onClick={() => setOpenSection("discover")}>
          Discover
        </button>
        {openSection === "discover" &&
          profiles.map((profile) => {
            const isCurrentlyFollowing = followedUsers.includes(profile.userid);
            return (
              <div key={profile._id} className="info-content">
                <img
                  src={profile.imageUrl}
                  className="info-image"
                  alt="User Profile"
                />
                <div className="info-info">
                  <Link to={`/userprofile/${profile.userid}`}>
                    <div>{profile.name}</div>
                  </Link>
                </div>
                <div className="info-select" onClick={() => handleFollowToggle(profile.userid, isCurrentlyFollowing)}>
                  <img
                    src={isCurrentlyFollowing ? isFriend : NotFriend}
                    alt="request friend"
                  />
                </div>
              </div>
            );
          })}
      </div>

      <div className="info-section fixed-bottom">
        {/* Additional info sections */}
      </div>
    </div>
  );
};

export default Infobar;
