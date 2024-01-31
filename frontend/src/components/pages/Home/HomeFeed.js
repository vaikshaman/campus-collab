import React from 'react'
import './HomeFeed.css'

function HomeFeed() {
  return (
    <div>
        <div className="biggest-container">
            <div className="container-1">
              <div className="item-container-1">Relevant</div>
              <div className="item-container-1">Latest</div>
              <div className="item-container-1">Following</div>
              <div className="item-container-1  filter">
                  {/* <img></img> .......................find and put image here*/}
                  Filter
                </div>
            </div>

            <div className="biggest-box">
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
              <div className="box">box</div>
            </div>
        </div>
    </div>
  )
}

export default HomeFeed