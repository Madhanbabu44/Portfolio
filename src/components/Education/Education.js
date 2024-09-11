import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div id="education">
    <div className="edu">
      <div className="row">
        <div className="col">
          <div className="education-title">
            <h2>Education</h2>
          </div>
          <div className="education-content">
            <div className="box">
              <h4>2022-2024</h4>
              <h3>MSC-Information Technology</h3>
              <p>
                Alagappa University, science campus, Karaikudi, sivaganga
                630001<br />Percentage - 79%
              </p>
            </div>
            <div className="box">
              <h4>2019-2022</h4>
              <h3>BVOC-Software Development</h3>
              <p>
                Arumugam Pillai Seethai Ammal College, Thirupathur,
                Sivaganga 630001<br />Percentage - 90.56%
              </p>
            </div>
            <div className="box">
              <h4>+2</h4>
              <h3>High School</h3>
              <p>
                Sri Meenachi Surendharesvarer Vidhyasala Higher Secondary
                School, Karaikudi, Sivaganga 630001<br />Percentage - 67%
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="education-title">
            <h2>Internship</h2>
          </div>
          <div className="education-content">
            <div className="box">
              <h4>Nov-23 to Jan-24</h4>
              <h3>Code Bind Technologies</h3>
              <p>
                This company offers hands-on project experience and
                supported me in completing my postgraduate final year
                projects. I'm now eager to expand my skills and experience
                in Web Development, aiming to deepen my expertise through
                challenging projects and collaboration with seasoned
                professionals to contribute effectively to organizational
                goals
              </p>
            </div>
            <div className="box">
              <h4>Mar-22 to May-22</h4>
              <h3>WBC Software Lab p(LTD)</h3>
              <p>
                I had the opportunity to work alongside senior developers
                and contribute to the development of web applications. This
                experience provided me with hands-on knowledge in
                implementing responsive design and user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Education