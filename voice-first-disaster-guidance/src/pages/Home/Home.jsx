import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getWeatherByLocation,
  getWeatherByCity,
  getForecastByLocation,
  getForecastByCity,
} from "../../services/weatherApi";

import {
  FaCloudSun,
  FaMicrophone,
  FaKeyboard,
  FaPhoneAlt,
  FaExclamationTriangle,
} from "react-icons/fa";


function Home() {

  const navigate = useNavigate();

  const [weather, setWeather] = useState(null);
  const [alert, setAlert] = useState({
    level: "GREEN",
    message: "Weather conditions are normal.",
    advice: "Continue monitoring weather updates."
  });


  const analyzeWeather = (forecast) => {

    let rain = 0;
    let thunderstorm = false;
    let wind = 0;


    forecast.list.forEach((item)=>{

      if(item.pop){
        rain = Math.max(rain, item.pop * 100);
      }


      if(item.weather[0].main === "Thunderstorm"){
        thunderstorm = true;
      }


      if(item.wind.speed){
        wind = Math.max(wind,item.wind.speed);
      }

    });


    if(thunderstorm || wind > 20){

      setAlert({

        level:"RED",

        message:"Severe weather detected. Thunderstorm or strong winds expected.",

        advice:
        "Stay indoors, avoid travelling and keep emergency contacts ready."

      });

    }

    else if(rain > 80){

      setAlert({

        level:"ORANGE",

        message:"Heavy rainfall expected in your area.",

        advice:
        "Avoid flooded roads and move to safer places if required."

      });

    }

    else if(rain > 50){

      setAlert({

        level:"YELLOW",

        message:"Moderate rainfall expected.",

        advice:
        "Stay alert and follow weather updates."

      });

    }

    else{

      setAlert({

        level:"GREEN",

        message:"No severe weather conditions detected.",

        advice:
        "Weather conditions are safe currently."

      });

    }

  };



  useEffect(()=>{


    navigator.geolocation.getCurrentPosition(

      async(position)=>{


        try{


          const lat = position.coords.latitude;

          const lon = position.coords.longitude;


          const weatherData =
          await getWeatherByLocation(lat,lon);


          const forecastData =
          await getForecastByLocation(lat,lon);



          setWeather(weatherData);


          if(forecastData){

            analyzeWeather(forecastData);

          }


        }

        catch(error){

          console.log(error);

        }


      },


      async()=>{


        try{


          const weatherData =
          await getWeatherByCity("Bhimavaram");


          const forecastData =
          await getForecastByCity("Bhimavaram");


          setWeather(weatherData);


          if(forecastData){

            analyzeWeather(forecastData);

          }


        }

        catch(error){

          console.log(error);

        }


      }


    );


  },[]);



  return (

    <div className="home">


      <section className="hero">


        <div className="hero-content">


          <h1>
            Voice-Based Disaster Guidance System
          </h1>


          <p>
            Get live weather updates, report disasters using voice or text,
            receive AI-powered guidance, and access emergency services instantly.
          </p>


          <button onClick={()=>navigate("/report")}>

            Report Disaster

          </button>


        </div>


      </section>



      <section className="weather-section">


        <h2>
          Today's Weather
        </h2>


        {
        weather ? (


          <div className="weather-card">


            <div className="left">


              <FaCloudSun className="weather-icon"/>


              <div>


                <h3>
                  {weather.name}
                </h3>


                <p>
                  {weather.weather[0].description}
                </p>


              </div>


            </div>



            <div className="right">


              <h1>
                {Math.round(weather.main.temp)}°C
              </h1>


              <p>
                Feels Like :
                {Math.round(weather.main.feels_like)}°C
              </p>


              <p>
                Humidity :
                {weather.main.humidity}%
              </p>


              <p>
                Wind :
                {weather.wind.speed} m/s
              </p>


            </div>


          </div>


        )


        :


        (

          <div className="weather-card">

            <h3>
              Loading Weather...
            </h3>

          </div>

        )


        }


      </section>
            {/* Weather Alert Section */}

      <section className="alerts">

        <h2>
          Live Weather Alerts
        </h2>


        <div className={`alert-box ${alert.level.toLowerCase()}`}>

          <FaExclamationTriangle />


          <div>

            <h3>
              {alert.level} ALERT
            </h3>


            <p>
              {alert.message}
            </p>


            <span>
              {alert.advice}
            </span>


          </div>


        </div>


      </section>



      {/* Emergency Numbers */}


      <section className="emergency">


        <h2>
          Emergency Services
        </h2>


        <div className="cards">


          <div className="card">

            <h3>
              🚑 Ambulance
            </h3>

            <p>
              108
            </p>

          </div>



          <div className="card">

            <h3>
              🚒 Fire
            </h3>

            <p>
              101
            </p>

          </div>




          <div className="card">

            <h3>
              👮 Police
            </h3>

            <p>
              100
            </p>

          </div>




          <div className="card">

            <h3>
              🆘 Disaster
            </h3>

            <p>
              1070
            </p>

          </div>



        </div>


      </section>





      {/* Quick Actions */}


      <section className="quick-actions">


        <h2>
          Quick Actions
        </h2>



        <div className="action-container">



          <div
            className="action-card"
            onClick={()=>navigate("/report")}
          >

            <FaMicrophone />


            <h3>
              Voice Report
            </h3>


            <p>
              Report disasters using your voice.
            </p>


          </div>





          <div
            className="action-card"
            onClick={()=>navigate("/report")}
          >

            <FaKeyboard />


            <h3>
              Text Report
            </h3>


            <p>
              Describe disaster situations using text.
            </p>


          </div>





          <div
            className="action-card"
            onClick={()=>navigate("/emergency")}
          >

            <FaPhoneAlt />


            <h3>
              Emergency Contacts
            </h3>


            <p>
              Quickly access emergency services.
            </p>


          </div>



        </div>



      </section>





      {/* Safety Tips */}



      <section className="tips">


        <h2>
          Safety Tips
        </h2>


        <ul>

          <li>
            Keep emergency supplies ready.
          </li>


          <li>
            Monitor weather alerts regularly.
          </li>


          <li>
            Avoid travelling during severe weather.
          </li>


          <li>
            Keep mobile phones charged.
          </li>


          <li>
            Contact emergency services when required.
          </li>


        </ul>


      </section>




    </div>

  );

}


export default Home;