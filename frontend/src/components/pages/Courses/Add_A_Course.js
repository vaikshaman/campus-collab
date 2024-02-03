import React,{useState} from 'react'
import RHS from './RHS'
import './Add_A_Course.css'
import './image-2.png'

function Add_A_Course() {
  return (
    <div className='Add_A_Course'>
      
     <div className='Add_A_Course-Biggest-Container'>

       <div className='Add_A_Course-Upper-Part'>
          <div className='Add_A_Course-Upper-Part-Course-Name'>
              
              <div className='Add_A_Course-Upper-Part-ThumbNail'>
                  <img src='./image-2.png'>

                  </img>
                  Edit ThumbNail Images
              </div>

              <div className='Add_A_Course-Upper-Part-Write-Course-Name-text'>
                  <div className='Text-Course-Name'>
                      Course-Name
                  </div>
                  <input className='Add_A_Course-Upper-Part-Write-Course-Name'>
                  </input>
              </div>

          </div>

          <div className='Add_A_Course-Upper-Part-Category-text'>
                <div className='Text-Category'>
                Category
                </div>
                 <input className='Add_A_Course-Upper-Part-Category'>
                 </input>
          </div>

          <div className='Add_A_Course-Upper-Part-Review-text'>
                <div className='Text-Review'>Review</div>
                 <input className='Add_A_Course-Upper-Part-Review'>
                 </input>
          </div>

          <div className='Add_A_Course-Upper-Part-Link-text'>
                 <div className='Text-Link'>Link</div>
                 <input className='Add_A_Course-Upper-Part-Link'>
                 </input>
          </div>
       </div>





       <div className='Add_A_Course-Lower-Part'>

           <div className='Add_A_Course-Lower-Part-Cancel'>
              Cancel
           </div>

           <div className='Add_A_Course-Lower-Part-Post'>
              Post
           </div>

       </div>

    </div>    

    </div>
  )
}

export default Add_A_Course
