import express from "express";
import multer from "multer";
import Profile from "../models/profileModel.js";
import Expertise from "../models/profileModel.js";
import LoginData from "../models/login.js";
import cors from "cors";
import { useNavigate } from "react-router-dom";
import Project from "../models/Project.js";
import CommunityPosts from "../models/communityPost.js";
import mongoose from "mongoose";
import coursePosts from "../models/coursePosts.js";
import notification from "../models/notificationModel.js";
import Comment from "../models/Projectcomments.js";
import Likes from "../models/projectlike.js";
import Message from "../models/Message.js";
import Follow from '../models/Profilefollow.js';

// import upload from "../utils/upload.js";

const router = express.Router();

//API FOR LOGIN
// POST endpoint to store login data
router.post('/api/loginData', async (req, res) => {
  try {
    const loginData = req.body;

    // Check if the login data already exists
    const existingLoginData = await LoginData.findOne({ loginResponse: loginData });

    if (existingLoginData) {
      return res.status(400).json({ message: 'Login data already exists' });
    }

    // Create a new document using the LoginData model
    const newLoginData = new LoginData({ loginResponse: loginData });

    // Save the document to the MongoDB collection
    await newLoginData.save();

    res.status(201).json({ message: 'Login data saved successfully' });
  } catch (error) {
    console.error('Error saving login data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/api/getlogin', async (req, res) => {
  try {
    // Retrieve all login data from the MongoDB collection
    const loginData = await LoginData.find();
    
    res.status(200).json(loginData);
  } catch (error) {
    console.error('Error retrieving login data:', error);
    res.status(500).send('Internal server error');
  }
});

//Project upload api


// END API FOR UPLOAD PROJECT

//API FOR FETCHING PROJECT DETAIL IN PROJECTDETAIL PAGE
router.get('/api/Project/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    // console.log('Project ID:', projectId); // Log the projectId for debugging
    // Query the database for project data based on the projectId
    const project = await Project.find({ projectId: projectId });
    // console.log(project);
    if (!project) {
      return res.status(404).json({ status: 'error', message: 'Project not found' });
    }
    res.status(200).json({ status: 'success', data: project });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch project' });
  }
});
// API FOR GETTING PROJECT DETAILS IN FRONTEN PROFILE PAGE
router.get('/api/fetchProject/:email', async (req, res) => {
  try {
    const userEmail = req.params.email;
    const status = req.query.status; // Get the status query parameter from the request URL

    let projects;
    if (status === 'ongoing' || status === 'completed') {
      // Query the database for projects data associated with the user's email and matching status
      projects = await Project.find({ email: userEmail, 'projectDetails.status': status });
     
    } else {
      // If no status query parameter is provided or it's invalid, fetch all projects for the user
      projects = await Project.find({ email: userEmail });
    }

    // console.log(projects);
    res.status(200).json({ status: 'success', data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch projects' });
  }
});

// API FOR GETTING PROJECT DETAILS IN FRONTEN home PAGE
router.get('/api/fetchProject', async (req, res) => {
  try {
    
    // Query the database for projects data associated with the user's email
    const projects = await Project.find();
    res.status(200).json({ status: 'success', data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch projects' });
  }
});

//fetching project commment

router.get('/api/comments/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    // console.log(projectId);
    const comments = await Comment.find({ projectId: projectId });
    // console.log(comments);
    res.json({ status: 'success', comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch comments' });
  }
});



router.post('/api/comments', async (req, res) => {
  try {
    const { projectId, userName, image, content } = req.body; // Destructure projectId, userName, image, and content from the request body
    const comment = new Comment({ projectId, userName, image, content }); // Create a new Comment document
    await comment.save(); // Save the comment to the database
    res.json({ status: 'success', comment }); // Respond with success status and the saved comment
  } catch (error) {
    console.error('Error posting comment:', error);
    res.status(500).json({ status: 'error', message: 'Failed to post comment' }); // Respond with error status and message
  }
});

///////commentend

//api fro project owner detail in vewi project
router.get('/api/ownerprofile/:email', async (req, res) => {
  const email = req.params.email;
  console.log(email);

  try {
    const profile = await Profile.findOne({ email : email });
    // console.log(profile);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.json({ profile });
  } catch (error) {
    console.error("Error fetching profile details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


//likes
// Route to handle liking a project
router.post('/api/projectslike/:projectId/:userId/like', async (req, res) => {
  const { projectId, userId } = req.params;
  console.log(projectId);

  try {
      // Check if the user has already liked the project
      const existingLike = await Likes.findOne({ projectId, userId });

      if (existingLike) {
          // If like exists, delete it (unlike)
          await Likes.findOneAndDelete({ projectId, userId });
          res.status(200).json({ message: 'Unlike successful' });
      } else {
          // If like doesn't exist, create a new like
          const newLike = new Likes({ projectId, userId });
          await newLike.save();
          res.status(200).json({ message: 'Like successful' });
      }
  } catch (error) {
      console.error('Error liking/unliking project:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Route to get total likes for each project
router.get('/api/projectslike/likes', async (req, res) => {
  try {
      const likes = await Likes.aggregate([
          { $group: { _id: '$projectId', totalLikes: { $sum: 1 } } }
      ]);

      res.status(200).json(likes);
  } catch (error) {
      console.error('Error fetching total likes:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


//likes end



//CollaborTION

//collab end

router.get("/api/addProject", async (req, res) => {
  const projectid = req.query.projectId;
  const project = await Project.find({ projectId: projectid });
  res.json(project);
});

router.post("/api/profileModel", async (req, res) => {
  
  try {
    const profileData = req.body;
    

    const newProfile = new Profile(profileData);

    await newProfile.save();
    // console.log('Received profile data:', profileData);
    res.status(200).json(newProfile);
  } catch (error) {
    console.error("Error saving profile data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//API FOR GETTING EDITPRIFILE IN SIDEBAR
router.get('/api/profile/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    // Query the database for the profile data associated with the userId
    const profile = await Profile.findOne({ userid: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//api for profile in infobar
router.get('/api/profiles', async (req, res) => {
  try {
    // Query the database to retrieve all profile data
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



//FOllowingstart

router.post('/api/follow', async (req, res) => {
  const { follower_username, following_username } = req.body;
  const follow = new Follow({ follower_username, following_username });
  try {
    await follow.save();
    res.status(201).send('Followed successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/api/unfollow', async (req, res) => {
  const { follower_username, following_username } = req.body;
  try {
    await Follow.findOneAndDelete({ follower_username, following_username });
    res.status(200).send('Unfollowed successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Add a new route to fetch followed users for a specific user with the current user's ID
router.get('/api/followedUsers/:userId/:currentUserId', async (req, res) => {
  const { userId, currentUserId } = req.params;
  try {
    const followedUsers = await Follow.find({ follower_username: currentUserId });
    const isFollowing = followedUsers.some(user => user.following_username === userId);
    res.status(200).json({ followedUsers, isFollowing });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

//follow end



//API FOR UPLOADING PROJECT
router.post("/api/saveProject", async (req, res) => {
  try {
    // Extract fields from req.body
    const { projectId, email, name, images, inputFields, projectDetails } = req.body;

    // Create a new project with the extracted data
    const newProject = new Project({
      projectId,
      email,
      name,
      images,
      inputFields,
      projectDetails,
    });

    // Save the new project
    await newProject.save();

    res.status(200).json({ message: "Project data saved successfully" });
  } catch (error) {
    console.error("Error saving project data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// END API FOR UPLOAD PROJECT

// API FOR GETTING PROJECT DETAILS IN FRONTEN
router.get("/api/addProject", async (req, res) => {
  try {
    Project.find({}, "projectId inputFields image").then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

router.post("/api/myQueryPosts", async (req, res) => {
  const username = req.body.userEmail;
  console.log(username);
  const sort = { _id: -1 };
  const sorted = await mongoose
    .model("CommunityPosts")
    .find({ authorEmail: username, postType: "QUERY" })
    .sort(sort);
  res.json(sorted);
});

router.get("/api/sortQueryPostsByLatest", async (req, res) => {
  //console.log(req);
  const sort = { _id: -1 };
  const sorted = await CommunityPosts.find({ postType: "QUERY" }).sort(sort);
  // console.log(sorted);
  res.json(sorted);
  //res.sendStatus(200);
});

router.get("/api/sortCoursePostsByLatest", async (req, res) => {
  //console.log(req);
  const sort = { _id: -1 };
  const sorted = await mongoose.model("coursePosts").find().sort(sort);
  console.log(sorted);
  res.json(sorted);
  //res.sendStatus(200);
});

router.post("/api/addPost", async (req, res) => {
  // const obj = {
  //   authorEmail : req.body.authorEmail,
  //   authorName : req.body.authorName,
  //   question : req.body.question,
  //   description : req.body.description,
  //   comments : []
  // }

  // const obj = {
  //   authorEmail : "g.kancharla@iitg.ac.in",
  //   authorName : "KANCHARLA ABHIJITH GOUD",
  //   question : "HELLO WORLD",
  //   description : "HELLO WORLD",
  //   postType : "QUERY",
  //   comments : []
  // }
  //console.log(req.body);
  // const obj = {
  //   authorEmail : "pratyush.r@iitg.ac.in",
  //   authorName : "PRATYUSH R",
  //   question : "HELLO WORLD",
  //   description : "HELLO WORLD",
  //   postType : "COURSE",
  //   comments : []
  // }
  const obj = {
    authorEmail: req.body.authorEmail,
    authorName: req.body.authorName,
    question: req.body.question,
    description: req.body.description,
    postType: req.body.postType,
    comments: [],
  };
  const resu = await mongoose.model("CommunityPosts").insertMany(obj);
  console.log(resu);
  res.sendStatus(200);
});

router.get("/api/getdetailquerybyid", async (req, res) => {
  const qid = req.query.id;
  console.log(qid);
  const resu = await mongoose.model("CommunityPosts").findOne({ _id: qid });
  console.log(resu);
  res.json(resu);
});

router.post("/api/updatePost", async (req, res) => {
  const pid = req.body.pid;
  const comment = req.body.comment;
  const commenterEmail = req.body.commenterEmail;
  const commenterName = req.body.commenterName;
  const post = await mongoose.model("CommunityPosts").findById(pid);

  post.comments.push({
    commenterEmail,
    commenterName,
    comment,
  });
  console.log(post);
  await post.save();
  res.sendStatus(200);
});

router.post("/api/myCoursePosts", async (req, res) => {
  const username = req.body.userEmail;
  console.log(username);
  const sort = { _id: -1 };
  const sorted = await mongoose
    .model("coursePosts")
    .find({ authorEmail: username })
    .sort(sort);
  res.json(sorted);
});

router.post("/api/addCourse", async (req, res) => {
  const resu = await mongoose.model("coursePosts").insertMany({
    ...req.body,
    comments: [],
  });
  console.log(resu);
  res.sendStatus(200);
});

//for fetching course
router.get("/api/getdetailcoursebyid", async (req, res) => {
  const qid = req.query.id;
  console.log(qid);
  const resu = await mongoose.model("coursePosts").findOne({ _id: qid });
  console.log(resu);
  res.json(resu);
});

//for posting comment in course page
router.post("/api/updateCoursePost", async (req, res) => {
  const pid = req.body.pid;
  const comment = req.body.comment;
  const commenterEmail = req.body.commenterEmail;
  const commenterName = req.body.commenterName;
  const post = await mongoose.model("coursePosts").findById(pid);

  post.comments.push({
    commenterEmail,
    commenterName,
    comment,
  });
  console.log(post);
  await post.save();
  res.sendStatus(200);
});

router.get("/api/search", async (req, res) => {
  try {
    // console.log("yaha to aa rhe hai");
    const searchTerm = req.query.target;
    const regex = new RegExp(searchTerm, "i");
    const results = await Profile.find({
      $or: [
        { email: regex },
        { name: regex },
        // Add more fields to search if needed
      ],
    }).limit(5);

    if (results.length > 0) {
      res
        .status(200)
        .send({ success: true, message: "Details", data: results });
    } else {
      res.status(200).send({ success: true, message: "Not found" });
    }
  } catch (err) {
    console.error("Error searching profiles:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get('/api/searchProjects', async(req, res) => {
  try {
      const searchTerm = req.body.search;
      const regex = new RegExp(searchTerm, 'i');
      const results = await Project.find({
        $or: [
          { "projectData.inputFields": { $elemMatch: { type: "heading", value: regex } } },
          { "projectData.inputFields": { $elemMatch: { type: "subheading", value: regex } } },
          // Add more fields to search if needed
        ],
      }).limit(5);

      if (results.length > 0) {
          res.status(200).send({ success: true, message: "Projects Found", data: results });
      } else {
          res.status(200).send({ success: true, message: "No projects found" });
      }
  } catch (err) {
      console.error('Error searching projects:', err);
      res.status(500).send({ message: 'Internal Server Error'});
  }
});

router.post("/api/sendNotification", async (req, res) => {
  try {
    const { senderName, senderEmail, receiverEmail, projectId } = req.body;

    const project = await Project.findOne({ projectId });

    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    const message = `${senderName} wants to collaborate with you on your project ${projectId}`;

    const newNotification = new Notification({
      senderName,
      senderEmail,
      receiverEmail,
      project,
      message,
    });

    await newNotification.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Notification sent successfully",
        data: newNotification,
      });
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/* import multer from 'multer'; // Import multer here
import express from "express";
import Profile from '../models/profileModel.js';
import Expertise from '../models/profileModel.js';
import LoginData from '../models/login.js';
import CommunityPosts from "../models/communityPost.js";
import cors from 'cors';
import mongoose from "mongoose";
const router = express.Router();
import Project from '../models/Project.js';


router.post('/api/login', async (req, res) => {
  try {
    
    const loginResponse = req.body;
    const loginData = new LoginData({ loginResponse });
    await loginData.save();
    
    res.status(201).send('Login data stored successfully');
  } catch (error) {
    console.error('Error storing login data:', error);
    res.status(500).send('Internal server error');
  }
});
router.post('/api/profileModel', async (req, res) => {
  try {
    const profileData = req.body;
    
    const newProfile = new Profile(profileData);

    await newProfile.save();
    // console.log('Received profile data:', profileData);
    res.status(200).json(newProfile);
    
    
  } catch (error) {
    console.error('Error saving profile data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
  router.get('/getprofile',async(req,res)=>{
    const userId = req.query.userid;
    console.log(userId);
    const profile=await Profile.find({userid:userId})
    res.json(profile);
    // console.log(profile);
  })

router.get('/api/sortByLatest',async (req,res) => {
  // console.log(req);
  res.sendStatus(200);
})

// router.get('/api/addProject',async (req,res) => {
//   // console.log(req);
//   res.sendStatus(200);
// });

router.get('/api/reqForCollab',async (req,res) => {
  // console.log(req);
  res.sendStatus(200);
})

router.post('/api/addPost',async (req,res) => {
    

  const obj = {
      authorEmail : req.body.authorEmail,
      authorName : req.body.authorName,
      question : req.body.question,
      description : req.body.description,
      postType : req.body.postType,
      comments : []
    }
  const resu = await mongoose.model("CommunityPosts").insertMany(obj);
  // console.log(resu);
  res.sendStatus(200);
})

router.post('/api/myQueryPosts',async (req,res) => {
  // console.log(req.body);
  const sort = {'_id': -1}
  const sorted = await CommunityPosts.find({authorEmail : 'pratyush.r@iitg.ac.in',postType: 'QUERY'}).sort(sort);
  res.json(sorted);
})


router.get('/api/sortQueryPostsByLatest',async (req,res) => {
  //console.log(req);
  const sort = {'_id': -1}
  const sorted = await CommunityPosts.find({postType: 'QUERY'}).sort(sort)
  // console.log(sorted);
  res.json(sorted);
  //res.sendStatus(200);
})

router.get('/api/sortCoursePostsByLatest',async (req,res) => {
  const sort = {'_id': -1}
  const sorted = await CommunityPosts.find({postType: 'COURSE'}).sort(sort)
  // console.log(sorted);
  res.send(sorted);
//    res.sendStatus(200);
})

router.get('/api/myCoursePosts',async (req,res) => {
  // console.log(req);
  const sort = {'_id': -1}
  const sorted = await CommunityPosts.find({authorEmail : 'pratyush.r@iitg.ac.in',postType:'COURSE'}).sort(sort);
  res.send(sorted);
  
})

// Reply to posts... Not fully complete.
router.post('/api/postComment',async (req,res) => {
  const instance = await mongoose.model("CommunityPosts").findById('65beac082017d0576aad6af3');
  
  instance.comments.push({
    commentId : 2,
    commenterEmail  : "g.kancharla@iitg.ac.in",
    commenterName : "KANCHARLA ABHIJITH GOUD",
    content : "How are you?"
  })
  await instance.save();
  // console.log("SUCCESS");
  res.sendStatus(200);
})





const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  }
});
const upload = multer({ storage: storage });

const uploadImage = async (request, response) => {
  const fileObj = {
      path: request.file.path,
      name: request.file.originalname,
  }
  
  try {
      // const file = await File.create(fileObj);
      console.log(fileObj);
      response.status(200).json({ path: http://localhost:8080/${fileObj.path}});
  } catch (error) {
      console.error(error.message);
      response.status(500).json({ error: error.message });
  }
}

const getImage = async (request, response) => {
  try {   
      const file = await File.findById(request.params.fileId);
      
      file.downloadCount++;

      await file.save();

      response.download(file.path, file.name);
  } catch (error) {
      console.error(error.message);
      response.status(500).json({ msg: error.message });
  }
}

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);






//API FOR UPLOADING PROJECT
router.post('/api/saveProject', upload.single('image'), async (req, res) => {
  try {
   // const imageName = req.file.filename;
    const inputFields = req.body;

    
   // await Project.create({ image: imageName });

    
    const newProject = new Project({
      ...inputFields,
    //  image: imageName, 
    });

   
    await newProject.save();

    
    console.log('Received inputFields:', inputFields);
    res.status(200).json({ message: 'Project data saved successfully' });
  } catch (error) {
    console.error('Error saving project data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// END API FOR UPLOAD PROJECT


// API FOR GETTING PROJECT DETAILS IN FRONTEN
router.get('/api/addProject', async (req, res) => {
  try {
    Project.find({}, 'projectId inputFields image').then(data => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});
export default router;
*/
export default router;
