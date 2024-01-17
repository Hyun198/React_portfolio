import React from 'react'
import './Weather.css'
import search_icon from './Assets/search.png'
import clear_icon from './Assets/clear.png'
import cloud_icon from './Assets/cloud.png'
import drizzle_icon from './Assets/drizzle.png'
import humidity_icon from './Assets/humidity.png'
import wind_icon from './Assets/wind.png'
import snow_icon from './Assets/snow.png'
export const Weather = () => {


    let api_key = "2d9656e12a5cfa0fd6b7cbebd84d6e23";

    const search = async () => {
        const city = document.getElementsByClassName("cityInput");
        if (city[0].value === "") {
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}&lang=kr`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.main.wind.speed;
        temp[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;

    }


    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className='weather-img'>
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">Seoul</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
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
