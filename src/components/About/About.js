import React from "react";
import "./About.css";
import Profile from "../../images/Profile.png";
import TypingEffect from "./Type"; // Import the TypingEffect component
import Resume from "./Madhanbabu Frontend Resume.pdf"
const About = () => {
  const textArray = [
    "React Js Developer",
    "Web Developer",
    "Frontend Developer"
  ];

  return (
    <div id="about">
      
      <div className="details">
        <h2>Hi, I am</h2>
        <h2>Madhanbabu</h2>
        <h4>
          I am a <TypingEffect textArray={textArray} speed={150} eraseSpeed={75} />
        </h4>
        <p>
          A Skilled React Developer with a strong portfolio, passionate about
          staying updated on frontend tech. Collaborative and committed to
          quality, you thrive in dynamic teams. Eager to contribute creativity
          and bring innovative ideas to life.
        </p>
        <div className="about-btn">
        <a href={Resume} target="_blank">
            <button>Check Resume</button>
          </a>
        </div>
      </div><div className="img">
        <img src={Profile} alt="Profile Image" />
      </div>
    </div>
  );
};

export default About;
