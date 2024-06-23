// WeatherInfo.js
import React from 'react';

const WeatherInfo = ({ weather }) => {
  const { description } = weather.weather[0];
  const { temp, feels_like, humidity } = weather.main;

  return (
    <div className="weather-info">
      <div className="container mt-5">
      <div className="weather-icon">
        <img src={`../weather-icon.png`} alt="weather icon" />
      </div>
      <div className="weather-details">
        <p>Temperature: <strong>{temp} °C</strong></p>
        <p>Feels like: <strong>{feels_like} °C</strong></p>
        <p>Humidity: <strong>{humidity}%</strong></p>
        <p>Weather: <strong>{description}</strong></p>
      </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
