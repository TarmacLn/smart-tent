import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, Slider } from "@mui/material";
import './Weather.less';
import { DayWeather, TimeWeather } from "../../stores/types";
import Droplet from "../../assets/Droplet.svg";
import Warning from "../../assets/Warning.svg";
import ForecastModal from "../../components/ForecastModal";

function Weather() {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const closeModal = () => setIsVisible(false);

    const weatherToday: TimeWeather[] = [
        { time: 'Now', temperature: 20, condition: 'sunny' },
        { time: '1 PM', temperature: 22, condition: 'sunny' },
        { time: '2 PM', temperature: 23, condition: 'sunny' },
        { time: '3 PM', temperature: 21, condition: 'cloudy' },
        { time: '4 PM', temperature: 19, condition: 'sunny' },
        { time: '5 PM', temperature: 18, condition: 'cloudy' },
        { time: '6 PM', temperature: 17, condition: 'cloudy' },
        { time: '7 PM', temperature: 16, condition: 'cloudy' },
        { time: '8 PM', temperature: 15, condition: 'cloudy' },
        { time: '9 PM', temperature: 14, condition: 'cloudy' },
    ];

    const weatherWeek: DayWeather[] = [
        { day: 'Today', low: 15, high: 25, condition: 'sunny', humidity: 60, colour: '#f44336' },
        { day: 'Tuesday', low: 14, high: 22, condition: 'cloudy', humidity: 55, colour: '#2196f3' },
        { day: 'Wednesday', low: 16, high: 30, condition: 'sunny', humidity: 50, colour: '#f44336' },
        { day: 'Thursday', low: 18, high: 28, condition: 'cloudy', humidity: 65, colour: '#ff9800' },
        { day: 'Friday', low: 17, high: 26, condition: 'cloudy', humidity: 70, colour: '#2196f3' },
        { day: 'Saturday', low: 15, high: 24, condition: 'cloudy', humidity: 60, colour: '#2196f3' },
        { day: 'Sunday', low: 14, high: 23, condition: 'sunny', humidity: 55, colour: '#f44336' },
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
                        <div className="image" />
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
                                    <div className={`image ${weather.condition}`} />
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
                                    <div className={`image ${weather.condition}`} />
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
                            <div className="alert-title" >Severe High Temperature</div>
                            <div className="alert-desc" >The temperature is expected to reach extreme levels by 11:00AM on Wednesday 30 September. Please take necessary precautions to protect yourself from heat exposure.</div>
                            <div className="alert-recommend" >Recommended: Stay hydrated, avoid outdoor activities during peak heat hours, and seek shade whenever possible.</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(Weather);
