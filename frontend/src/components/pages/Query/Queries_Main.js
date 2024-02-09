import React,{useState,useEffect} from 'react'
import './Queries_Main.css'
import axios from 'axios';


function Queries_Main(props) {
    const [allQueries,setAllQueries] = useState([]);    

    useEffect(()=>{
        let isMounted = true;
        async function fetchAllQueriesByLatest() {
            const resp = await axios.get('http://localhost:8080/api/sortQueryPostsByLatest');
            if(isMounted){
                resp.data.forEach(resp => {
                    setAllQueries(prevResp => [...prevResp,resp])
                })       
            }
        }
        fetchAllQueriesByLatest();
        console.log(allQueries);
        return () => {
            isMounted = false;
        }
    },[])

    const openPost = (e) => {
        
        const pid = (e.target.id).substring(1);
        console.log("HELOOOOO");
        console.log(pid);
        sessionStorage.setItem('pidVal',pid);
        const url = `/detailquery?id=${pid}`;
        // Navigate to the constructed URL
        window.location.href=url;
    }

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
                {
                    allQueries.map(elm => 
                        <div class="individual-comment" id={`U${elm._id}`} onClick={openPost}>
                        <div className='Queries_Main-Text_with_Skills' id={`I${elm._id}`}>
                             <p className='Queries_Main-RHS-Text-Main' id={`J${elm._id}`}> {elm.question} </p>
                             <div class="skill-section" id={`K${elm._id}`}>
                        </div>
                        </div>
                        <div class="interaction-section" id={`L${elm._id}`}>
                            <div class = "likes-interacted" id={`M${elm._id}`}>187</div>
                            <div class="comments-interacted" id={`N${elm._id}`}> 7 258 </div>
                            <div class="posted-when" id={`O${elm._id}`}> Posted by {elm.authorName} 6 hrs ago </div>
                        </div>
                    </div>
                        
                        )
                }

                
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
