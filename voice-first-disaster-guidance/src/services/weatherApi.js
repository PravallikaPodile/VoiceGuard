import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

// Current weather by city
export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(CURRENT_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
};

// Current weather by location
export const getWeatherByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(CURRENT_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Location Weather Error:", error);
    return null;
  }
};

// 5-Day Forecast by city
export const getForecastByCity = async (city) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Forecast API Error:", error);
    return null;
  }
};

// 5-Day Forecast by current location
export const getForecastByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Location Forecast Error:", error);
    return null;
  }
};