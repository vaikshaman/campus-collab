import React,{useState} from 'react'
import './Queries_Main.css'

function Queries_Main(props) {
  return (
    <div className='Queries_Main'>


        <div class="section-container">
            <div class="comment-section">
                <div class="individual-comment"
                   onClick={props.Show_Query}
                >
                    <div className='Queries_Main-Text_with_Skills'>
                         <p className='Queries_Main-RHS-Text-Main'> What are the steps for submitting an app to major app stores like the Apple App Store and Google Play Store? </p>
                         <div class="skill-section">
                        <div class="webd-tag">Web Development</div> <div class="uidesign-tag">UI Design</div><div class="appd-tag">App Development</div>
                    </div>
                    </div>
                    <div class="interaction-section">
                        <div class = "likes-interacted">187</div>
                        <div class="comments-interacted"> 7 258 </div>
                        <div class="posted-when"> Posted by Shashwat Sharma 6 hrs ago </div>
                    </div>
                </div>

                
                <div class="individual-comment"
                   onClick={props.Show_Query}
                >
                    <div className='Queries_Main-Text_with_Skills'>
                         <p className='Queries_Main-RHS-Text-Main'> What are the steps for submitting an app to major app stores like the Apple App Store and Google Play Store? </p>
                         <div class="skill-section">
                        <div class="webd-tag">Web Development</div> <div class="uidesign-tag">UI Design</div><div class="appd-tag">App Development</div>
                    </div>
                    </div>
                    <div class="interaction-section">
                        <div class = "likes-interacted">187</div>
                        <div class="comments-interacted"> 7 258 </div>
                        <div class="posted-when"> Posted by Shashwat Sharma 6 hrs ago </div>
                    </div>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Queries_Main
