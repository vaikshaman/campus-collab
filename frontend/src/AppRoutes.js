import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import EditProfile from '../src/components/pages/Profile/EditProfile';
import Login from '../src/auth/azureRegisteration';
import Project from './components/pages/Project/Project';
import Infobar from './components/pages/Home/Infobar';
import About from './components/pages/AboutUs/About';
import Profile from './components/pages/Profile/Profile';
import AskQuery from './components/pages/Query/AskQuery';

const AppRoutes = () => {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Askquery" element={<AskQuery/>}/>
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Infobar" element={<Infobar />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
