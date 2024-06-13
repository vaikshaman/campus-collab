import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import EditProfile from "../src/components/pages/Profile/EditProfile";

import Project from "./components/pages/Project/Project";
import About from "./components/pages/AboutUs/About";
import Profile from "./components/pages/Profile/Profile";
import Queries from "./components/pages/Query/Queries";
import Courses from "./components/pages/Courses/Courses";
import Home from "./components/pages/Home/Home";
import Test from "./components/pages/Test";
import Open_Queries from "./components/pages/Query/Open_Queries";
import PostedProject from "./components/pages/Project/PostedProject";
import Open_Courses from "./components/pages/Courses/Open_Courses";
import SearchResult from "./components/pages/SearchResult";
import Login from './auth/Login';
import ProjectDetail from "./components/pages/Project/projectdetail";
import Projectuser from "./components/pages/Project/projectdetailuser";
const AppRoutes = (SERVER_URL) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About SERVER_URL = {SERVER_URL}/>} />
        <Route path="/Home" element={<Home SERVER_URL = {SERVER_URL}/>} />
        <Route path="/Login" element={<Login SERVER_URL = {SERVER_URL}/>} />
        <Route path="/userprofile/:userid" element={<Profile SERVER_URL = {SERVER_URL}/>} />
        <Route path="/About" element={<About SERVER_URL = {SERVER_URL}/>} />
        <Route path="/Queries" element={<Queries SERVER_URL = {SERVER_URL}/>} />
        <Route path="/Courses" element={<Courses SERVER_URL = {SERVER_URL}/>} />
        <Route path="/EditProfile" element={<EditProfile SERVER_URL = {SERVER_URL}/>} />
        <Route path="/Project" element={<Project SERVER_URL = {SERVER_URL}/>} />
        <Route path="/PostedProject" element={<PostedProject SERVER_URL = {SERVER_URL}/>} />
        <Route path="/detailquery" element={<Open_Queries SERVER_URL = {SERVER_URL}/>} />
        <Route path="/fullproject" element={<Test SERVER_URL = {SERVER_URL}/>} />
        <Route path="/search" element={<SearchResult SERVER_URL = {SERVER_URL}/>} />
        <Route path="/detailcourse" element={<Open_Courses SERVER_URL = {SERVER_URL}/>} />
        <Route path="/project/:projectId" element={<ProjectDetail SERVER_URL = {SERVER_URL}/>} /> 
        <Route path="/profile/:projectId" element={<Projectuser SERVER_URL = {SERVER_URL}/>} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
