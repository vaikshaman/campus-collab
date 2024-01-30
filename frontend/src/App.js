import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import AzureAuth from '../src/auth/azureRegisteration';
import Profile from './components/pages/Profile/Profile';
import Infobar from './components/pages/Home/Infobar';
import Home from './components/pages/Home/Home';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Profile/>
      {/* <AzureAuth /> */}
      {/* <Home/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;