import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather (props) {
  return (
    <div className="currentWeather">
      <div className="current-city">
        <h1> {props.city} </h1>
      </div>
      <div className="weather-icon">
        <div className="row">
          <div className="col-4">
            <i className="fas fa-sun"></i>
          </div>
          <div className="col-4">
            <span className="TempToday"> 55 </span>
            <span className="cel-fahren">
              <button className="TempC">°C</button ><button className="TempF">°F</button >
            </span>
          </div>
          <div className="col-4">
            <p>
              {" "}
              Humidity: 9% <br /> Wind: 9km/hr <br /> Feels like: 45{" "}
            </p>
          </div>
        </div>
        <h3 className="description">Clear Skies</h3>
      </div>
    </div>
  );
}
