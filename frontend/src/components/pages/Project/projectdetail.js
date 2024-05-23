import React, { useState, useEffect } from 'react';
import Navbar from '../../header/Navbar';
import './PostedProject.css';
import axios from 'axios';
import { useParams } from "react-router-dom"; // Import useParams to extract parameters
import './Review.css';
import Review from './Review';
import thumbsUp from "../../assets/thumbs-up.png";

const Project = () => {
    const { projectId } = useParams(); // Extract project ID from URL
    const [projects, setProjects] = useState([]); // Initialize projects state as an empty array
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const[profiles,setProfiles]=useState([]);
  const storedUserData = localStorage.getItem('user'); // Retrieve the stored user data

    const user = JSON.parse(storedUserData); // Parse the stored user data from JSON to JavaScript object
  

  useEffect(() => {
    axios.get(`http://localhost:8050/api/profile/${user.uid}`)
      .then(Profile => {

        console.log(Profile);
        setProfiles(Profile.data);
      })
      .catch(err => console.log(err));
  }, []);

    useEffect(() => {
        // Fetch project details using project ID
        const fetchProjectDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8050/api/Project/${projectId}`);
                if (response.data.status === "success") {
                    setProjects(response.data.data); // Set projects state to the array of project data
                    setComments(response.data.data.comments || []); // Set comments state from fetched project data
                } else {
                    console.error("Failed to fetch project details:", response.data.message);
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        fetchProjectDetail();
    }, [projectId]);

    useEffect(() => {
        const fetchComments = async () => {
          try {
            const response = await axios.get(`http://localhost:8050/api/comments/${projectId}`);
            setComments(response.data.comments);
          } catch (error) {
            console.error('Error fetching comments:', error);
          }
        };
        fetchComments();
      }, [projectId]);

    const handleCommentSubmit = async () => {
        try {
            
          const response = await axios.post('http://localhost:8050/api/comments', {
            projectId,
            userName: profiles.name, // Replace with actual username or fetch from authentication
            image: profiles.imageUrl,
            content: newComment,
          });
          console.log(response);
          if (response.data.status === 'success') {
            setComments([...comments, response.data.comment]);
            setNewComment('');
          } else {
            console.error('Failed to post comment:', response.data.message);
          }
        } catch (error) {
          console.error('Error posting comment:', error);
        }
      };




      //LIKES
      
        const [liked, setLiked] = useState(false);
        const [totalLikes, setTotalLikes] = useState(0);
    
        const handleLikeClick = async () => {
            try {
                const response = await fetch(`http://localhost:8050/api/projectslike/${projectId}/${user.uid}/like`, { method: 'POST' });
                if (response.ok) {
                    setLiked(!liked);
                    setTotalLikes(prevTotalLikes => liked ? prevTotalLikes - 1 : prevTotalLikes + 1);
                } else {
                    console.error('Failed to update like status');
                }
            } catch (error) {
                console.error('Error updating like status:', error);
            }
        };
      //LIKES END

      //Collaboration 

      const [text, setText] = useState('');
  const [receiverId, setReceiverId] = useState('');

  const handleCollaboration = async () => {
    try {
      const senderName = profiles.name; // Assuming profiles contains sender information
  
      let projectName = ''; // Initialize projectName
  
      // Check if projects array is not empty and projects[0].name is defined
      if (projects.length > 0 && projects[0].name) {
        projectName = projects[0].name; // Assign projectName if conditions are met
      } else {
        console.error('Project name is not available.');
        return; // Exit the function if project name is not available
      }
  
      const messageText = `Message from ${senderName} regarding project ${projectName}: ${text}`;
  
      const requestBody = {
        text: messageText,
        senderId: senderName, // Assuming senderName is the sender's name
        receiverId: projectName // Assign receiverId using projectName
      };
  
      console.log(requestBody);
  
      // Send POST request to the server
      await axios.post('http://localhost:8050/api/messages', requestBody);
      alert('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };
  
  
  
  
  

    return (
        <div>
            <Navbar />
            <div className="project-main-pp">
                <div className="content-shown-pp">
                    <form>
                        <div className='Id-div-pp'>
                            <input
                                type="text"
                                className="project-projectId"
                                placeholder="Enter Project ID (Compulsory)"
                                value={projectId}
                                readOnly // Make the input read-only
                            />
                        </div>
                        <h1>Project Detail</h1>
                        {projects && projects.length > 0 && (
                            <div>
                                <h2>Project ID: {projects[0].projectId}</h2>
                                <p>Email: {projects[0].email}</p>
                                <p>Images: <img src={projects[0].images} alt="Project Image" /></p>
                                <h3>Input Fields:</h3>
                                <ul>
                                    {projects[0].inputFields.map((field, index) => (
                                        <li key={index}>Type: {field.type}, Value: {field.value}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </form>
                </div>
            </div>



            <div>
        <div className='heading'>
            Project Heading
            <p className='update-btn'>Completed</p>
        </div>

        <div className='section'>
            <div className='user-info'>
                <div className='user-user'>
                    <div className='user-name'>
                        Owner
                        {projects.length > 0 &&
    <div className='my-name'>
        <img src=""></img>
        <div className='final-name'>
            <p className='p1'>{projects[0].name}</p>
            <p className='p2'>134 projects - 3 following</p>
        </div>
    </div>
}

                    </div>
                    <div className='about-proj'>
                        <div className='category'>
                            Category 
                            <div className='cat-names'>
                                <div className='badge1'>Web Development</div>
                                <div className='badge2'>App Development</div>
                            </div>
                        </div>
                        <div className='tools-used'>
                            Tools Used 
                            <p>Figma, React.js, VS Code, NodeJs</p>
                        </div>
                    </div>
                </div>
                <button className='edit-me'>
                    Edit Project
                </button>
            </div>

            <div className='right-review'>
            <div className='right-review'>
            <div className='right-head'>
                <p>Reviews & Feedback</p>
                <button onClick={handleLikeClick}>{liked ? 'Unlike' : 'Like'} {totalLikes}</button>
            </div>
        </div>
       
        {/* <button onClick={() => handleCollaborationRequest(projectId)}>Request Collaboration</button> */}



        <button onClick={handleCollaboration}>Collaborate</button>

               
                        
                
            </div>
            
        </div>
    </div>





         

            <div className='right-content'>
    <div className='post-div'>
        <input 
            type='text' 
            placeholder='What are your comments on this project?' 
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
        />
        <button className='post-btn' onClick={handleCommentSubmit}>POST</button>
    </div>
    <div className='posted-reviews'>
        {comments.map(comment => (
            <div className='one-post' key={comment._id}>
<img  className='poster-pic' src={comment.image}></img>
             
                <div className='poster-content'>
                    <div className='div-1'>
                        <div className='d1'>{comment.userName}</div>
                        <div className='d2'>&nbsp;. {comment.createdAt}</div>
                    </div>
                    <div className='the-comment'>{comment.content}</div>
                </div>
            </div>
        ))}
    </div>
</div>
<Review/>
        </div>
        

    );
};

export default Project;
