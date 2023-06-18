// Current weather data
// bf698cb58480b0cb10a766c94cceacb3
// https://api.openweathermap.org/data/2.5/weather



import { useState } from "react";
import Backend from "./Backend";
import "./App.css"; 

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  
  const update = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  
  const search = async (e) => {
    if (e.code === "Enter") {
      let data = await Backend(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Weather Application</h1>
      <input
        className="search-input"
        value={query}
        type="text"
        placeholder="Enter the City Name"
        onKeyPress={search}
        onChange={update}
      />

      {weather.main && (
        <div className="weather-data">
          <div id="city" className="city">
            {weather.name} {weather.sys.country}
          </div>
          <div id="temp" className="temp">
            {Math.round(weather.main.temp)}
            <span>&deg;C</span>
          </div>
          <div id="info" className="info">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className="description">{weather.weather[0].description}</p>
          </div>
          <div className="humidity">
            Humidity: {weather.main.humidity} grams/cubic meter
          </div>
          <div className="pressure">
            Pressure: {weather.main.pressure} Pa
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
