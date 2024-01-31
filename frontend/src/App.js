import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Sidebar from './components/pages/Profile/Sidebar';
import AzureAuth from '../src/auth/azureRegisteration';
import Profile from './components/pages/Profile/Profile';
import Home from './components/pages/Home/Home';
import EditProfile from './components/pages/Profile/EditProfile';

function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <AzureAuth /> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      <EditProfile/>
    </div>
  );
}

export default App;