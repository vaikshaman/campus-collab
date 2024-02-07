import React from 'react'
import './AskQuery.css'

function AskQuery(props) {

    // const Post =() =>{
    //     props.Show_Open_Query_Main
    // }

  return (
    <div className='boss'>
        <div className='ques'>
            <div className='q'>
                Question
                <textarea className='type-ques'
                    placeholder='How can I ensure my app complies with legal regulations, such as GDPR or COPPA, regarding user data privacy? Also How do I handle app localization and language support efficiently?'
                >

                </textarea>
            </div>
            <div className='description'>
                Description
                <textarea className='desp' placeholder='Add a Description'></textarea>
            </div>
        </div>
        <div className='cancel'>
            <button className='can'
              onClick={props.ShowMain}
            >Cancel</button>
            <button className='post'>Post</button>
        </div>
    </div>
  )
}

export default AskQuery;