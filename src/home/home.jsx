import React from "react";
import './home.css'

import profile_pic from '../home/Pugazhenthi Thaniarasu I R.jpeg';
import dbms from './dbms.png';
import cloud from './R.png';
import linkedin from './LinkedIn.png';
import github from './GitHub.png';
import leetcode from './leetcode.png';
import hackerrank from './HackerRank.png';
const Home=()=>{
    return(

        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav className="home_top">
                <div><h1>Pugazhenthi Thaniarasu I R</h1></div>
                <div className="nav">
                    <a href="/">Home</a>
                    <a href="/qualifications">Qualification</a>
                    <a href="/skills">Skills</a>
                    <a href="/projects">Projects</a>
                    <a href="internships">Internships</a>
                </div>
            </nav>
            <div className="home_bottom">
                <div className="profile">
                    <div>
                        <img src={profile_pic} alt="Profile-Pic" width="180px" height="180px"></img>
                    </div>
                    <div className="prof_top">
                        <p><strong>Pugazhenthi Thaniarasu I R</strong></p>
                        <p>UG - ECE</p>
                    </div>
                    <table>
                        <tr>
                            <th>Contact:</th>
                            <td>9500231687</td>
                        </tr>
                        <tr>
                            <th>Gmail:</th>
                            <td>pugazhenthiir2002@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Gender:</th>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <th>D.O.B:</th>
                            <td>11/10/2002</td>
                        </tr>
                        <tr>
                            <th>Martial Status:</th>
                            <td>Single</td>
                        </tr>
                        <tr>
                            <th>Address:</th>
                            <td>3/2A, Anna Nagar, Sirumugai - 641302</td>
                        </tr>
                    </table>
                </div>
                <div className="details">
                    <div className="career_obj">
                        <h1>Home</h1>
                        Hello! I am Pugazhenthi Thaniarasu I R.<br></br>
                        <p>Seeking for a Challenging position in a fast-growing organization to utilize expertise in software development and testing, as well as deployment and support using agile development methodologies.</p>                       
                        <p>So, I just have designed my Resume as website. So that, you can go through my resume. If the resume satifies you, you can ping me.</p>
                    </div>
                    <div className="Areas">
                        <h1>Areas of Interest</h1>
                        <div className="Areas_pic">
                            <section><img src={dbms} alt="DBMS" width="100px"></img><p>DBMS</p></section>
                            <section><img src={cloud} alt="Cloud" width="100px"></img><p>Cloud</p></section>
                        </div>
                    </div>
                    <div className="Lang">
                        <h1>Languages Known</h1>
                        <table>
                            <tr>
                                <th>English</th>
                                <td>Speak, </td>
                                <td>Write, </td>
                                <td>Read</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Tamil</th>
                                <td>Speak, </td>
                                <td>Write, </td>
                                <td>Read</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Kannada</th>
                                <td>Speak</td>
                            </tr>
                        </table>
                    </div>
                    <div className="social_profile">
                        <h1>Profiles</h1>
                        <section className="s_p">
                            <div><a href="https://www.linkedin.com/in/pugazhenthi-i-r/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" width="100px"></img></a></div>
                            <div><a href="https://github.com/pugazhenthi2002/" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" width="100px"></img></a></div>
                            <div><a href="https://leetcode.com/pugazhenthiir2002/" target="_blank" rel="noreferrer"><img src={leetcode} alt="Leetcode" width="120px"></img></a></div>
                            <div><a href="https://www.hackerrank.com/pugazhenthiir201" target="_blank" rel="noreferrer"><img src={hackerrank} alt="HackerRank" width="100px"></img></a></div>
                        </section>
                    </div>
                </div>
            </div>
            <footer>
                <div className="foot">
                    <div className="foot-text">© 2023 Pugazhenthi Thaniarasu I R</div>
                    <div className="foot-right">|
                        <a href="https://www.linkedin.com/in/pugazhenthi-i-r/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin fa-lg"></i></a>
                        <a href="https://github.com/pugazhenthi2002" target="_blank" rel="noreferrer"><i class="fa fa-github fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/pugazhenthi-i-r/" target="_blank" rel="noreferrer"><i class="fa fa-instagram fa-lg"></i></a>
                        
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;