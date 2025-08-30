import React, { useState } from 'react';
import './TentLocation.less';
import { Box, Button, Container, Divider, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Home from '../../../assets/Home.svg';
import Back from '../../../assets/Back.svg';
import Droplet from '../../../assets/Droplet.svg';
import Ground from '../../../assets/Ground.svg';
import Sun from '../../../assets/Sun.svg';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import Map from '../../../components/Map';

function TentLocation() {

    return (
        <div className='TentLocation'>
            <Header
                title='Tent Location'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <Grid container>
                    <Grid md={7} xs={12} item>
                        <Map />
                    </Grid>
                    <Grid md={5} xs={12} item>
                        <Grid container className='right'>
                            <Grid xs={6} item>
                                <Container className='stats'>
                                    <Grid container spacing={1} className='stats-grid'>
                                        <Grid xs={12} item>
                                            <div className='attention'>Attention!</div>
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Divider />
                                        </Grid>
                                        <Grid xs={12} item>
                                            <div className='red'>Red : Danger</div>
                                        </Grid>
                                        <Grid xs={12} item>
                                            <div className='orange'>Orange : Warning</div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                            <Grid xs={6} item>
                                <Container className='stats'>
                                    <Grid
                                        container
                                        className='stats-grid'
                                        spacing={1}
                                    >
                                        <Grid xs={3} item>
                                            <Droplet />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Humidity</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>50%</div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Sun />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Sunshine</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>50%</div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Ground />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Ground Stability</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>50%</div>
                                        </Grid>
                                        <Grid xs={12} item className='button'>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                                onClick={() => uiStore.setCurrentTab(2)}
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

export default TentLocation;
