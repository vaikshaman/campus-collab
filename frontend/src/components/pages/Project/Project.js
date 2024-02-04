import React, { useState, useEffect } from 'react';
import Navbar from '../../header/Navbar';
import "./Project.css"
import Review from './Review';

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

//   function inputType(field){
//     if(field.type == "heading" || "subheading"){
//         <input type="text" className={`project-${field.type}`} placeholder={`Enter ${field.type} here`} />
//     }else if(field.typr == "description"){
//         <input type="textarea" className={`project-${field.type}`} placeholder={`Enter ${field.type} here`} />
//     }
//   }



const inputType = (field) => {
    const adjustHeight = (e) => {
      e.target.style.height = 'inherit'; // Reset height to recalculate
      e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
    };
  
    if (field.type === 'heading' || field.type === 'subheading' || field.type=== 'link') {
      return (
        <input
          type="text"
          className={`project-${field.type}`}
          placeholder={`Enter ${field.type} here`}
        />
      );
    } else if (field.type === 'description'|| field.type === 'code-block') {
      return (
        <textarea
          className={`project-${field.type}`}
          placeholder={`Enter ${field.type} here`}
          onInput={adjustHeight}
        />
      );
    } else if (field.type == 'image'){
        return (
            <input type='file' className={`project-${field.type}`}
            placeholder={`Add Image`}
            />
        );
    
    } else if (field.type == 'pdf'){
        return (
            <input type='file' className={`project-${field.type}`}
            placeholder={`Add pdf`}
            />
        );
    }
  };
  
  return (
    <div>
        <Navbar/>
        
        <div className='project-main'>

            <div className='content-shown'>
                <form>
                    {inputFields.map((field, index) => (
                    <div key={index}>
                        {/* <input type="text" className={`project-${field.type}`} placeholder={`Enter ${field.type} here`} /> */}
                        {inputType(field)}
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

        <Review
            
        />
    </div>
  );
};

 export default Project;
