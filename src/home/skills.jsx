import React from "react";
import profile_pic from '../home/Pugazhenthi Thaniarasu I R.jpeg';
import c from './C.png';
import cpp from './C++.png';
import python from './Python.png';
import mysql from './mysql.png';
import html from './HTML 5.png';
import css from './CSS 3.png';
import js from './JS.png';
import '../home/skills.css';

const Skills=()=>{
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
                <div className="skill_details">
                    <h1>Skills</h1>
                    <br></br>
                    <h2>Programming</h2>
                    <div className="tech_skill">
                        <section><img src={c} alt="C" width="150px"></img></section>
                        <section><img src={cpp} alt="CPP" width="150px"></img></section>
                        <section><img src={python} alt="Python" width="145px"></img></section>
                    </div>
                    <h2>DBMS</h2>
                    <div className="db_skill">
                        <section><img src={mysql} alt="mysql" width="150px"></img></section>
                    </div>
                    <h2>Web</h2>
                    <div className="web_skill">
                        <section><img src={html} alt="html" width="150px"></img></section>
                        <section><img src={css} alt="CSS" width="150px"></img></section>
                        <section><img src={js} alt="JS" width="150px"></img></section>
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

export default Skills;
