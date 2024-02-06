import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import EditProfile from '../src/components/pages/Profile/EditProfile';
import Login from '../src/auth/azureRegisteration';
import Project from './components/pages/Project/Project';
import About from './components/pages/AboutUs/About';
import Profile from './components/pages/Profile/Profile';
import Queries from './components/pages/Query/Queries';
import Courses from './components/pages/Courses/Courses';
import Home from './components/pages/Home/Home';
<<<<<<< HEAD
// import Queries from './components/pages/Query/Queries';
// import Courses from './components/pages/Courses/Courses';
=======
>>>>>>> 51ba957807e074fef621d7ed7fe3f306effbfb49

const AppRoutes = () => {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Queries" element={<Queries/>}/>
                <Route path='/Courses' element={<Courses/>}/>
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
