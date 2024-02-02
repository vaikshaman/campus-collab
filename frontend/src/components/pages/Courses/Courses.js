import React from 'react'
import Top3 from './Top3'
import AddCourse from './AddCourse'
import RHS from './RHS'
import Navbar from '../../header/Navbar'
import './Courses.css'

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='Coursess'>
            <Top3 />
            {/* <AddCourse /> */}
            <RHS />
        </div>
    </div>
  )
}

export default Home