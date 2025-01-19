import React from 'react';
import './TentLocation.less';
import { Box, Button, Container, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Home from '../../../assets/Home.svg';
import Back from '../../../assets/Back.svg';
import Droplet from '../../../assets/Droplet.svg';
import Ground from '../../../assets/Ground.svg';
import Sun from '../../../assets/Sun.svg';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';

function TentLocation() {
    return (
        <div className='TentLocation'>
            <Header
                title='Tent Location'
                onClickBack={() => uiStore.setCurrentTab(0)}
            />
            <div className='content'>
                <Grid container>
                    <Grid xs={9} item>
                        <Container className='banner'>
                            <Container className='map'></Container>
                        </Container>
                    </Grid>
                    <Grid xs={3} item>
                        <Grid container className='right'>
                            <Grid xs={12} item>
                                <Container className='stats'>
                                    <Grid
                                        container
                                        className='stats-grid'
                                        spacing={1}
                                    >
                                        <Grid xs={3} item>
                                            <Home />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Humidity</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>50%</div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Home />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Sunshine</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>50%</div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Home />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Ground Stability</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>50%</div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                            <Grid xs={12} item className='button'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{
                                        backgroundColor: 'black',
                                        width: '150px',
                                    }}
                                    onClick={() => uiStore.setCurrentTab(2)}
                                >
                                    Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default TentLocation;
