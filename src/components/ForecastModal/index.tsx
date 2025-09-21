import { Box, Button, Divider, Modal } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import './ForecastModal.less';
import { DayWeather, Food, TimeWeather } from "../../stores/types";

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
                                    <div className={`image ${weather.condition}`} />
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