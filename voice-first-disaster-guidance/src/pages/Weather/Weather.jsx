import "./Weather.css";
import { useEffect, useState } from "react";
import {
  getWeatherByLocation,
  getWeatherByCity,
} from "../../services/weatherApi";

import {
  FaCloudSun,
  FaTemperatureHigh,
  FaWind,
  FaTint,
  FaCompressArrowsAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const data = await getWeatherByLocation(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeather(data);
      },
      async () => {
        const data = await getWeatherByCity("Vijayawada");
        setWeather(data);
      }
    );
  }, []);

  const searchCity = async () => {
    if (city.trim() === "") return;

    const data = await getWeatherByCity(city);

    if (data) {
      setWeather(data);
    } else {
      alert("City not found.");
    }
  };

  if (!weather) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "120px",
          color: "#1565C0",
        }}
      >
        Loading Weather...
      </h2>
    );
  }

  return (
    <div className="weather-page">
      <div className="weather-header">
        <h1>Live Weather Dashboard</h1>
        <p>Real-Time Weather Monitoring</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            width: "300px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          onClick={searchCity}
          style={{
            padding: "12px 20px",
            border: "none",
            background: "#1565C0",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <FaSearch /> Search
        </button>
      </div>

      <div className="current-weather">
        <div className="weather-left">
          <FaCloudSun className="big-icon" />

          <h2>{weather.weather[0].main}</h2>

          <h1>{Math.round(weather.main.temp)}°C</h1>

          <p>
            <FaMapMarkerAlt /> {weather.name}
          </p>
        </div>

        <div className="weather-right">
          <div className="weather-box">
            <FaTemperatureHigh />
            <h3>Feels Like</h3>
            <p>{Math.round(weather.main.feels_like)}°C</p>
          </div>

          <div className="weather-box">
            <FaTint />
            <h3>Humidity</h3>
            <p>{weather.main.humidity}%</p>
          </div>

          <div className="weather-box">
            <FaWind />
            <h3>Wind Speed</h3>
            <p>{weather.wind.speed} m/s</p>
          </div>

          <div className="weather-box">
            <FaCompressArrowsAlt />
            <h3>Pressure</h3>
            <p>{weather.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;