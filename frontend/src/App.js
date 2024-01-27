




import React, { useState } from 'react';
import './App.css';
import Navbar from './components/header/Navbar'
import { useMsal } from '@azure/msal-react';

function App() {
  const { instance, accounts } = useMsal();
  const [m_strUser, setm_strUser] = useState("");

  
  const handleLogin = async () => {
    try {
      // Check if the user is already logged in
      if (accounts.length === 0) {
        // If not logged in, initiate the login process
        const loginResponse = await instance.loginPopup();
        const username = loginResponse.account?.username;
        setm_strUser(username || "");
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    instance.logout();
    setm_strUser("");
  };

  return (
    
    <div className="App">
        <Navbar/>
    <h1>Welcome to Your App</h1>
    {m_strUser !== "" ? (
      <div>
        <p>User: {m_strUser}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div>
        <p>This is some content on your homepage.</p>
        <button onClick={handleLogin}>Login with Microsoft</button>
      </div>
    )}
  </div>
  
    
  );
}

export default App;
