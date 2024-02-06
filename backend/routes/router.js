import express from "express";
import multer from 'multer';
import Profile from '../models/profileModel.js';
import Expertise from '../models/profileModel.js'
import LoginData from '../models/login.js';
import cors from 'cors'; 
import { useNavigate } from 'react-router-dom';
import Project from "../models/Project.js";


// import upload from "../utils/upload.js";


const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  // filename: (req, file, cb) => {
  //   cb(null, Date.now() + '-' + file.originalname);
  // }
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
      response.status(200).json({ path: `http://localhost:8080/${fileObj.path}`});
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