// import React, { useEffect, useState } from 'react';
// import './Sidebar.css'; // Make sure to include your CSS file

// const Sidebar = () => {
//   // State to track which accordion section is open
//   const [openSection, setOpenSection] = useState("profile");

//   const toggleSection = (section) => {
//     if (openSection === section) {
//       setOpenSection(null);
//     } else {
//       setOpenSection(section);
//     }
//   };
//   return (
//     <div className="sidebar">
//       <div className="profile-section">
//         <button className="accordion" onClick={() => toggleSection('profile')}>
//           Profile
//         </button>
//         <div className={`panel ${openSection === 'profile' ? 'open' : 'instant-close'}`}>
//           <div className="profile-content">
//             {/* Profile Bio Here */}
//             <div class="profile-image"></div>
//             <div class="profile-info">
//               <h2>Rishi Kiran</h2>
//               <p>154 followers • 3 projects</p>
//               <div class="profile-tags">
//                 <span>Web Development</span>
//                 <span>UI/UX</span>
//               </div>
//               <div class="education">
//                 <strong>B.E (H-Tech)</strong>
//                 <p>Indian Institute of Information Technology, Guwahati</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="profile-section">
//         <button className="accordion" onClick={() => toggleSection('expertise')}>
//           Expertise
//         </button>
//         <div className={`panel ${openSection === 'expertise' ? 'open' : 'instant-close'}`}>
//           {/* Expertise Content Here */}
//           <div class="profile-image"></div>
//             <div class="profile-info">
//               <h2>Rishi Kiran</h2>
//               <p>154 followers • 3 projects</p>
//               <div class="profile-tags">
//                 <span>Web Development</span>
//                 <span>UI/UX</span>
//               </div>
//               <div class="education">
//                 <strong>B.E (H-Tech)</strong>
//                 <p>Indian Institute of Information Technology, Guwahati</p>
//               </div>
//             </div>
//         </div>
//       </div>

//       <div className="profile-section">
//         <button className="accordion" onClick={() => toggleSection('courses')}>
//           Courses
//         </button>
//         <div className={`panel ${openSection === 'courses' ? 'open' : 'instant-close'}`}>
//           {/* Courses Content Here */}
//           <div class="profile-image"></div>
//             <div class="profile-info">
//               <h2>Rishi Kiran</h2>
//               <p>154 followers • 3 projects</p>
//               <div class="profile-tags">
//                 <span>Web Development</span>
//                 <span>UI/UX</span>
//               </div>
//               <div class="education">
//                 <strong>B.E (H-Tech)</strong>
//                 <p>Indian Institute of Information Technology, Guwahati</p>
//               </div>
//             </div>
//         </div>
//       </div>

//       <button className="contact-button">Get in Touch</button>
//     </div>
//   );
// };

// export default Sidebar;


import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./Sidebar.css";
import iconParkOutline from "../../assets/graduation-hat.png";
import mingcuteSchoolLine from "../../assets/school-pic.png";
import arrow from '../../assets/side-arrow.png';
import YourProject from "./YourProject";


const Sidebar = ({
  property1,
  className,
  iconParkOutline = "/img/icon-park-outline-degree-hat.svg",
  mingcuteSchoolLine = "/img/mingcute-school-line-2.svg",
  vectorClassName,
  frameClassName,
  frameFrameClassName,
  frameClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  frameClassName1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "section-1",
  });

  return (
    <div className={`profile-nav ${className}`}>
      <div
        className={`frame-2 ${state.property1}`}
        onClick={() => {
          dispatch("click_195");
        }}
      >
        <div className="frame-3">
          {state.property1 === "section-2" && <div className="text-wrapper-3">Profile</div>}

          <img className="img-2" alt="Frame out" src={arrow} />
          {state.property1 === "section-1" && <div className="text-wrapper-3">Profile</div>}
        </div>
        <div className="frame-4">
          <div className="frame-5">
            <div className="ellipse" />
            <div className="frame-6">
              <div className="text-wrapper-4">Rishi Kiran</div>
              <p className="element-followers">
                <span className="span">134 followers </span>
                <span className="text-wrapper-5">· </span>
                <span className="span">3 projects </span>
              </p>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="badge">
                <div className="text">Web Development</div>
              </div>
              <div className="badge-2">
                <div className="text">UI Design</div>
              </div>
            </div>
            <div className="frame-9">
              <div className="frame-10">
                <img
                  className="icon-park-outline"
                  alt="Icon park outline"
                  src={state.property1 === "section-2" ? "/img/frame-17-6.png" : iconParkOutline}
                />
                <div className="text-wrapper-6">EEE (B.Tech)</div>
              </div>
              <div className="frame-11">
                <img
                  className="mingcute-school-line"
                  alt="Mingcute school line"
                  src={state.property1 === "section-2" ? "/img/frame-17-6.png" : mingcuteSchoolLine}
                />
                <p className="indian-institute-of">
                  Indian Institute of Information Technology,
                  <br />
                  Guwahati
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="vector"
          alt="Vector"
          src={state.property1 === "section-2" ? "/img/frame-17-6.png" : "/img/vector-1-2.svg"}
        />
        <p className="text-wrapper-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div
        className={`frame-12 property-1-4-${state.property1}`}
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className="frame-13">
          {state.property1 === "section-2" && <img className="img-2" alt="Frame in" src="/img/frame-10-3.svg" />}

          <div className="text-wrapper-3">Expertise</div>
          {state.property1 === "section-1" && <img className="img-2" alt="Frame out" src="/img/frame-10-3.svg" />}
        </div>
        <img
          className={`vector-2 ${vectorClassName}`}
          alt="Vector"
          src={state.property1 === "section-2" ? "/img/vector-1-2.svg" : "/img/frame-17-6.png"}
        />
        <div className="frame-14">
          <div className="frame-15">
            <div className="frame-16">
              <div className="rectangle-2" />
            </div>
            <div className="text-wrapper-8">Backend Dev</div>
            <img
              className={`frame-17 ${frameClassName}`}
              alt="Frame"
              src={state.property1 === "section-2" ? "/img/frame-17-7.svg" : "/img/frame-17-6.png"}
            />
          </div>
          <YourProject
            frame={state.property1 === "section-2" ? "/img/frame-17-7.svg" : "/img/frame-17-6.png"}
            frameClassName={frameFrameClassName}
            property1="closed"
          />
          <div className="frame-18">
            <div className="frame-19">
              <div className="rectangle-2" />
            </div>
            <div className="text-wrapper-8">Frontend Dev</div>
            <img
              className={`frame-20 ${frameClassNameOverride}`}
              alt="Frame"
              src={state.property1 === "section-2" ? "/img/frame-17-7.svg" : "/img/frame-17-6.png"}
            />
          </div>
          <div className="frame-18">
            <div className="frame-21">
              <div className="rectangle-2" />
            </div>
            <div className="text-wrapper-8">Product Management</div>
            <img
              className={`frame-22 ${imgClassName}`}
              alt="Frame"
              src={state.property1 === "section-2" ? "/img/frame-17-7.svg" : "/img/frame-17-6.png"}
            />
          </div>
          <div className="frame-18">
            <div className="frame-23">
              <div className="rectangle-2" />
            </div>
            <div className="text-wrapper-8">Aero-modelling</div>
            <img
              className={`frame-24 ${imgClassNameOverride}`}
              alt="Frame"
              src={state.property1 === "section-2" ? "/img/frame-17-7.svg" : "/img/frame-17-6.png"}
            />
          </div>
          <div className="frame-18">
            <div className="frame-25">
              <div className="rectangle-2" />
            </div>
            <div className="text-wrapper-8">Web Development</div>
            <img
              className={`frame-26 ${frameClassName1}`}
              alt="Frame"
              src={state.property1 === "section-2" ? "/img/frame-17-7.svg" : "/img/frame-17-6.png"}
            />
          </div>
        </div>
      </div>
      <div className="frame-27">
        <div className="text-wrapper-9">Courses</div>
        <img className="img-2" alt="Frame" src="/img/frame-10-3.svg" />
      </div>
      <div className="frame-28">
        <div className="text-wrapper-10">Get In Touch</div>
        <img className="img-2" alt="Frame" src="/img/frame-10-2.svg" />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "section-2",
      };

    case "click_195":
      return {
        ...state,
        property1: "section-1",
      };
  }

  return state;
}

Sidebar.propTypes = {
  property1: PropTypes.oneOf(["section-1", "section-2"]),
  iconParkOutline: PropTypes.string,
  mingcuteSchoolLine: PropTypes.string,
};

export default Sidebar;