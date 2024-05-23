import React, { useState, useEffect } from "react";
import "./Infobar.css"; // Make sure to include your CSS file
import mapIcon from "../../assets/map-icon.png";
import NotFriend from "../../assets/make-friend.png";
import isFriend from "../../assets/is-friend.png";
import AVATAR from "../../assets/Avatar.jpg"; // Import the avatar image
import axios from "axios";

// const Infobar = () => {
//   // State to track which accordion section is open
//   const [openSection, setOpenSection] = useState("discover");
//   const [users, setUsers] = useState([]);
//   const [friend, setFriend] = useState(false);

//   useEffect(() => {
//     if (openSection === "discover") {
//       fetchUsers();
//     }
//   }, [openSection]);

//   const fetchUsers = async () => {
//     try {
//       // Make a GET request to fetch users from the backend API
//       const response = await axios.get("http://localhost:8050/api/getlogin");
//       if (response.data.status === "success") {
//         // Set the users state with the fetched users data
//         setUsers(response.data.data);
//       } else {
//         console.error("Failed to fetch users:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const toggleSection = (section) => {
//     setOpenSection(section);
//   };

//   const madeFriend = () => {
//     setFriend((prevState) => !prevState);
//   };

//   return (
//     <div className="infobar">
//       <div className="info-section">
//         <button
//           className="accordion"
//           onClick={() => toggleSection("notification")}
//         >
//           Notification
//         </button>
//         <div
//           className={`panel ${
//             openSection === "notification" ? "open" : "instant-close"
//           }`}
//         >
//           <div className="info-content">
//             {/* Profile Bio Here */}
//             <img src={AVATAR} className="info-image" alt="Avatar" />
//             <div className="info-info">
//               <div>Message from Rishi Kiran</div>
//               <p>Do you know how to use figma</p>
//             </div>
//           </div>
//           <div className="info-content">
//             {/* Profile Bio Here */}
//             <img src={AVATAR} className="info-image" alt="Avatar" />
//             <div className="info-info">
//               <div>Message from Rishi Kiran</div>
//               <p>Do you know how to use figma</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="info-section">
//         <button
//           className="accordion"
//           onClick={() => toggleSection("discover")}
//         >
//           Discover
//         </button>
//         {/* Discover panel content */}
//         {openSection === "discover" &&
//           users.map((user) => (
//             <div key={user.id} className="info-content">
//               <img
//                 src={user.profilePhoto}
//                 className="info-image"
//                 alt="User Profile"
//               />
//               <div className="info-info">
//                 <div>{user.name}</div>
//                 <p>
//                   <img src={mapIcon} alt="Map Icon" /> {user.location}
//                 </p>
//               </div>
//               <div className="info-select" onClick={madeFriend}>
//                 <img
//                   src={friend ? isFriend : NotFriend}
//                   alt="request friend"
//                 />
//               </div>
//             </div>
//           ))}
//       </div>

//       <div className="info-section fixed-bottom">
//         {/* Additional info sections */}
//       </div>
//     </div>
//   );
// };

// export default Infobar;


const Infobar = () => {
  // State to track which accordion section is open
  const [openSection, setOpenSection] = useState("discover");
  const [loginData, setLoginData] = useState(null);
  const [friend, setFriend] = useState(false);

  useEffect(() => {
    if (openSection === "discover") {
      fetchLoginData();
    }
  }, [openSection]);

  const fetchLoginData = async () => {
    try {
      // Make a GET request to fetch login data from the backend API
      const response = await axios.get("http://localhost:8050/api/getlogin");
      if (response.data.status === "success") {
        // Set the login data state with the fetched login data
        setLoginData(response.data.data);
      } else {
        console.error("Failed to fetch login data:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching login data:", error);
    }
  };

  const toggleSection = (section) => {
    setOpenSection(section);
  };

  const madeFriend = () => {
    setFriend((prevState) => !prevState);
  };

  return (
    <div className="infobar">
      <div className="info-section">
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
          {/* Notification panel content */}
        </div>
      </div>

      <div className="info-section">
        <button
          className="accordion"
          onClick={() => toggleSection("discover")}
        >
          Discover
        </button>
        {/* Discover panel content */}
        {openSection === "discover" && loginData && (
          <div className="info-content">
            <img
              src={loginData.profilePhoto}
              className="info-image"
              alt="User Profile"
            />
            <div className="info-info">
              <div>{loginData.name}</div>
              <p>
                <img src={mapIcon} alt="Map Icon" /> {loginData.location}
              </p>
            </div>
            <div className="info-select" onClick={madeFriend}>
              <img
                src={friend ? isFriend : NotFriend}
                alt="Request Friend"
              />
            </div>
          </div>
        )}
      </div>

      <div className="info-section fixed-bottom">
        {/* Additional info sections */}
      </div>
    </div>
  );
};

export default Infobar;
