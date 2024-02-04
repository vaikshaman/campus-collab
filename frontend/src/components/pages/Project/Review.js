import React from 'react'
import './Review.css'

function Review() {
  return (
    <div>
        <div className='heading'>
            Project Heading
            <p className='update-btn'>Completed</p>
        </div>

        <div className='section'>
            <div className='user-info'>
                <div className='user-user'>
                    <div className='user-name'>
                        Owner
                        <div className='my-name'>
                            <img src=""></img>
                            <div className='final-name'>
                                <p className='p1'>Rishi Kiran</p>
                                <p className='p2'>134 projects - 3 following</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-proj'>
                        <div className='category'>
                            Category 
                            <div className='cat-names'>
                                <div className='badge1'>Web Development</div>
                                <div className='badge2'>App Development</div>
                            </div>
                        </div>
                        <div className='tools-used'>
                            Tools Used 
                            <p>Figma, React.js, VS Code, NodeJs</p>
                        </div>
                    </div>
                </div>
                <button className='edit-me'>
                    Edit Profile
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Review;