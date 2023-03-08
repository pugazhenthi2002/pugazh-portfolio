import React from "react";
import profile_pic from '../home/Pugazhenthi Thaniarasu I R.jpeg';
// import dbms from './dbms.png';
// import cloud from './R.png';
// import linkedin from './LinkedIn.png';
// import github from './GitHub.png';
// import leetcode from './leetcode.png';
// import hackerrank from './HackerRank.png';
import './qualification.css';

const Qualification=()=>{
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
            <div className="qualifi-details">
                <h1>Qualification</h1>
                    <br></br>       
                <h2>Bachelor of Engineering</h2>
                <div className="BE">
                    <strong>Bannari Amman Institute of Technology</strong>
                    <p><i>2020-present</i></p>
                    <p>8.56 CGPA (Upto 5th Semester)</p>
                </div>
                <hr color="black"></hr>
                <h2>Higher Secondary Certificate</h2>
                <div className="HSC">
                    <strong>Vijayalakshmi Matric Hr Sec School</strong>
                    <p><i>2019-2020</i></p>
                    <p>82.16%</p>
                </div>
                <hr color="black"></hr>
                <h2>Secondary School Leaving Certificate</h2>
                <div className="SSLC">
                    <strong>Vijayalakshmi Matric Hr Sec School</strong>
                    <p><i>2017-2018</i></p>
                    <p>91.2%</p>
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

export default Qualification;