import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigateBack from "../components/NavigateBack";

export default function Weather() {
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('Yogyakarta');

  useEffect(() => {
    const apiKey = '1ea38fd0717015b180411760331623ae';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then(response => response.data)
      .then(data => setForecastData(data))
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

  }, [city]);

  return (
    <div className="xsm:h-screen">
      <div className="container mx-auto pt-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Weather Forecast</h1>
          {forecastData && (
            <h2 className="text-2xl md:text-4xl text-stone-300">{forecastData.city.name}</h2>
          )}
        </div>

        {/* Current Weather */}
        {forecastData && (
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-5xl mb-2 text-stone-300'>{forecastData.list[0].main.temp} °C</h2>
            <p className='text-xl md:text-2xl text-stone-300'>{forecastData.list[0].weather[0].description}</p>
            <p className='text-lg md:text-xl text-stone-300'>Humidity: {forecastData.list[0].main.humidity}%</p>
          </div>
        )}

        {/* Hourly Forecast */}
        <div className='flex justify-center mb-10'>
          <div className="w-full md:w-5/6 overflow-x-auto">
            <div className='flex'>
              {forecastData && forecastData.list
                .filter((forecast, index) => index < 11)
                .map((forecast, index) => (
                  <div className='w-1/3 p-4 mx-2 bg-white bg-opacity-50 rounded-lg text-center' key={index}>
                    <h2 className='text-lg font-bold'>{forecast.dt_txt.substring(11, 16)}</h2>
                    <img
                      src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                      alt="Weather Icon"
                      className='mx-auto'
                    />
                    <p className='text-lg'>{forecast.main.temp} °C</p>
                    <p className='text-md'>{forecast.weather[0].description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* NavigateBack Component */}
        <div className="text-center mb-4">
          <NavigateBack />
        </div>
      </div>
    </div>
  );
}
