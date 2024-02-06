import React,{useState} from 'react'
import Top3 from './Top3'
import AddCourse from './AddCourses'
import RHS from './RHS'
import Navbar from '../../header/Navbar'
import './Courses.css'
import Add_A_Course from './Add_A_Course'
import './image-2.png'

function Courses() {

  const [ShowPopUp,setShowPopUp] = useState(true)

  const PopUp=() => {
      setShowPopUp(!ShowPopUp)
  }

  return (
    <div>
        <Navbar/>
        <div className='Coursess'>

           

            {
              ShowPopUp ? (

                <div className='Courses_Main'>
                <div className='Top3AndAddCourse'>
                <Top3 />
                <AddCourse /> 
             </div>

             <div className='RHS_Main'>
                <RHS 
                   ShowOrNot={ShowPopUp}
                   ShowOrNotAnswer={PopUp}
                />
             </div>
             </div>

              ):(

                <div>

              <div className='RHS_Main'>
                <RHS 
                   ShowOrNot={ShowPopUp}
                   ShowOrNotAnswer={PopUp}
                />
              </div>

                  <Add_A_Course 
                  ShowOrNot={!ShowPopUp}
                  ShowOrNotAnswer={PopUp}
                  />
                </div>
              )
            }

              

          
            
        </div>
    </div>
  )
}

export default Courses;