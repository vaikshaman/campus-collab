import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Sidebar from './components/pages/Profile/Sidebar';
import AzureAuth from '../src/auth/azureRegisteration';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      {/*<AzureAuth />*/}
    </div>
  );
}

export default App;