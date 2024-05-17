import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function weather() {
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



  console.log(forecastData)
  return (
    <div className="h-screen" >
       {forecastData && (
        <div className=' text-center items-center mt-5 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-10 sm:mt-0'>
          <h2 className='text-3xl md:text-5xl mb-10 text-stone-300'>{forecastData.city.name}</h2>
          <div key={forecastData.list[0].dt}>
            <p className='text-2xl md:text-6xl mb-10 text-stone-300 font-bold'>{forecastData.list[0].main.temp} °C</p>
            <p className='text-xl sm:text-xl md:text-3xl text-stone-300 mb-5'>{forecastData.list[0].weather[0].description}</p>
            <p className='text-2xl md:text-5xl mb-10 text-stone-300'>Humidity: {forecastData.list[0].main.humidity}%</p>
          </div>
        </div>
      )}
      {/* Weather Forecast */}
      {forecastData ? (
        <div className='flex sm:justify-center text-center overflow-x-auto whitespace-nowrap bg-slate-50 bg-opacity-50 backdrop-filter backdrop-blur-lg w-2/3 md:w-2/3 mx-auto rounded md:pl-20 pr-10 absolute top-2/3 sm:bottom-8 left-1/2 -translate-x-1/2'>
          {forecastData.list
            .filter((forecast, index) => index < 7)
            .map((forecast, index) => (
              <div className='m-3 ml-10 inline-block' key={index}>
                <h1>{forecast.dt_txt.substring(11, 16)}</h1>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className='mx-auto'
                />
                <p>{forecast.main.temp} °C</p>
                <p>{forecast.weather[0].description}</p>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading Weather Forecast...</p>
      )} 
      <br/>
    </div>
  );
}
