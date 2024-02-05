import React,{useState} from 'react'
import Navbar from '../../header/Navbar'
import AskQuery from './AskQuery'
import Top3 from '../Courses/Top3'
import RHS_Queries from './RHS_Queries'
import Queries_Main from './Queries_Main'
import './Queries.css'

function Queries() {

  const [ShowPopUp_Queries,setShowPopUp_Queries] = useState(true)

  const PopUp_Queries=() => {
      setShowPopUp_Queries(!ShowPopUp_Queries)
  }

  return (


    <div>
       <Navbar />

       <div className='Queriess'>

    {
              ShowPopUp_Queries ? (

                <div className='Queries_Main'>
                <div className='Top3AndAddCourse_Queries'>
                <Top3 />
                <Queries_Main /> 
             </div>

             <div className='RHS_Queries_Main'>
                <RHS_Queries 
                   ShowOrNot_Queries={ShowPopUp_Queries}
                   ShowOrNotAnswer_Queries={PopUp_Queries}
                />
             </div>
             </div>

              ):(

                <div className='Back_Queries'>

              <div className='RHS_Queries_Main'>
                <RHS_Queries 
                   ShowOrNot_Queries={ShowPopUp_Queries}
                   ShowOrNotAnswer_Queries={PopUp_Queries}
                />
              </div>
                  
                  <div className='AskQuery_Queries'>
                  <AskQuery
                  ShowOrNot_Queries={!ShowPopUp_Queries}
                  ShowOrNotAnswer_Queries={PopUp_Queries}
                  />
                  </div>
                </div>
              )
            }

    </div>
    </div>

    
  )
}

export default Queries;