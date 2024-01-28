import React, { useState } from 'react';
import './Sidebar.css'; // Make sure to include your CSS file

const Sidebar = () => {
  // State to track which accordion section is open
  const [openSection, setOpenSection] = useState("profile");

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <button className="accordion" onClick={() => toggleSection('profile')}>
          Profile
        </button>
        <div className={`panel ${openSection === 'profile' ? 'open' : 'instant-close'}`}>
          <div className="profile-content">
            {/* Profile Bio Here */}
            <div class="profile-image"></div>
            <div class="profile-info">
              <h2>Rishi Kiran</h2>
              <p>154 followers • 3 projects</p>
              <div class="profile-tags">
                <span>Web Development</span>
                <span>UI/UX</span>
              </div>
              <div class="education">
                <strong>B.E (H-Tech)</strong>
                <p>Indian Institute of Information Technology, Guwahati</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <button className="accordion" onClick={() => toggleSection('expertise')}>
          Expertise
        </button>
        <div className={`panel ${openSection === 'expertise' ? 'open' : 'instant-close'}`}>
          {/* Expertise Content Here */}
          <div class="profile-image"></div>
            <div class="profile-info">
              <h2>Rishi Kiran</h2>
              <p>154 followers • 3 projects</p>
              <div class="profile-tags">
                <span>Web Development</span>
                <span>UI/UX</span>
              </div>
              <div class="education">
                <strong>B.E (H-Tech)</strong>
                <p>Indian Institute of Information Technology, Guwahati</p>
              </div>
            </div>
        </div>
      </div>

      <div className="profile-section">
        <button className="accordion" onClick={() => toggleSection('courses')}>
          Courses
        </button>
        <div className={`panel ${openSection === 'courses' ? 'open' : 'instant-close'}`}>
          {/* Courses Content Here */}
          <div class="profile-image"></div>
            <div class="profile-info">
              <h2>Rishi Kiran</h2>
              <p>154 followers • 3 projects</p>
              <div class="profile-tags">
                <span>Web Development</span>
                <span>UI/UX</span>
              </div>
              <div class="education">
                <strong>B.E (H-Tech)</strong>
                <p>Indian Institute of Information Technology, Guwahati</p>
              </div>
            </div>
        </div>
      </div>

      <button className="contact-button">Get in Touch</button>
    </div>
  );
};

export default Sidebar;
