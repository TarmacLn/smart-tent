import React from "react";
import './Panels.less';
import Header from "../../../components/Header";
import { uiStore } from "../../../stores";
import { Button, Checkbox, Divider, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Sun from '../../../assets/Sun.svg';

export default function Panels() {

    const devices = [
        { name: 'Kettle', id: 1 },
        { name: 'Toaster', id: 2 },
        { name: 'Microwave', id: 3 },
        { name: 'Fridge', id: 4 },
        { name: 'Laptop', id: 5 },
        { name: 'Phone Charger', id: 6 },
        { name: 'Lights', id: 7 },
        { name: 'Heater', id: 8 },
        { name: 'Fan', id: 9 },
        { name: 'TV', id: 10 },
        { name: 'Speaker', id: 11 },
        { name: 'Camera', id: 12 },
    ];

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
                        <Grid size={1}>
                            <Sun />
                        </Grid>
                        <Grid size={11} className="banner-title">
                            <div className="title">Solar Panels</div>
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
                                                <TableCell sx={{ width: '85%' }}>Device List</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {devices.map((device) => (
                                                <TableRow key={device.id} hover>
                                                    <TableCell>{device.name}</TableCell>
                                                    <TableCell>
                                                        <Checkbox />
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
                                    <Switch color="success" />
                                </div>
                            </div>
                            <div className="switch">
                                <div className="switch-info">
                                    <div className="switch-title">Ultra Energy Save Mode</div>
                                    <div className="switch-description">Minimizes the energy usage of the tent to the minimum and saves it for emergency use.</div>
                                </div>
                                <div className="switch-control">
                                    <Switch color="success" />
                                </div>
                            </div>
                            <div className="button">
                                <Button variant="contained" color="primary" disabled>
                                    Apply Changes
                                </Button>
                            </div>
                        </Grid>


                    </Grid>
                </div>
            </div>
        </div>
    );
}