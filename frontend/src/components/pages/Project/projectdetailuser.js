import React, { useState, useEffect } from "react";
import Navbar from "../../header/Navbar";
import "./projectdetailuser.css";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to extract parameters
import "./Review.css";
import thumbsUp from "../../assets/thumbs-up.png";

const Projectuser = () => {
  const { projectId } = useParams(); // Extract project ID from URL
  const [projects, setProjects] = useState([]); // Initialize projects state as an empty array
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const [profiles, setProfiles] = useState([]);
  const storedUserData = localStorage.getItem("user"); // Retrieve the stored user data

  const user = JSON.parse(storedUserData); // Parse the stored user data from JSON to JavaScript object

  useEffect(() => {
    axios
      .get(`http://localhost:8050/api/profile/${user.uid}`)
      .then((Profile) => {
        console.log(Profile);
        setProfiles(Profile.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Fetch project details using project ID
    const fetchProjectDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8050/api/Project/${projectId}`
        );
        if (response.data.status === "success") {
          setProjects(response.data.data); // Set projects state to the array of project data
          setComments(response.data.data.comments || []); // Set comments state from fetched project data
        } else {
          console.error(
            "Failed to fetch project details:",
            response.data.message
          );
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
        const response = await axios.get(
          `http://localhost:8050/api/comments/${projectId}`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [projectId]);

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8050/api/comments", {
        projectId,
        userName: profiles.name, // Replace with actual username or fetch from authentication
        image: profiles.imageUrl,
        content: newComment,
      });
      console.log(response);
      if (response.data.status === "success") {
        setComments([...comments, response.data.comment]);
        setNewComment("");
      } else {
        console.error("Failed to post comment:", response.data.message);
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  //LIKES

  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8050/api/projectslike/${projectId}/${user.uid}/like`,
        { method: "POST" }
      );
      if (response.ok) {
        setLiked(!liked);
        setTotalLikes((prevTotalLikes) =>
          liked ? prevTotalLikes - 1 : prevTotalLikes + 1
        );
      } else {
        console.error("Failed to update like status");
      }
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };
  //LIKES END

  const renderFieldValue = (field) => {
    // Check if the value of the field is an object
    if (typeof field.value === 'object' && field.value !== null) {
      // If it's an object, stringify it for display
      return JSON.stringify(field.value);
    } else {
      // Otherwise, render the value as is
      return field.value;
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="pdu-project-main-pp">
        <div className="pdu-content-shown-pp">
        <form className="pdu-project-form">
            <div className="pdu-Id-div-pp">
              <input
                type="text"
                className="pdu-project-projectId"
                placeholder="Enter Project ID (Compulsory)"
                value={projectId}
                readOnly // Make the input read-only
              />
            </div>
            <div className="pdu-project-heading">Project Detail</div>
            {projects && projects.length > 0 && (
        <div>
          <h2>Project ID: {projects[0].projectId}</h2>

          <p>Email: {projects[0].email}</p>
          <p>
            Images: <img src={projects[0].images} alt="Project Image" />
          </p>
          <h3>Input Fields:</h3>
          <ul>
            {projects[0].inputFields.map((field, index) => (
              <li key={index}>
                Type: {field.type}, Value: {renderFieldValue(field)}
              </li>
            ))}
          </ul>
        </div>
      )}
          </form>
        </div>
      </div>

      <div className="pdu-review-section">
        <div className="pdu-heading">
          Project Heading
          <p className="pdu-update-btn">Completed</p>
        </div>

        <div className="pdu-section">
          <div className="pdu-user-info">
            <div className="pdu-test">
              <div className="pdu-user-user">
                <div className="pdu-user-name">
                  Owner
                  {projects.length > 0 && (
                    <div className="pdu-my-name">
                      <img src=""></img>
                      <div className="pdu-final-name">
                        <p className="pdu-p1">{projects[0].name}</p>
                        <p className="pdu-p2">134 projects - 3 following</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pdu-about-proj">
                  <div className="pdu-category">
                    Category
                    <div className="pdu-cat-names">
                      <div className="pdu-badge1">Web Development</div>
                      <div className="pdu-badge2">App Development</div>
                    </div>
                  </div>
                  <div className="pdu-tools-used">
                    Tools Used
                    <p>Figma, React.js, VS Code, NodeJs</p>
                  </div>
                </div>
              </div>
              <button className="pdu-edit-me">Edit Project</button>
            </div>
          </div>

          <div className="pdu-right-review">
            <div className="pdu-right-head">
              <p>Reviews & Feedback</p>
              <button onClick={handleLikeClick}>
                {liked ? "Unlike" : "Like"} {totalLikes}
              </button>
            </div>
            <div className="pdu-right-content">
              <div className="pdu-post-div">
                <input
                  type="text"
                  placeholder="What are your comments on this project?"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button className="pdu-post-btn" onClick={handleCommentSubmit}>
                  POST
                </button>
              </div>
              <div className="pdu-posted-reviews">
                {comments.map((comment) => (
                  <div className="pdu-one-post" key={comment._id}>
                    <img className="pdu-poster-pic" src={comment.image}></img>

                    <div className="pdu-poster-content">
                      <div className="pdu-div-1">
                        <div className="pdu-d1">{comment.userName}</div>
                        <div className="pdu-d2">
                          &nbsp;. {comment.createdAt}
                        </div>
                      </div>
                      <div className="pdu-the-comment">{comment.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Review /> */}
    </div>
  );
};

export default Projectuser;
