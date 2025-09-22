import { WeatherEnum } from "../../stores/types";
import Sun from "../../assets/Sun.svg";
import SunWithClouds from "../../assets/SunWithClouds.svg";
import Cloud from "../../assets/Cloud.svg";
import MoonWithClouds from "../../assets/MoonWithClouds.svg";
import Moon from "../../assets/Moon.svg";
import Rain from "../../assets/Rain.svg";
import Storm from "../../assets/Storm.svg";
import React from "react";


export default function HandleWeatherIcon({ weather }: { weather: WeatherEnum }) {
    switch (weather) {
        case WeatherEnum.Sunny:
            return <Sun />;
        case WeatherEnum.SunWithClouds:
            return <SunWithClouds />;
        case WeatherEnum.Cloudy:
            return <Cloud />;
        case WeatherEnum.CloudyNight:
            return <MoonWithClouds />;
        case WeatherEnum.ClearNight:
            return <Moon />;
        case WeatherEnum.Rain:
            return <Rain />;
        case WeatherEnum.Storm:
            return <Storm />;
        default:
            return <Sun />;
    }
}