import React from "react";
import './Main.less';
import { observer } from "mobx-react-lite";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { Divider, Grid } from "@mui/material";
import Sun from '../../../assets/Sun.svg';
import Air from '../../../assets/Air.svg';
import Arrow from '@mui/icons-material/ArrowForwardIos';
import { uiStore } from "../../../stores";

function Main() {
    const navigate = useNavigate();
    return (
        <div className="EnergyMain">
            <Header
                title='Energy Management'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className="content" >
                <div className="menu">
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <div className="title">Energy Overview</div>
                            <div className="description">Monitor and manage your tent's energy consumption with solar panels and air conditioning controls.</div>
                        </Grid>
                        <Grid size={12}>
                            <Grid container spacing={2}>
                                <Grid size={6} className="box-chart">
                                    Solar Power:
                                    <div className="chart" >
                                        <div className="chart-image" />
                                        <div className="chart-value">
                                            50%
                                        </div>
                                        <div className="chart-message">
                                            Optimal sunlight conditions
                                        </div>
                                    </div>
                                </Grid>
                                <Grid size={6} className="box-chart">
                                    Total Performance:
                                    <div className="chart">
                                        <div className="chart-image" />
                                        <div className="chart-value" >
                                            50%
                                        </div>
                                        <div className="chart-message">
                                            Efficient energy usage
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12}>
                            <Divider flexItem sx={{ width: '100%' }} />
                        </Grid>
                        <Grid size={12} className="menu-item" onClick={() => { uiStore.setCurrentTab(1); }}>
                            <Grid container spacing={2}>
                                <Grid size={10}>
                                    <div className="title"><Sun /> Solar Panels</div>
                                    <div className="description">Solar panels energy accumulation, energy consumption, device energy management, power saving mode</div>
                                </Grid>
                                <Grid size={2} className="arrow">
                                    <Arrow fontSize="large" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider flexItem sx={{ width: '100%' }} />
                        <Grid size={12} className="menu-item" onClick={() => { uiStore.setCurrentTab(2); }}>
                            <Grid container spacing={2}>
                                <Grid size={10}>
                                    <div className="title"><Air /> Air Conditioning</div>
                                    <div className="description">Air conditioning energy consumption, temperature settings, power saving mode</div>
                                </Grid>
                                <Grid size={2} className="arrow">
                                    <Arrow fontSize="large" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default observer(Main);