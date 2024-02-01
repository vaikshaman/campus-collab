import React from 'react'
import Top3 from './Top3'
import AddCourse from './AddCourse'
import Navbar from '../../header/Navbar'

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='homer'>
            {/* <Top3 /> */}
            <AddCourse />
        </div>
    </div>
  )
}

export default Home