import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherApp">
          <Search />
          <CurrentWeather city="Chicago" />
        </div>
      </div>
    </div>
  );
}