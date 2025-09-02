import React, { useEffect, useState } from 'react';
import './Covers.less';
import { Button, Container, Divider, Grid } from '@mui/material';
import Droplet from '../../assets/Droplet.svg';
import Ground from '../../assets/Ground.svg';
import Tip from '../../assets/Tip.svg';
import Sun from '../../assets/Sun.svg';
import { dataStore, uiStore } from '../../stores';
import Header from '../../components/Header';
import { observer } from 'mobx-react-lite';
import CoverMap from '../../components/CoverMap';

function Covers() {
    const s = dataStore.getTentStats?.() ?? { humidity: 0, sunshine: 0, groundStability: 0 };
    const humidity = s.humidity ?? 0;
    const sunshine = s.sunshine ?? 0;
    const wind = dataStore.getWind() ?? 0;

    return (
        <div className='Covers'>
            <Header
                title='Tent Covers'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <Grid container>
                    <Grid md={7} xs={12} item>
                        <CoverMap />
                    </Grid>
                    <Grid md={5} xs={12} item>
                        <Grid container className='right'>
                            <Grid xs={12} item>
                                <Container className='stats'>
                                    <Grid
                                        container
                                        className='stats-grid'
                                        spacing={1}
                                    >
                                        <Grid xs={12} item className='buttons'>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                            >
                                                Add cover
                                            </Button>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                            >
                                                Edit cover
                                            </Button>
                                        </Grid>
                                        <Grid xs={12} item className='buttons'>
                                            <Button className='tip' variant='outlined' startIcon={<Tip />}>
                                                Open quick tips
                                            </Button>
                                        </Grid>
                                        <Grid xs={12} item sx={{ mt: 1, mb: 1 }}>
                                            <Divider />
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Droplet />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Humidity</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>{humidity}%</div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Sun />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Sunshine</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>{sunshine}%</div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <Ground />
                                        </Grid>
                                        <Grid xs={7} item>
                                            <div>Wind</div>
                                        </Grid>
                                        <Grid xs={2} item>
                                            <div>{wind}%</div>
                                        </Grid>
                                        <Grid xs={12} item className='button'>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                            // onClick={}
                                            // disabled={severity === SeverityEnum.Danger || severity === undefined}
                                            >
                                                Complete
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

export default observer(Covers);

