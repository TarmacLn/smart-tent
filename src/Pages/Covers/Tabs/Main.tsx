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
import { CoverTypeEnum } from '../../../stores/types';

function Main() {
    const s = dataStore.getTentStats?.() ?? { humidity: 0, sunshine: 0, groundStability: 0 };
    const humidity = s.humidity ?? 0;
    const sunshine = s.sunshine ?? 0;
    const wind = dataStore.getWind() ?? 0;
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [showTips, setShowTips] = useState(false);
    const onTopCovers = dataStore.getCovers().filter(c => c.type === CoverTypeEnum.OnTop);
    const aroundCovers = dataStore.getCovers().filter(c => c.type === CoverTypeEnum.Around);

    return (
        <div className='Covers'>
            <TipModal
                isVisible={showTips}
                closeModal={() => setShowTips(false)}
            />
            <CoverModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
                type='add'
            />
            <Header
                title='Tent Covers'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className='content'>
                <Grid container flexGrow={1}>
                    <Grid size={8} >
                        <CoverMap />
                    </Grid>
                    <Grid size={4} >
                        <Grid container className='right' flexGrow={1}>
                            <Grid size={12} >
                                <Container className='stats'>
                                    <Grid
                                        container
                                        className='stats-grid'
                                        spacing={1}
                                        flexGrow={1}
                                    >
                                        <Grid size={12} className='title'>
                                            Covers:
                                        </Grid>
                                        <Grid size={12} sx={{ mt: 1, mb: 1 }}>
                                            <Divider />
                                        </Grid>
                                        <Grid container spacing={2} size={12} className='cover-list'>
                                            <Grid size={11} >
                                                <div>On top of the tent:</div>
                                            </Grid>
                                            <Grid size={1} >
                                                <div>{onTopCovers.length}</div>
                                            </Grid>
                                            <Grid size={11} >
                                                <div>Around the tent:</div>
                                            </Grid>
                                            <Grid size={1} >
                                                <div>{aroundCovers.length}</div>
                                            </Grid>
                                        </Grid>
                                        <Grid size={12} className='buttons'>
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
                                        <Grid size={12} className='buttons'>
                                            <Button
                                                className='tip'
                                                variant='outlined'
                                                startIcon={<Tip />}
                                                onClick={() => setShowTips(true)}
                                            >
                                                Open quick tips
                                            </Button>
                                        </Grid>
                                        <Grid size={12} sx={{ mt: 1, mb: 1 }}>
                                            <Divider />
                                        </Grid>
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
                                            <Air />
                                        </Grid>
                                        <Grid size={7} >
                                            <div>Wind</div>
                                        </Grid>
                                        <Grid size={2} >
                                            <div>{wind}%</div>
                                        </Grid>
                                        <Grid size={12} className='button'>
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

