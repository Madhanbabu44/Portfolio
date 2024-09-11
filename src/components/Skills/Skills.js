import React, { useEffect } from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { LuFileJson } from "react-icons/lu";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Skills = () => {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div  id="skills">
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <p style={{ textAlign: "center" }}>
        Here are some of my skils that i have learn
      </p>
      <div className="skills" style={{'padding':'20px'}} >
        <div data-aos="zoom-in" className="front">
          <h3>Frontend</h3>
          <ul>
            <li>
              <FaHtml5 className="icon" style={{ color: "red" }} />
              Html
            </li>
            <li>
              <FaCss3 className="icon" style={{ color: "blue" }} />
              Css
            </li>
            <li>
              <FaBootstrap className="icon" style={{ color: "#6f42c1" }} />
              Bootstrap
            </li>
            <li>
              {" "}
              <IoLogoJavascript className="icon" style={{ color: "yellow" }} /> Javascript
            </li>
            <li>
              {" "}
              <FaReact className="icon" style={{ color: "blue" }} /> React Js
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" className="other">
          <h3>Others</h3>
          <ul>
            <li>
              <VscVscode className="icon" style={{color:'#0098FF',marginTop:'2px'}} />
              Vs Code
            </li>
            <li>
              <LuFileJson className="icon" /> Api
            </li>
            <li>
              <FaGitAlt className="icon" style={{color:'#FF0000'}} />
              Git
            </li>
            <li>
              <FaGithub className="icon" style={{color:"white"}} /> Github
            </li>
            <li>
              <FaAws className="icon" style={{color:" #FF9900"}} /> Aws Cloud
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
