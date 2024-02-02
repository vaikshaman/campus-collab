import express from "express";
import multer from 'multer';
import Profile from '../models/profileModel.js';
import Expertise from '../models/profileModel.js'
import LoginData from '../models/login.js';
import cors from 'cors'; 
const router = express.Router();

//to store photo 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'D:/Kriti_manas_webCollab/backend/models/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.get('/', (req, res) => {
    res.send("Manas website is live");
});

router.post('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.');
});


// router.post("/Profile",async(req,res)=>{
//     try {
//         const { name, email, age, institute, branch,course,interest,userId,skills } = req.body;
//         const profile = new Profile({
//             photo: req.file ? req.file.path : null,
//             name,
//             email,
//             age,
//             institute,
//             branch,
//             interest,
//             userId,
//             course,
//             skills


//         });
//         await profile.save();


//         res.send('Profile created successfully.');
//     } catch (error) {

//         console.error('Error creating profile:', error);
//         res.status(500).send('Internal Server Error');
//     }
// })
  

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
    console.log('Received profile data:', profileData);
    res.status(200).json({ message: 'Profile data received successfully' });
  } catch (error) {
    console.error('Error saving profile data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
  router.get('/getprofile',(req,res)=>{
    
    Profile.find()
    .then(Profile=>res.json(Profile))
    .catch(err=>res.json(err))
    console.log(Profile.find())
  })

router.get('/api/sortByLatest',async (req,res) => {
  console.log(req);
  res.sendStatus(200);
})

router.get('/api/addProject',async (req,res) => {
  console.log(req);
  res.sendStatus(200);
});

router.get('/api/reqForCollab',async (req,res) => {
  console.log(req);
  res.sendStatus(200);
})


export default router;
