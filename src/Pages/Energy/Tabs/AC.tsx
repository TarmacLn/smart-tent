import React, { useState } from "react";
import './AC.less';
import Header from "../../../components/Header";
import { uiStore } from "../../../stores";
import { Divider, Grid, Radio, RadioGroup, Slider, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Air from '../../../assets/Air.svg';

export default function Panels() {

    const marks = Array.from({ length: 5 }, (_, i) => {
        const v = i + 1;
        return { value: v, label: String(v) };
    });

    const [ac, setAc] = useState<'on' | 'off'>('on');
    const [tempMode, setTempMode] = useState<'cold' | 'warm'>('cold');
    const [fanDirection, setFanDirection] = useState<string>('auto');
    const [fanPower, setFanPower] = useState<number>(1);
    const [temp, setTemp] = useState<number>(24);
    const [sleepMode, setSleepMode] = useState<boolean>(false);
    const [ecoMode, setEcoMode] = useState<boolean>(false);

    const [disabled, setDisabled] = useState<boolean>(false);


    return (
        <div className="AC">
            <Header
                title='Energy Management'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className="content" >
                <div className="banner">
                    <Grid container spacing={2}>
                        <Grid size={1}>
                            <Air />
                        </Grid>
                        <Grid size={11} className="banner-title">
                            <div className="title">Air Conditioning</div>
                            <div className="description">Manage and monitor your air conditioning system to optimize energy generation and storage.</div>
                        </Grid>
                        <Divider flexItem sx={{ width: '100%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                        <Grid size={12} className="ac-settings" container>
                            <div className="switches">
                                <div className="title">AC switch</div>
                                <ToggleButtonGroup
                                    value={ac}
                                    exclusive
                                    onChange={(_, value) => {
                                        value && setAc(value);
                                        if (value === 'off') {
                                            setSleepMode(false);
                                            setEcoMode(false);
                                            setDisabled(true);
                                        } else {
                                            setDisabled(false);
                                        }
                                    }}
                                    size="small"
                                    className='toggle'
                                >
                                    <ToggleButton className='toggle-button' value="on" aria-label="on">On</ToggleButton>
                                    <ToggleButton className='toggle-button' value="off" aria-label="off">Off</ToggleButton>
                                </ToggleButtonGroup>
                                <ToggleButtonGroup
                                    value={tempMode}
                                    exclusive
                                    onChange={(_, value) => {
                                        value && setTempMode(value);
                                    }}
                                    size="small"
                                    className='toggle'
                                    disabled={disabled}
                                >
                                    <ToggleButton className='toggle-button' value="cold" aria-label="cold">Cold</ToggleButton>
                                    <ToggleButton className='toggle-button' value="warm" aria-label="warm">Warm</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            <div className="fans">
                                <div className="fan-setting">
                                    <div className="title">Fan Power</div>
                                    <Slider
                                        className='slider'
                                        value={fanPower}
                                        onChange={(_, value) => {
                                            typeof value === 'number' && setFanPower(value);
                                        }}
                                        aria-labelledby="fan-power-slider"
                                        valueLabelDisplay="auto"
                                        step={1}
                                        max={5}
                                        min={1}
                                        marks={marks}
                                        disabled={disabled}
                                    />
                                </div>
                                <div className="fan-setting">
                                    <div className="title">Fan direction</div>
                                    <RadioGroup
                                        row
                                        className="fan-directions"
                                        value={fanDirection}
                                        onChange={(_, value) => {
                                            value && setFanDirection(value);
                                        }}
                                    >
                                        <Radio
                                            value="auto"
                                            name="fan-direction"
                                            disabled={disabled}
                                        /> Auto
                                        <Radio
                                            value="up"
                                            name="fan-direction"
                                            disabled={disabled}
                                        /> Up
                                        <Radio
                                            value="middle"
                                            name="fan-direction"
                                            disabled={disabled}
                                        /> Middle
                                        <Radio
                                            value="down"
                                            name="fan-direction"
                                            disabled={disabled}
                                        /> Down
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="temperature">
                                <div className="title">Temperature</div>
                                <div className="temp-setting">
                                    <div
                                        className={`temp-button ${disabled ? 'disabled' : ''}`}
                                        onClick={() =>
                                            !disabled && setTemp(t => Math.max(16, t - 1))
                                        }
                                    >
                                        -
                                    </div>
                                    <div className="temp-display">{temp}°C</div>
                                    <div
                                        className={`temp-button ${disabled ? 'disabled' : ''}`}
                                        onClick={() => 
                                            !disabled && setTemp(t => Math.min(30, t + 1))
                                        }
                                    >
                                        +
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Divider flexItem sx={{ width: '100%' }} />
                        <Grid size={12} className="ac-modes">
                            <div className="title">Modes</div>
                            <div className="modes">
                                <div className="mode">
                                    <div className="info">
                                        <div className="subtitle">Sleep Mode</div>
                                        <div className="description">Reduces background activity to save power, automatically enabled when the solar power is low</div>
                                    </div>
                                    <Switch
                                        checked={sleepMode}
                                        onChange={(_, checked) => {
                                            setSleepMode(checked);
                                            if (checked) {
                                                setEcoMode(false);
                                            }
                                        }}
                                        color="success"
                                    />
                                </div>
                                <div className="mode">
                                    <div className="info">
                                        <div className="subtitle">Eco Mode</div>
                                        <div className="description">Optimizes energy consumption by adjusting performance settings</div>
                                    </div>
                                    <Switch
                                        color="success"
                                        checked={ecoMode}
                                        onChange={(_, checked) => {
                                            setEcoMode(checked);
                                            if (checked) {
                                                setSleepMode(false);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}