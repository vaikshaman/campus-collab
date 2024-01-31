import React, { useState } from 'react';
import './EditProfile.css';

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
    level: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...Data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Data);
    try {
      const response = await fetch('http://localhost:8080/api/profileModel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to post data to backend');
      }
  
      console.log('Data posted to backend successfully');
    } catch (error) {
      console.error('Error posting data to backend:', error);
    }
  };
  
  return (
    <div className='EditProfile'>
      <form onSubmit={handleSubmit}>
        <h1>EDITPROFILE</h1>
        <div className="details">DETAILS
          <div className="photo"><img src="" alt="" /></div>

          <div className="userid">USERID
            <input type="text" id="userid" name="userid" value={Data.userid} onChange={handleInput}/>
          </div>
          <div className="name">NAME
            <input type="text" id="name" name="name" value={Data.name} onChange={handleInput}/>
          </div>
          <div className="age">AGE
            <input type="text" id="age" name="age" value={Data.age} onChange={handleInput}/>
          </div>
          <div className="course">COURSE
            <input type="text" id="course" name="course" value={Data.course} onChange={handleInput}/>
          </div>
          <div className="branch">BRANCH
            <input type="text" id="branch" name="branch" value={Data.branch} onChange={handleInput}/>
          </div>
          <div className="interest">INTEREST
            <input type="text" id="interest" name="interest" value={Data.interest} onChange={handleInput}/>
          </div>
          <div className="institute">INSTITUTE
            <input type="text" id="institute" name="institute" value={Data.institute} onChange={handleInput} />
          </div>
          <div className="email">EMAIL
            <input type="text" id="email" name="email" value={Data.email} onChange={handleInput}/>
          </div>
        </div>
        <div className="expertise">EXPERTISE
          <div className="skill">SKILL
            <input type="text" id="skill" name="skill" value={Data.skill} onChange={handleInput}/>
          </div>
          <div className="level">LEVEL
            <input type="text" id="level" name="level" value={Data.level} onChange={handleInput}/>
          </div>
          <div className="experience">EXPERIENCE
            <input type="text" id="experience" name="experience" value={Data.experience} onChange={handleInput} />
          </div>
          <div className="tool">TOOL
            <input type="text" id="tool" name="tool" value={Data.tool} onChange={handleInput}/>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
