import React, { useState, useEffect } from "react";
import "./EditProfile.css";

function EditProfile() {
  const [Data, setData] = useState({
    userid: "",
    age: "",
    name: "",
    email: "",
    institute: "",
    branch: "",
    course: "",
    skill: "",
    experience: "",
    tool: "",
    level: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...Data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Data);
    try {
      const response = await fetch("http://localhost:8080/api/profileModel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });

      if (!response.ok) {
        throw new Error("Failed to post data to backend");
      }

      console.log("Data posted to backend successfully");
    } catch (error) {
      console.error("Error posting data to backend:", error);
    }
  };

  const [skill, setSkill] = useState(JSON.parse(localStorage.getItem("skills")) || []);
  const [inputSkill, setInputSkill] = useState('');

  const addskill = (e) => {
    if (Data.skill.trim() === '') {
      window.alert('Add skill first!');
    } else {
      const newSkill = {
        id: skill.length,
        name: Data.skill,
        // You can add more project details here
      };
      setSkill([...skill, newSkill]);
      setInputSkill(''); // Reset the input after adding the skill
    }
  };
  const removeSkill = (id) => {
    const updatedSkills = skill.filter((s) => s.id !== id);
    setSkill(updatedSkills);
  };

  useEffect(() => {
    // Save skill data to localStorage whenever it changes
    localStorage.setItem("skills", JSON.stringify(skill));
  }, [skill]);

  return (
    <div className="EditProfile">
      <form onSubmit={handleSubmit}>
        <div className="text-title">
          <h1>EDIT PROFILE</h1>
          <button type="submit">Save</button>
        </div>

        <div className="main-box">
          <div className="left-box">
            <div className="details">DETAILS</div>
            <div className="photo">
              <img src="" alt="" />
            </div>

            <div className="userid">
              USERID
              <input
                type="text"
                id="userid"
                placeholder="make unique"
                name="userid"
                value={Data.userid}
                onChange={handleInput}
              />
            </div>
            <div className="name">
              NAME
              <input
                type="text"
                id="name"
                placeholder="Rishi Kiran"
                name="name"
                value={Data.name}
                onChange={handleInput}
              />
            </div>
            <div className="age">
              AGE
              <input
                type="text"
                id="age"
                placeholder="18"
                name="age"
                value={Data.age}
                onChange={handleInput}
              />
            </div>
            <div className="course">
              COURSE
              <input
                type="text"
                id="course"
                placeholder="Btech"
                name="course"
                value={Data.course}
                onChange={handleInput}
              />
            </div>
            <div className="branch">
              BRANCH
              <input
                type="text"
                id="branch"
                placeholder="ECE"
                name="branch"
                value={Data.branch}
                onChange={handleInput}
              />
            </div>
            <div className="interest">
              INTEREST
              <input
                type="text"
                id="interest"
                placeholder="Web Development, Design, Robotics"
                name="interest"
                value={Data.interest}
                onChange={handleInput}
              />
              {/* <label for="interest" type="text" id="interest" placeholder='Web Development, Design, Robotics' name="interest" value={Data.interest} onChange={handleInput}>Interests</label>
                <select id="interest" name="intererst">
                  <option value=""></option>
                </select> */}
            </div>
            <div className="institute">
              INSTITUTE
              <input
              placeholder="IIT Guwahati"
                type="text"
                id="institute"
                name="institute"
                value={Data.institute}
                onChange={handleInput}
                />
            </div>
            <div className="email">
              EMAIL
              <input
                placeholder="example@iitg.ac.in"
                type="text"
                id="email"
                name="email"
                value={Data.email}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="right-box">
            <div className="expertise">EXPERTISE</div>
            <div className="skill">
              SKILL
              <input
              placeholder="Name of skill"
                type="text"
                id="skill"
                name="skill"
                value={Data.skill}
                onChange={handleInput}
              />
            </div>
            <div className="level">
              LEVEL
              <input
                type="text"
                id="level"
                name="level"
                value={Data.level}
                onChange={handleInput}
              />
            </div>
            <div className="experience">
              EXPERIENCE
              <textarea
                type="text"
                id="experience"
                name="experience"
                value={Data.experience}
                onChange={handleInput}
                placeholder="add some experience"
              />
            </div>
            <div className="tool">
              TOOL
              <input
                type="text"
                id="tool"
                name="tool"
                value={Data.tool}
                onChange={handleInput}
              />
            </div>

            <button onClick={addskill}>Add Skill</button>

            <div className="skills-add">
              <div className="added">Added Skills :</div>
              <div className="skill-container">
        {skill.map((s) => (
          <div key={s.id} className="skill-card">
            <button className="skill-butt" onClick={() => removeSkill(s.id)}>{s.name}</button>
            {/* More project details can go here */}
          </div>
        ))}
      </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
