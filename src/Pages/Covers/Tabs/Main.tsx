import React, { useEffect, useState } from 'react';
import './Main.less';
import { Button, Container, Divider, Grid } from '@mui/material';
import Droplet from '../../../assets/Droplet.svg';
import Tip from '../../../assets/Tip.svg';
import Sun from '../../../assets/Sun.svg';
import Air from '../../../assets/Air.svg';
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import CoverMap from '../../../components/CoverMap';
import { useNavigate } from 'react-router-dom';
import TipModal from '../../../components/TipModal';
import CoverModal from '../../../components/CoverModal';
import Shield from '../../../assets/Covers.svg';

function Main() {
    const s = dataStore.getTentStats?.() ?? { humidity: 0, sunshine: 0, groundStability: 0 };
    const humidity = s.humidity ?? 0;
    const sunshine = s.sunshine ?? 0;
    const wind = dataStore.getWind() ?? 0;
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [showTips, setShowTips] = useState(false);

    return (
        <div className='Covers'>
            <TipModal
                isVisible={showTips}
                closeModal={() => setShowTips(false)}
            />
            <CoverModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
            />
            <Header
                title='Tent Covers'
                onClickBack={() => navigate('/menu')}
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
                                        <Grid xs={12} item className='title'>
                                            Covers:
                                        </Grid>
                                        <Grid xs={12} item sx={{ mt: 1, mb: 1 }}>
                                            <Divider />
                                        </Grid>
                                        <Grid container spacing={2} xs={12} item className='cover-list'>
                                            <Grid xs={11} item>
                                                <div>On top of the tent:</div>
                                            </Grid>
                                            <Grid xs={1} item>
                                                <div>2</div>
                                            </Grid>
                                            <Grid xs={11} item>
                                                <div>Around the tent:</div>
                                            </Grid>
                                            <Grid xs={1} item>
                                                <div>4</div>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12} item className='buttons'>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                                onClick={() => setIsVisible(true)}
                                            >
                                                Add cover
                                            </Button>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                style={{
                                                    width: '150px',
                                                }}
                                                onClick={() => uiStore.setCurrentTab(2)}
                                            >
                                                Edit cover
                                            </Button>
                                        </Grid>
                                        <Grid xs={12} item className='buttons'>
                                            <Button
                                                className='tip'
                                                variant='outlined'
                                                startIcon={<Tip />}
                                                onClick={() => setShowTips(true)}
                                            >
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
                                            <Air />
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
                                                onClick={() => {
                                                    uiStore.setCurrentTab(1);
                                                }}
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

export default observer(Main);

