import React, { useState } from 'react'
import './Weather.css'
import search_icon from './Assets/search.png'
import clear_icon from './Assets/clear.png'
import cloud_icon from './Assets/cloud.png'
import drizzle_icon from './Assets/drizzle.png'
import humidity_icon from './Assets/humidity.png'
import wind_icon from './Assets/wind.png'
import rain_icon from './Assets/rain.png'
import snow_icon from './Assets/snow.png'


export default function Weather() {


    let api_key = "2d9656e12a5cfa0fd6b7cbebd84d6e23";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const cityInput = document.getElementById("cityInput");
        if (!cityInput || !cityInput.value) {
            return;
        }
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${api_key}&lang=kr`
            let response = await fetch(url);

            let data = await response.json();


            const humidity = document.getElementsByClassName("humidity-percent")[0];
            const wind = document.getElementsByClassName("wind-rate")[0];
            const temp = document.getElementsByClassName("weather-temp")[0];
            const location = document.getElementsByClassName("weather-location")[0];

            humidity.innerHTML = data.main.humidity + "  %";
            wind.innerHTML = Math.floor(data.wind.speed) + " Km/h";
            temp.innerHTML = Math.floor(data.main.temp) + " °C";
            location.innerHTML = data.name;

            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                setWicon(clear_icon);
            }
            else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                setWicon(cloud_icon);
            }
            else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                setWicon(drizzle_icon);
            }
            else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                setWicon(drizzle_icon);
            }
            else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                setWicon(rain_icon);
            }
            else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                setWicon(rain_icon);
            }
            else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon);
            }



        } catch (err) {
            console.error('Error during data fetch', err);
        }

    }


    return (
        <div className='weather-container'>
            <div className='top-bar'>
                <input type="text" className="cityInput" id="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className='weather-img'>
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">Seoul</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64 %</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
