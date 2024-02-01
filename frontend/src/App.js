import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Sidebar from './components/pages/Profile/Sidebar';
import AzureAuth from '../src/auth/azureRegisteration';
import Profile from './components/pages/Profile/Profile';
import AppRoutes from './AppRoutes';
import Home from './components/pages/Home/Home'
import Courses from './components/pages/Courses/Courses'

function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <AzureAuth />      */}
      {/* <Home /> */}
      {/* <Courses/> */}
    </div>
  );
}

export default App;