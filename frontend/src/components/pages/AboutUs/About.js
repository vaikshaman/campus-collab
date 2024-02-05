import React from "react"
import { useEffect,useRef } from "react";
import Nav_About from "./Nav_About"
import './About.css';
import abtwow from "../../assets/abt-wow.png";
import abtimg1 from "../../assets/abt-img1.png";
import abtimg21 from "../../assets/image10.png";
import abtimg3 from "../../assets/abt-img3.png";

const About =()=>{

    // Use the useRef hook to create a reference to the animated div
    const animatedDivRef = useRef(null);
  
    // Use the useEffect hook to set up the Intersection Observer
    useEffect(() => {
      const options = {
        threshold: 0.5, // Trigger when 50% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      if (animatedDivRef.current) {
        observer.observe(animatedDivRef.current);
      }
  
      // Clean up the observer on component unmount
      return () => {
        observer.disconnect();
      };
    }, []);
    
        return (

          <div className="About_Main">

             <Nav_About />

          </div>
          
        );
      
}
export default About;