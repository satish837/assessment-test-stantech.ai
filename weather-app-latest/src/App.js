// WeatherApp.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handlingoading indicator


  const API_KEY = '7f1730b32469d829c96aaea14715ce77';

  const fetchWeatherData = async (selectedCity) => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${API_KEY}`);
      setWeatherData(response.data);
      setError(null); // Reset error state on successful data fetch
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.'); // Set error message
      setWeatherData(null);
    } finally {
      setLoading(false); // Set loading to false after data fetch completes
    }
  };
  console.log(city);
  const handleSearch = (city) => {
    setCity(city);
    fetchWeatherData(city);
  };
  

  return (
    <div className="weather-app container">
      <WeatherSearch onSearch={handleSearch} />
      {loading ? (
        <div className="loader">Loading...</div> // Display loader when loading is true
      ) : error ? (
        <div className="error-message">{error}</div> // Display error message if error occurred
      ) : (
        weatherData && <WeatherInfo weather={weatherData} />
      )}
    </div>
  );
};

export default WeatherApp;