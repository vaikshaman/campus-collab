import React,{useState} from 'react'
import RHS from './RHS'
import './Add_A_Course.css'
import img from '../../assets/image-2.png'

function Add_A_Course(props) {

  const [courseName,setCourseName] = useState('')
  const [category,setCategory] = useState('');
  const [review, setReview] = useState('');
  const [link,setLink] = useState('');

  return (

    
    <div className='Add_A_Course'>
      
      {
       props.ShowOrNot? (
        
        <div className='Add_A_Course-Biggest-Container'>

        <div className='Add_A_Course-Upper-Part'>
           <div className='Add_A_Course-Upper-Part-Course-Name'>
               
               <div className='Add_A_Course-Upper-Part-ThumbNail'>
                   <img src={img}>
 
                   </img>
                   Edit ThumbNail Images
               </div>
 
               <div className='Add_A_Course-Upper-Part-Write-Course-Name-text'>
                   <div className='Text-Course-Name'>
                       Course-Name
                   </div>
                   <textarea className='Add_A_Course-Upper-Part-Write-Course-Name'>
                   </textarea>
               </div>
 
           </div>
 
           <div className='Add_A_Course-Upper-Part-Category-text'>
                 <div className='Text-Category'>
                 Category
                 </div>
                  <textarea className='Add_A_Course-Upper-Part-Category' placeholder='Website Development,UI Design'>
                  </textarea>
           </div>
 
           <div className='Add_A_Course-Upper-Part-Review-text'>
                 <div className='Text-Review'>Review</div>
                  <textarea className='Add_A_Course-Upper-Part-Review' placeholder='Add A Description'>
                  </textarea>
           </div>
 
           <div className='Add_A_Course-Upper-Part-Link-text'>
                  <div className='Text-Link'>Link</div>
                  <textarea className='Add_A_Course-Upper-Part-Link' placeholder='Add Link to Course'>
                  </textarea>
           </div>
        </div>
 
 
 
 
 
        <div className='Add_A_Course-Lower-Part'>
 
            <button className='Add_A_Course-Lower-Part-Cancel'
              onClick={props.Ha}
            >
               Cancel
            </button>
 
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
