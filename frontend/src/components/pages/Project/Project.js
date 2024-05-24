import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../header/Navbar';
import './Project.css';
import axios from 'axios';
import ContinueProject from './ContinueProject';
import ImageUpload from './projectimage'; // Import the ImageUpload component
import { signInWithMicrosoft, signOut, auth } from '../../../auth/firebase';
import Review from './Review';
const API_URI = 'http://localhost:8080';

const PopupPage = ({ onClose }) => {
  return (
    <div className='popup-overlay'>
      <div className="popup">
        <ContinueProject
          close= {onClose}
        />
      </div>
    </div>
  );
};

const Project = () => {
  const [user, setUser] = useState(null);
  const [projectId, setProjectId] = useState('');
  const [inputFields, setInputFields] = useState([]);
  const [file, setFile] = useState('');
  const [result, setResult] = useState([]);
  const fileInputRef = useRef();
  const [url, setUrl] = useState('');


  useEffect(() => {
    // Check if image URL exists in browser storage
    const ImageUrl = localStorage.getItem('imageURL');
  
      setUrl(ImageUrl);
    
  }, []);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser); // Update user state
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        // No user is signed in
        setUser(null); // Update user state
        // Remove user data from local storage
        localStorage.removeItem('user');
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        console.log("response is:",response)
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log(response.path)
        setResult(prev => [...prev,response.path]);
      }
    }
    getImage();
  }, [file])

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  const onUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("fileInputRef.current is null or undefined");
    }
  }
  
  // PREVENT FORM LOSS ON RELOAD 
  // const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    // Retrieve stored input fields from localStorage on component mount
    const storedInputFields = JSON.parse(localStorage.getItem('inputFields')) || [];
    setInputFields(storedInputFields);
  }, []);

  // useEffect(() => {
  //   const storedInputFields = JSON.parse(localStorage.getItem('inputFields'));
  //   if (storedInputFields) {
  //     setInputFields(storedInputFields);
  //   }
  // }, []);
  

  const addInputField = (type) => {
    // Check if an image input field already exists
    const imageFieldExists = inputFields.some(field => field.type === 'image');
    
    // If an image input field already exists, prevent adding another one
    if (type === 'image' && imageFieldExists) {
      alert('You can only add one image.');
      return;
    }
  
    if (type === 'image') {
      // Add the ImageUpload component instead of a regular file input
      const newInputField = { type, value: <ImageUpload setFile={setFile} /> };
      setInputFields((prevFields) => [...prevFields, newInputField]);
    } else {
      const newInputField = { type, value: '' };
      setInputFields((prevFields) => [...prevFields, newInputField]);
    }
  };
  

  useEffect(() => {
    localStorage.setItem('inputFields', JSON.stringify(inputFields));
  }, [inputFields]);

  const inputType = (field, index) => {
    const adjustHeight = (e) => {
      e.target.style.height = 'inherit'; // Reset height to recalculate
      e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
    };

    if (field.type === 'heading' || field.type === 'subheading') {
      return (
        <input
          type="text"
          className={`project-${field.type}`}
          placeholder={`Enter ${field.type} here`}
          value={field.value}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      );
    } else if (field.type === 'description' || field.type === 'code-block') {
      return (
        <textarea
          className={`project-${field.type}`}
          placeholder={`Enter ${field.type} here`}
          value={field.value}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onInput={adjustHeight}
        />
      );
    } else if (field.type === 'image' || field.type === 'pdf') {
      return  field.value;
      ;
    }
  };

  const handleInputChange = (index, value) => {
    setInputFields((prevFields) => {
      const updatedFields = prevFields.map((f, i) =>
        i === index ? { ...f, value } : f
      );
      return updatedFields;
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const requestData = {
        projectId: projectId,
        email: user?.email,
        name: user?.displayName,
        images: url,
        inputFields: inputFields,
      };
      console.log(requestData);
  
      const response = await fetch('http://localhost:8050/api/saveProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save project data');
      }
  
      console.log('Project data saved successfully');
      setProjectId('');
      setInputFields([]);
      // You can handle success, for example, redirecting the user or showing a success message
    } catch (error) {
      console.error('Error saving project data:', error);
      // Handle the error, show an error message, etc.
    }
  };
  
  

 
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle the visibility of the pop-up page
  const togglePopup = () => {
    if(projectId.trim() === ""){
      window.alert('Enter Project Id First!');
    }else{
      setIsPopupOpen(!isPopupOpen);

    }
  };

  // TO Rereash on clicking cancel 
  const handleDiscardClick = () => {
    // Show confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to discard your changes?');
    
    // If the user confirmed, call the reset function
    if (isConfirmed) {
      resetToDefault();
    }
  };
  
  const resetToDefault = () => {
    // Reset inputFields state to its initial state
    setInputFields([]);
  
    // Clear the localStorage entry
    localStorage.removeItem('inputFields');
  };



  return (
    <div>
      <Navbar />
      <div className="project-main">
        <div className="content-shown">
          <form onSubmit={handleSubmit}>
            <div className='Id-div'>
              <input
                type="text"
                className="project-projectId"
                placeholder="Enter Project ID (Compulsory)"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
              />
            </div>
            {inputFields.map((field, index) => (
              <div key={index}>{inputType(field, index)}</div>
            ))}
            {/* <button type="submit" className="main-btn">
              Save Project
            </button> */}

            <div className='confirm-content'>
            <button type = "submit" className="continue-btn" onClick={togglePopup}>Continue</button>
            <button className="remove-btn" onClick={handleDiscardClick} >Discard</button>
            </div>
          </form>
        </div>



        <div className="add-box">
          <div className="add-content">
            Add Content
            <div className="add-btns">
              <button className="main-btn" onClick={() => addInputField('heading')}>
                Add Heading
              </button>
              <button className="main-btn" onClick={() => addInputField('subheading')}>
                Add Subheading
              </button>
              <button className="main-btn" onClick={() => addInputField('description')}>
                Add Description
              </button>
              <button className="main-btn" onClick={() => addInputField('image')} >
                Attach Image
              </button>
              <button className="main-btn" onClick={() => addInputField('pdf')}>
                Attach PDF
              </button>
              <button className="main-btn" onClick={() => addInputField('code-block')}>
                Code Block
              </button>
            </div>
          </div>

          {/* <div className="confirm-content">
            <button className="remove-btn">Discard</button>
            <button className="continue-btn">Continue</button>
          </div> */}
          {/* <div>result:{result}</div>
          <img src={result} alt="alt text"/> */}
        </div>
       </div>

              {/* Render the pop-up page conditionally */}
              {isPopupOpen && <PopupPage onClose={togglePopup} />} </div> 
  );
};

export default Project;




