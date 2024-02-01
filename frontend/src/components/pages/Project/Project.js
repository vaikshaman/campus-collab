import { useState } from "react";
import React from "react";

const Project=()=>{
return(
    <div className="container">
         <div className="Project-heading">

            <div className="Project-heading-btn">Add Heading</div>
         </div>
            
        <div className="Project-desc">
        <div className="Project-desc-btn">Add Description</div>
        </div>
        <div className="Project-subhead">
            <div className="Project-subhead-btn">Add Sub Heading</div>
        </div>
            <div className="Project-img">
                <img src="" alt="" />
                <div className="Project-img-btn">Add Image</div>
            </div>
            
            <div className="Project-link">
                <div className="Project-link-btn">Add Link</div>
            </div>
           <div className="Project-pdf">
            <div className="Project-pdf-btn">Add Pdf</div>
           </div>
           <div className="Project-code">
                <div className="Project-code-btn">Add Code</div>
            </div>
            
            <div className="Project-post">
            <div className="Project-completed">

            </div>
            <div className="Project-reviews">
                
                <div className="Project-comments">

                </div>
            </div>
            </div>
            
        
    </div>
);
};
export default Project;