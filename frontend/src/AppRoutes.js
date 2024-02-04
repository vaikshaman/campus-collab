import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import EditProfile from '../src/components/pages/Profile/EditProfile';
import Login from '../src/auth/azureRegisteration';
import Project from './components/pages/Project/Project';
import Infobar from './components/pages/Home/Infobar';
import About from './components/pages/AboutUs/About';
import Profile from './components/pages/Profile/Profile';
import AskQuery from './components/pages/Query/AskQuery';
import Courses from './components/pages/Courses/Courses';
import Home from './components/pages/Home/Home';

const AppRoutes = () => {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Askquery" element={<AskQuery/>}/>
                <Route path='/Courses' element={<Courses/>}/>
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Infobar" element={<Infobar />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
