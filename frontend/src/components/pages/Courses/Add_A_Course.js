import React,{useState} from 'react'
import RHS from './RHS'
import './Add_A_Course.css'
import './image-2.png'

function Add_A_Course(props) {

  return (

    
    <div className='Add_A_Course'>
      
      {
       props.ShowOrNot? (
        
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
                  <input className='Add_A_Course-Upper-Part-Category' placeholder='Website Development,UI Design'>
                  </input>
           </div>
 
           <div className='Add_A_Course-Upper-Part-Review-text'>
                 <div className='Text-Review'>Review</div>
                  <input className='Add_A_Course-Upper-Part-Review' placeholder='Add A Description'>
                  </input>
           </div>
 
           <div className='Add_A_Course-Upper-Part-Link-text'>
                  <div className='Text-Link'>Link</div>
                  <input className='Add_A_Course-Upper-Part-Link' placeholder='Add Link to Course'>
                  </input>
           </div>
        </div>
 
 
 
 
 
        <div className='Add_A_Course-Lower-Part'>
 
            <div className='Add_A_Course-Lower-Part-Cancel'>
               Cancel
            </div>
 
            <button className='Add_A_Course-Lower-Part-Post'>
               Post
            </button>
 
        </div>
 
     </div>

       ):null
      }
         

    </div>
  )
}

export default Add_A_Course
