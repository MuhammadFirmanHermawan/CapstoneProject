import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=-6.943097&lon=107.633545&units=imperial&appid=3302b3a4dee7c45ff1a76b7a2ab3d7ba";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="container">
      <div className="search">
        <input value={location} onChange={(event) => setLocation(event.target.calue)} onKeyPress={searchLocation} placeholder="Enter Locaation" type="text"></input>
      </div>
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="tep">
          <h1>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h1>
        </div>
        <div className="description">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
      </div>
      {data.name !== undefined && (
        <div className="bottom">
          <div className="fells">
            {data.main ? <p>{data.main.feels_like}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">{data.main ? <p>{data.main.humidity}%</p> : null}</div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Weather;
