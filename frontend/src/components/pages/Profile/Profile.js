import React from 'react'
import Sidebar from './Sidebar'
import Navbar from '../../header/Navbar'
import YourProject from './YourProject'
import './Profile.css'


const Profile = () => {
  return (
    <div>
        <Navbar />
        <div className='main'>
            <Sidebar/>
            <YourProject/>
        </div>
    </div>
  )
}

export default Profile;