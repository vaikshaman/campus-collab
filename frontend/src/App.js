import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Sidebar from './components/pages/Profile/Sidebar';
import AzureAuth from '../src/auth/azureRegisteration';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Profile/>
      {/* <AzureAuth /> */}
      {/* <Home/> */}
      {/* <Footer/> */}
=======
      {/* <Profile/> */}
      <AzureAuth />
>>>>>>> 562d702c0c6ab6151788af8f3cd758945940fcb8
    </div>
  );
}

export default App;