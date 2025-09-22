import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, Slider } from "@mui/material";
import './Weather.less';
import { DayWeather, TimeWeather, WeatherEnum } from "../../stores/types";
import Droplet from "../../assets/Droplet.svg";
import Warning from "../../assets/Warning.svg";
import ForecastModal from "../../components/ForecastModal";
import HandleWeatherIcon from "./HandleWeatherIcon";

function Weather() {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const closeModal = () => setIsVisible(false);


    const weatherToday: TimeWeather[] = [
        { time: 'Now', temperature: 20, weather: WeatherEnum.Sunny },
        { time: '11:00', temperature: 22, weather: WeatherEnum.Sunny },
        { time: '12:00', temperature: 24, weather: WeatherEnum.Sunny },
        { time: '13:00', temperature: 25, weather: WeatherEnum.Sunny },
        { time: '14:00', temperature: 24, weather: WeatherEnum.Sunny },
        { time: '15:00', temperature: 23, weather: WeatherEnum.SunWithClouds },
        { time: '16:00', temperature: 22, weather: WeatherEnum.SunWithClouds },
        { time: '17:00', temperature: 21, weather: WeatherEnum.Cloudy },
        { time: '18:00', temperature: 20, weather: WeatherEnum.Rain },
        { time: '19:00', temperature: 19, weather: WeatherEnum.Rain },
        { time: '20:00', temperature: 18, weather: WeatherEnum.Storm },
        { time: '21:00', temperature: 17, weather: WeatherEnum.CloudyNight },
        { time: '22:00', temperature: 16, weather: WeatherEnum.CloudyNight },
        { time: '23:00', temperature: 15, weather: WeatherEnum.ClearNight },
        { time: '00:00', temperature: 15, weather: WeatherEnum.ClearNight },
    ];

    const weatherWeek: DayWeather[] = [
        { day: 'Today', high: 25, low: 15, weather: WeatherEnum.Sunny, humidity: 50, colour: '#FFA500' },
        { day: 'Tuesday', high: 22, low: 14, weather: WeatherEnum.SunWithClouds, humidity: 55, colour: '#FFD700' },
        { day: 'Wednesday', high: 20, low: 13, weather: WeatherEnum.Cloudy, humidity: 60, colour: '#C0C0C0' },
        { day: 'Thursday', high: 18, low: 12, weather: WeatherEnum.Rain, humidity: 70, colour: '#1E90FF' },
        { day: 'Friday', high: 21, low: 14, weather: WeatherEnum.SunWithClouds, humidity: 65, colour: '#FFD700' },
        { day: 'Saturday', high: 24, low: 16, weather: WeatherEnum.Sunny, humidity: 50, colour: '#FFA500' },
        { day: 'Sunday', high: 19, low: 13, weather: WeatherEnum.Storm, humidity: 80, colour: '#C0C0C0' },
    ];

    const [selectedDay, setSelectedDay] = useState<DayWeather>(weatherWeek[0]);

    return (
        <div className='Weather'>
            <ForecastModal
                isVisible={isVisible}
                closeModal={closeModal}
                day={selectedDay}
            />
            <Header
                title='Weather'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className="content">
                <Grid container spacing={2} className="grid">
                    <Grid size={2} >
                        <div className="image-main" />
                    </Grid>
                    <Grid size={4} >
                        <div className="stats" >
                            <div className="temp" >20°C</div>
                            <div className="weather" >Sunny</div>
                            <div className="humidity" >Humidity: 60%</div>
                            <div className="wind" >Wind: 10 km/h</div>
                            <div className="location">Freaky Camp</div>
                        </div>
                    </Grid>
                    <Grid size={6} className="box" >
                        <div className="title">Today</div>
                        <Divider sx={{ width: '100%', marginBottom: '10px' }} />
                        <div className="forecast today" >
                            {weatherToday.map((weather, index) => (
                                <div key={index} className="time-weather" >
                                    <div className="time" >{weather.time}</div>
                                    <div className={'image'} >
                                        <HandleWeatherIcon weather={weather.weather} />
                                    </div>
                                    <div className="temp" >{weather.temperature}°C</div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid size={8} className="box" >
                        <div className="title">7 day forecast</div>
                        <Divider sx={{ width: '100%' }} />
                        <div className="forecast week">
                            {weatherWeek.map((weather, index) => (
                                <div
                                    key={index}
                                    className="day-weather"
                                    onClick={() => {
                                        setSelectedDay(weather);
                                        setIsVisible(true);
                                    }}
                                >
                                    <div className="day" >{weather.day}</div>
                                    <div className="image" >
                                        <HandleWeatherIcon weather={weather.weather} />
                                    </div>
                                    <div className="temps" >
                                        <div className="low" >{weather.low}°C</div>
                                        <Slider className="temp-slider" value={weather.high} min={0} max={50} sx={{
                                            '& .MuiSlider-track': { bgcolor: weather.colour, border: 'none' },
                                        }} />
                                        <div className="high" >{weather.high}°C</div>
                                    </div>
                                    <div className="humidity" ><Droplet /> {weather.humidity}%</div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid size={4} className="box" >
                        <div className="title alert"><Warning />Weather Alert</div>
                        <Divider sx={{ width: '100%' }} />
                        <div className="alert" >
                            <div className="alert-title" >Severe Winds</div>
                            <div className="alert-desc" >Winds are expected to reach speeds of 60 km/h by 2:00 PM on Wednesday 30 September. Please take necessary precautions to secure loose objects and avoid outdoor activities.</div>
                            <div className="alert-recommend" >Recommended: Stay indoors, secure loose objects, and avoid outdoor activities during peak wind hours.</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(Weather);
