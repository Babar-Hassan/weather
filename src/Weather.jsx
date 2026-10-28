import axios from 'axios';
import { useState } from 'react'

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState();
  const handleCityChange = (e) => {
    setCity(e.target.value);
  }
  const fetchWeather= async() => {
    try{
       const respose = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'679fa568e316cf8c9c60cb80bd594266'}`)
       setWeatherData(respose)
       console.log(respose)
    }
    catch(error){
      console.error('Error fetching weather data:', error);
    }
  }
  const handleClick = () => {
    fetchWeather();
  }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter city name' value={city}
        onChange={handleCityChange} />   
        <button onClick={handleClick}>Get Weather</button>
        {weatherData && (
          <div className='weather-info'>
            <h2>Weather in {weatherData.data.name}</h2>
            <p>Temperature: {weatherData.data.main.temp} K</p>
            <p>Description: {weatherData.data.weather[0].description}</p>
          </div>
        )}
    </div>
  )
}

export default Weather