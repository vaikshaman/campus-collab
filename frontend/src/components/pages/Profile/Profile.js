import React from 'react'
import Sidebar from './Sidebar'
import Navbar from '../../header/Navbar'
import YourProjects from './YourProjects'


const Profile = () => {
  return (
    <div>
        <Navbar />
        <div className='Main'>
            <Sidebar/>
            <YourProjects/>
        </div>
    </div>
  )
}

export default Profile