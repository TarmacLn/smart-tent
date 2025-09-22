import React, { useEffect, useState } from 'react';
import './TentLocation.less';
import { Box, Button, Container, Divider, Grid, IconButton } from '@mui/material';
import Droplet from '../../../assets/Droplet.svg';
import Ground from '../../../assets/Ground.svg';
import Sun from '../../../assets/Sun.svg';
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';
import Map from '../../../components/Map';
import { observer } from 'mobx-react-lite';
import { SeverityEnum } from '../../../stores/types';

function TentLocation() {
    const s = dataStore.getTentStats?.() ?? { humidity: 0, sunshine: 0, groundStability: 0 };
    const humidity = s.humidity ?? 0;
    const sunshine = s.sunshine ?? 0;
    const groundStability = s.groundStability ?? 0;
    const severity = dataStore.getSeverity();

    return (
        <div className='TentLocation'>
            <Header
                title='Tent Location'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <Grid container flexGrow={1}>
                    <Grid size={8} >
                        <Map />
                    </Grid>
                    <Grid size={4} >
                        <Grid container className='right' flexGrow={1}>
                            <Grid size={12} >
                                <Container className='stats'>
                                    <Grid container spacing={1} className='stats-grid' flexGrow={1}>
                                        <Grid size={12} >
                                            <div className='attention'>Attention!</div>
                                        </Grid>
                                        <Grid size={12} >
                                            <Divider />
                                        </Grid>
                                        <Grid size={12} >
                                            <div className='red'>Red Cells: Danger</div>
                                        </Grid>
                                        <Grid size={12} >
                                            <div className='yellow'>Yellow Cells : Warning</div>
                                        </Grid>
                                        <Grid size={12} >
                                            <Divider />
                                        </Grid>
                                        {
                                            severity === SeverityEnum.Danger ? (
                                                <Grid size={12} >
                                                    <div className='red'>This area is dangerous!</div>
                                                </Grid>
                                            ) : severity === SeverityEnum.Warning ? (
                                                <Grid size={12} >
                                                    <div className='yellow'>This area is risky.</div>
                                                </Grid>
                                            ) : severity === SeverityEnum.Normal ? (
                                                <Grid size={12} >
                                                    <div className='green'>This area is safe.</div>
                                                </Grid>
                                            ) : null
                                        }
                                    </Grid>
                                </Container>
                            </Grid>
                            <Grid size={12} >
                                <Container className='stats'>
                                    <Grid
                                        container
                                        className='stats-grid'
                                        spacing={1}
                                        flexGrow={1}
                                    >
                                        <Grid size={3} className='icon' >
                                            <Droplet />
                                        </Grid>
                                        <Grid size={7} >
                                            <div>Humidity</div>
                                        </Grid>
                                        <Grid size={2} >
                                            <div>{humidity}%</div>
                                        </Grid>
                                        <Grid size={3} className='icon' >
                                            <Sun />
                                        </Grid>
                                        <Grid size={7} >
                                            <div>Sunshine</div>
                                        </Grid>
                                        <Grid size={2} >
                                            <div>{sunshine}%</div>
                                        </Grid>
                                        <Grid size={3} className='icon' >
                                            <Ground />
                                        </Grid>
                                        <Grid size={7} >
                                            <div>Ground Stability</div>
                                        </Grid>
                                        <Grid size={2} >
                                            <div>{groundStability}%</div>
                                        </Grid>
                                        <Grid size={12}  className='button'>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                                onClick={() => uiStore.setCurrentTab(2)}
                                                disabled={severity === SeverityEnum.Danger || severity === undefined}
                                            >
                                                Continue
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(TentLocation);
