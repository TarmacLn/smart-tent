import { Box, Button, Divider, Modal } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import './ForecastModal.less';
import { DayWeather, Food, TimeWeather, WeatherEnum } from "../../stores/types";
import HandleWeatherIcon from "../../Pages/Weather/HandleWeatherIcon";

function ForecastModal({
    isVisible,
    closeModal,
    day,
}: {
    isVisible: boolean;
    closeModal: () => void;
    day: DayWeather;
}) {

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
    
    return (
        <Modal
            open={isVisible}
            onClose={closeModal}
        >
            <Box className="ForecastModal">
                <div className="wrapper">
                    <div className="content">
                        <div className="title">{day.day}</div>
                        <Divider sx={{ width: '100%' }} />
                        <div className="forecast day" >
                            {weatherToday.map((weather, index) => (
                                <div key={index} className="time-weather" >
                                    <div className="time" >{weather.time}</div>
                                    <div className="image" >
                                        <HandleWeatherIcon weather={weather.weather} />
                                    </div>
                                    <div className="temp" >{weather.temperature}°C</div>
                                </div>
                            ))}
                        </div>
                        <div className="button">
                            <Button variant="contained" color="error" onClick={closeModal}>Close</Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(ForecastModal);