import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Sidebar from './components/pages/Profile/Sidebar';
import AzureAuth from '../src/auth/azureRegisteration';
import Profile from './components/pages/Profile/Profile';
import AppRoutes from './AppRoutes';
import Project from './components/pages/Project/Project';
import AskQuery from './components/pages/Query/AskQuery';

function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <AzureAuth /> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <EditProfile /> */}
      {/* <Project/> */}
      {/* <Profile/> */}
      {/* <Navbar/> */}
      {/* <AppRoutes/> */}
      <AskQuery/>
      
      <AppRoutes/>
    </div>
  );
}

export default App;