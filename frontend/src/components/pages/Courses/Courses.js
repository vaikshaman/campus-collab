import React,{useState} from 'react'
import Top3 from './Top3'
import AddCourse from './AddCourses'
import RHS from './RHS'
import Navbar from '../../header/Navbar'
import './Courses.css'
import Add_A_Course from './Add_A_Course'
import './image-2.png'

function Courses() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='Coursess'>
            {/* <Top3 /> */}
            {/* <AddCourse />  */}
            {/* <RHS /> */}
            <Add_A_Course />
        </div>
    </div>
  )
}

export default Courses;