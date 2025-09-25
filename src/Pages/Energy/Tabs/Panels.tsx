import React, { useState } from "react";
import './Panels.less';
import Header from "../../../components/Header";
import { uiStore } from "../../../stores";
import { Button, Checkbox, Divider, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Sun from '../../../assets/Sun.svg';
import { Device } from "../../../stores/types";
import SoundButton from "../../../components/SoundButton";

export default function Panels() {
    const [powerSaveMode, setPowerSaveMode] = useState(false);
    const [ultraEnergySaveMode, setUltraEnergySaveMode] = useState(false);

    const devices: Device[] = [
        { id: 1, name: 'Mini-Fridge', performance: 85, active: true },
        { id: 2, name: 'Water Heater', performance: 60, active: false },
        { id: 3, name: 'Air Conditioner', performance: 45, active: true },
        { id: 4, name: 'Heater', performance: 30, active: false },
        { id: 5, name: 'Lighting System', performance: 90, active: true },
        { id: 6, name: 'Charging Station', performance: 75, active: true },
    ];

    const getPerformanceClass = (performance: number) => {
        if (performance >= 80) return 'high';
        if (performance >= 50) return 'medium';
        return 'low';
    }

    return (
        <div className="Panels">
            <Header
                title='Energy Management'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className="content" >
                <div className="banner">
                    <Grid container spacing={2}>
                        <Grid size={12} className="banner-title">
                            <div className="title"><Sun /> Solar Panels</div>
                            <div className="description">Manage and monitor your solar panel system to optimize energy generation and storage.</div>
                        </Grid>
                        <Divider flexItem sx={{ width: '100%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                        <Grid size={5}>
                            <div className="title">
                                Manage Device Power Usage
                            </div>
                            <div className="description">
                                Select a device to see details regarding its performance and energy consumption.
                            </div>
                            <div className="table">
                                <TableContainer component={Paper} className="table-container">
                                    <Table stickyHeader size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ width: '60%' }}>Device List</TableCell>
                                                <TableCell sx={{ width: '25%' }}>Performance</TableCell>
                                                <TableCell />
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {devices.map((device) => (
                                                <TableRow key={device.id} hover>
                                                    <TableCell>{device.name}</TableCell>
                                                    <TableCell className="performance-container">
                                                        <div className={`performance ${getPerformanceClass(device.performance)}`}>{device.performance}%</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Checkbox checked={device.active} />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Grid>
                        <Grid size={2} className="divider">
                            <Divider orientation="vertical" flexItem sx={{ height: '100%' }} />
                        </Grid>
                        <Grid size={5} className="switches">
                            <div className="switch">
                                <div className="switch-info">
                                    <div className="switch-title">Power Save Mode</div>
                                    <div className="switch-description">Reduces background activity to save power. Automatically enabled when the solar power is low</div>
                                </div>
                                <div className="switch-control">
                                    <Switch
                                        color="success"
                                        checked={powerSaveMode}
                                        onChange={(e) => {
                                            setPowerSaveMode(e.target.checked);
                                            if (e.target.checked) {
                                                setUltraEnergySaveMode(false);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="switch">
                                <div className="switch-info">
                                    <div className="switch-title">Ultra Energy Save Mode</div>
                                    <div className="switch-description">Minimizes the energy usage of the tent to the minimum and saves it for emergency use.</div>
                                </div>
                                <div className="switch-control">
                                    <Switch
                                        color="success"
                                        checked={ultraEnergySaveMode}
                                        onChange={(e) => {
                                            setUltraEnergySaveMode(e.target.checked);
                                            if (e.target.checked) {
                                                setPowerSaveMode(false);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="recommendation">
                                <div className="recommendation-title">Recommendation:</div>
                                <div className="recommendation-text">Based on current solar energy levels, it is recommended to enable Power Save Mode to optimize energy consumption.</div>
                            </div>
                            <div className="button">
                                <SoundButton variant="contained" color="primary" onClick={() => uiStore.setCurrentTab(0)} sound="Complete">
                                    Apply Changes
                                </SoundButton>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}