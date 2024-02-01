import React, { useState } from "react";
import './Top3.css'

const Top3 = () => {

  const [isopen1, setisopen1] = useState(true);
  const [isopen2, setisopen2] = useState(false);
  const [isopen3, setisopen3] = useState(false);

  const clicked1 = (section) => {
    if (isopen1 === section) {
      // setOpenSection(null);
    } else {
      setisopen1(section);
      setisopen2(false);
      setisopen3(false);
    }
  };

  const clicked2 = (section) => {
    if (isopen2 === section) {
      // setOpenSection(null);
    } else {
      setisopen2(section);
      setisopen1(false);
      setisopen3(false);
    }
  };

  const clicked3 = (section) => {
    if (isopen3 === section) {
      // setOpenSection(null);
    } else {
      setisopen3(section);
      setisopen2(false);
      setisopen1(false);
    }
  };

  return (
    <div>
        <div className="biggest-container">
            <div className="container-1">
              <nav className='Upper_part'>
              <a href="#" className='gugu item-container-1'>
                <div
                    className={`${
                      isopen1 === true ? "yesopen" : "notopen"
                    }`}

                    onClick={() => clicked1(true)}
                >Relevant</div>
              </a>
              <a href="#" className='gugu item-container-1'>
                <div
                    className={`${
                      isopen2 === true ? "yesopen" : "notopen"
                    }`}

                    onClick={() => clicked2(true)}
                >Latest</div>
              </a>
              <a href="#" className='gugu item-container-1'>
                <div
                   className={`${
                    isopen3 === true ? "yesopen" : "notopen"
                  }`}

                  onClick={() => clicked3(true)}
                >Following</div>
              </a>

              <div class="animation start-home"></div>
              </nav>
              <div className="item-container-1  filter">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7.50002 15V9.75L2.21252 3H15.7875L10.5 9.75V15H7.50002Z" fill="#929292"/>
                 </svg>
                  <div className="gaga">Filter</div>
              </div>
            </div>
            {/* <hr className="bar"></hr> */}
            

            <div className="biggest-box">

              <div>
              <div className="box">
                <div className="greybox"></div>
                <div className="sideinfo">
                    <div> Web Security Fundamentals: Safeguarding Your Web Applications Against Common Threats</div>
                    <div className="clubsss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                    </svg>
                    <div className="club">Coding Club,IITG</div>
                    </div>
                    <div className="skills">
                        <div className="new1">Web devolopment</div>
                        <div className="new2">UI/UX</div>
                    </div>
                </div>
              </div>
              </div>
              
              <div>
              <div className="box">
                <div className="greybox"></div>
                <div className="sideinfo">
                <div> Web Security Fundamentals: Safeguarding Your Web Applications Against Common Threats</div>
                    <div className="clubsss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                    </svg>
                    <div className="club">Coding Club,IITG</div>
                    </div>
                    <div className="skills">
                        <div className="new1">Web devolopment</div>
                        <div className="new2">UI/UX</div>
                    </div>
                </div>
              </div>
              </div>

              <div>
              <div className="box">
                <div className="greybox"></div>
                <div className="sideinfo">
                <div> Web Security Fundamentals: Safeguarding Your Web Applications Against Common Threats</div>
                    <div className="clubsss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                    </svg>
                    <div className="club">Coding Club,IITG</div>
                    </div>
                    <div className="skills">
                        <div className="new1">Web devolopment</div>
                        <div className="new2">UI/UX</div>
                    </div>
                </div>
              </div>
              </div>

              <div>
              <div className="box">
                <div className="greybox"></div>
                <div className="sideinfo">
                <div> Web Security Fundamentals: Safeguarding Your Web Applications Against Common Threats</div>
                    <div className="clubsss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                    </svg>
                    <div className="club">Coding Club,IITG</div>
                    </div>
                    <div className="skills">
                        <div className="new1">Web devolopment</div>
                        <div className="new2">UI/UX</div>
                    </div>
                </div>
              </div>
              </div>

              <div>
              <div className="box">
                <div className="greybox"></div>
                <div className="sideinfo">
                <div> Web Security Fundamentals: Safeguarding Your Web Applications Against Common Threats</div>
                    <div className="clubsss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                    </svg>
                    <div className="club">Coding Club,IITG</div>
                    </div>
                    <div className="skills">
                        <div className="new1">Web devolopment</div>
                        <div className="new2">UI/UX</div>
                    </div>
                </div>
              </div>
              </div>

              <div>
              <div className="box">
                <div className="greybox"></div>
                <div className="sideinfo">
                <div> Web Security Fundamentals: Safeguarding Your Web Applications Against Common Threats</div>
                    <div className="clubsss">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                    </svg>
                    <div className="club">Coding Club,IITG</div>
                    </div>
                    <div className="skills">
                        <div className="new1">Web devolopment</div>
                        <div className="new2">UI/UX</div>
                    </div>
                </div>
              </div>
              </div>
           
            </div>
        </div>
    </div>
  )
}

export default Top3