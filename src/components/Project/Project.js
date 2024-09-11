import React from "react";
import "./Project.css";
import Weather from "../../images/WeatherApp.PNG";
import Crypto from "../../images/crypto.PNG";

const Project = () => {
  const openWeatherAppCode = () => {
    window.open("https://github.com/Madhanbabu44/WeatherApi_App", "_blank");
  };

  const openCryptoTrackerCode = () => {
    window.open("https://github.com/Madhanbabu44/Crypto-Price", "_blank");
  };
  const cryptlive=()=>{
    window.open("http://crypto-price-react.s3-website.ap-south-1.amazonaws.com/","_blank")
  }


  const weatherlive=()=>{
    window.open("http://weather-app-react.s3-website.ap-south-1.amazonaws.com/","_blank")
  }
  return (
    <div id="Project"><h1>Recent Project</h1>
      <div className="Pro1">
        <div className="img">
          <img src={Weather} height="150px" width="150px" />
        </div>
        <div className="text">
          <h3>Weather App</h3>
          <ul>
            <li>React Js</li>
            <li>Bootstrap</li>
            <li>Weather Api</li>
            <li>Git Hub</li>
            <li>VS code</li>
          </ul>
          <div className="button">
            <button onClick={openWeatherAppCode}>view Code</button>
            <button onClick={weatherlive}>Live Page</button>
          </div>
        </div>
      </div>
      <div className="Pro2">
        <div className="img">
          <img src={Crypto} height="150px" width="150px" />
        </div>
        <div className="text">
          <h3>CryptoCurrency Tracker</h3>
          <ul>
            <li>React Js</li>
            <li>Bootstrap</li>
            <li>Coin Gekko Api</li>
            <li>Git Hub</li>
            <li>VS code</li>
          </ul>
          <div className="button">
            <button onClick={openCryptoTrackerCode}>view Code</button>
            <button onClick={cryptlive}>Live Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
