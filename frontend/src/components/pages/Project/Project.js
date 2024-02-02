import { useState } from "react";
import React from "react";

const Project=()=>{
return(
    <div className="container">
        <div className="Project-desc">
        </div>
            <div className="project-img">
                <img src="" alt="" />
            </div>
            <div className="Project-code">

            </div>
            <div className="Project-post">
            <div className="Project-completed">

            </div>
            <div className="Project-reviews">
                <input type="text" />
                <div className="Project-comments">

                <div className='confirm-content'>
                    <button className='remove-btn'>Discard</button>
                    <button className='continue-btn'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;
