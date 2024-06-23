// WeatherSearch.js
import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };
  // console.log(city);
  return (
    
    <form onSubmit={handleSubmit}>
      <div className="input-group mt-3 mb-3">
      <input
      className='form-control'
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit" className='btn btn-primary'>Search</button>
      </div>
    </form>
  );
};

export default WeatherSearch;
