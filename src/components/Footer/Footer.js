import React from 'react'
import "./Footer.css"
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
    
  return (
    <div id="footer">
        <div className="menu">
        <ul>
          <li>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link to="education" spy={true} smooth={true} offset={50} duration={500}>
              Education
            </Link>
          </li>
          <li>
            <Link to="Project" spy={true} smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
        </div>
        <div className="icon">
            <ul>
                <li><a href='https://www.linkedin.com/in/madhan482/'><FaLinkedin/></a></li>
                <li><a href='https://github.com/Madhanbabu44'><FaGithub /></a></li>
                <li><a href='mailto:madhanbabu482@gmail.com'><SiGmail /></a></li>
            </ul>
        </div>
        <div className="text">
            <h6>&copy;  All Copyrights Reserved || Madhan Email : madhanbabu482@gmail.com </h6>
        </div>
    </div>
  )
}

export default Footer