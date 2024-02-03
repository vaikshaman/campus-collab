import React, { useState, useEffect } from 'react';
import Navbar from '../../header/Navbar';
import "./Project.css"


const Project = () => {
  const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    // Retrieve stored input fields from localStorage on component mount
    const storedInputFields = JSON.parse(localStorage.getItem('inputFields'));
    if (storedInputFields) {
      setInputFields(storedInputFields);
    }
  }, []);

  const addInputField = (type) => {
    const newInputField = { type };
    setInputFields((prevFields) => [...prevFields, newInputField]);
  };

  useEffect(() => {
    // Store input fields to localStorage whenever inputFields state changes
    localStorage.setItem('inputFields', JSON.stringify(inputFields));
  }, [inputFields]);

  return (
    <div>
        
        
        <div className='project-main'>
        <Navbar/>
            <div className='content-shown'>
                <form>
                    {inputFields.map((field, index) => (
                    <div key={index}>
                        <input type="text" className={`project-${field.type}`} placeholder={`Enter ${field.type} here`} />
                    </div>
                    ))}
                </form>
            </div>

            <div className='add-box'>
                <div className='add-content'>
                    Add Content
                    <div className='add-btns'>
                        <button className='main-btn' onClick={() => addInputField('heading')}>Add Heading</button>
                        <button className='main-btn' onClick={() => addInputField('subheading')}>Add Subheading</button>
                        <button className='main-btn' onClick={() => addInputField('description')}>Add Description</button>
                        <button className='main-btn' onClick={() => addInputField('caption')}>Add Caption</button>
                        <button className='main-btn' onClick={() => addInputField('image')}>Attach Image</button>
                        <button className='main-btn' onClick={() => addInputField('pdf')}>Attach PDF</button>
                        <button className='main-btn' onClick={() => addInputField('link')}>Add Link</button>
                        <button className='main-btn' onClick={() => addInputField('code-block')}>Code Block</button>
                        {/* Add more buttons for other types as needed */}
                    </div>
                </div>

                <div className='confirm-content'>
                    <button className='remove-btn'>Discard</button>
                    <button className='continue-btn'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;
