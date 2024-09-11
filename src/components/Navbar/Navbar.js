import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div  className="navbar">
      <div className="name">
        <h2>Developer</h2>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Education
            </Link>
          </li>
          
          <li>
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
