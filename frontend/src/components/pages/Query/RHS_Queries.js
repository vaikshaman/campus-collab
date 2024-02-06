import React,{useState} from 'react'
import './RHS_Queries.css'

function RHS_Queries(props) {

  const [ShowCourses_Queries,setShowCourses_Queries]=useState(true)

  const [ShowMyCourses_Queries,setShowMyCourses_Queries]=useState(true)

  const AddCourseClicked_Queries = () => {
      setShowCourses_Queries(!ShowCourses_Queries)
  }

  return (
    <div className='RHS_Queries'>
        <div className='RHS_Queries-Biggest-Container'>

          <div className='RHS_Queries-Add-Courses'>
                 <div className='RHS_Queries-Add-Courses-Ask-Question'>Ask Question</div>
                 <button className='RHS_Queries-Add-Courses-Ask-Question-Add-Button'
                   onClick={props.ShowOrNotAnswer_Queries}
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M13.75 16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75V16.25Z" fill="black"/>
                    </svg>
                 </button>
          </div>


          {/* {
            ShowCourses? (

             <div className='RHS-Ask-Questions-Pop-Up'>

             </div>

            ):null
          }
       */}

          
          {
            ShowMyCourses_Queries ? (
              
  
              <div className='RHS_Queries-My-Courses'>

             <div className='RHS_Queries-My-Courses-Upper-Part'>

                <button className='RHS_Queries-Add-Courses-My-Courses-Arrow'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="30" viewBox="0 0 14 30" fill="none">
                      <path d="M2 27L12 16L2 6" stroke="#656565"/>
                   </svg>
                </button>

                <div className='RHS_Queries-My-Courses-Text'>My Queries</div>

                <div className='RHS_Queries-My-Courses-Text-View-All'>View All</div>

             </div>

             <div className='RHS_Queries-My-Courses-Content'>



                <div className='RHS_Queries-My-Courses-Content-Main'>
                    <div className='RHS_Queries-My-Courses-Content-Text'>
                    What are the best practices for optimizing app performance across different mobile devices and operating systems?
                    </div>
                    <div className='RHS_Queries-My-Courses-Content-Text-Below-Part'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-LHS'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Circle-Img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          < circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                        </svg>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Club-Name'>
                         Coding Club,IITG
                      </div>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Date'>
                          1 Aug    {/*..............Variable Date that we get from Backend*/}
                      </div>
                    </div>
                </div>



                <div className='RHS_Queries-My-Courses-Content-Main'>
                    <div className='RHS_Queries-My-Courses-Content-Text'>
                        Foundations of Web Development: Understanding HTML and CSS Fundamentals
                    </div>
                    <div className='RHS_Queries-My-Courses-Content-Text-Below-Part'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-LHS'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Circle-Img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          < circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                        </svg>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Club-Name'>
                         Coding Club,IITG
                      </div>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Date'>
                          1 Aug    {/*..............Variable Date that we get from Backend*/}
                      </div>
                    </div>
                </div>



                <div className='RHS_Queries-My-Courses-Content-Main'>
                    <div className='RHS_Queries-My-Courses-Content-Text'>
                        Foundations of Web Development: Understanding HTML and CSS Fundamentals
                    </div>
                    <div className='RHS_Queries-My-Courses-Content-Text-Below-Part'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-LHS'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Circle-Img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          < circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                        </svg>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Club-Name'>
                         Coding Club,IITG
                      </div>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Date'>
                          1 Aug    {/*..............Variable Date that we get from Backend*/}
                      </div>
                    </div>
                </div>



                <div className='RHS_Queries-My-Courses-Content-Main'>
                    <div className='RHS_Queries-My-Courses-Content-Text'>
                        Foundations of Web Development: Understanding HTML and CSS Fundamentals
                    </div>
                    <div className='RHS_Queries-My-Courses-Content-Text-Below-Part'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-LHS'>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Circle-Img'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          < circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                        </svg>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Club-Name'>
                         Coding Club,IITG
                      </div>
                      </div>
                      <div className='RHS_Queries-My-Courses-Content-Text-Below-Part-Date'>
                          1 Aug    {/*..............Variable Date that we get from Backend*/}
                      </div>
                    </div>
                </div>



             </div>
             
          </div>


            ) : null
          }


        </div>
    </div>
  )
}

export default RHS_Queries
