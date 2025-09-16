import React from 'react';
import './TentStats.less';
import {
    Box,
    Button,
    colors,
    Container,
    Divider,
    Grid,
    IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Home from '../../../assets/Home.svg';
import Back from '../../../assets/Back.svg';
import Droplet from '../../../assets/Droplet.svg';
import Ground from '../../../assets/Ground.svg';
import Sun from '../../../assets/Sun.svg';
import Skull from '../../../assets/Skull.svg';
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import { SeverityEnum } from '../../../stores/types';
import { Check } from '@mui/icons-material';

function TentStats() {
    const navigate = useNavigate();
    const humidity = dataStore.getTentStats()?.humidity ?? 0;
    const sunshine = dataStore.getTentStats()?.sunshine ?? 0;
    const groundStability = dataStore.getTentStats()?.groundStability ?? 0;
    const severity = dataStore.getSeverity();

    return (
        <div className='TentStats'>
            <Header
                title='Tent Location Details'
                onClickBack={() => uiStore.setCurrentTab(1)}
                color='black'
            />
            <div className='content'>
                <Grid container flexGrow={1}>
                    <Grid size={12} >
                        <Container className='banner'>
                            <Container className='container'>
                                <Grid container spacing={1} className='stats' flexGrow={1}>
                                    <Grid size={12}>
                                        Average stats of the chosen location:
                                    </Grid>
                                    <Grid size={1}>
                                        <Droplet />
                                    </Grid>
                                    <Grid size={7} className='humidity'>Average Humidity</Grid>
                                    <Grid size={2}>{humidity}%</Grid>
                                    <Grid size={2} className='humidity'>
                                        Ideal: 60%
                                    </Grid>
                                    <Grid size={1}>
                                        <Sun />
                                    </Grid>
                                    <Grid size={7} className='sunshine'>Average Sunshine</Grid>
                                    <Grid size={2}>{sunshine}%</Grid>
                                    <Grid size={2} className='sunshine'>
                                        Ideal: 75%
                                    </Grid>
                                    <Grid size={1}>
                                        <Ground />
                                    </Grid>
                                    <Grid size={7} className='groundStability'>Average Ground Stability</Grid>
                                    <Grid size={2}>{groundStability}%</Grid>
                                    <Grid size={2} className='groundStability'>
                                        Ideal: 95%
                                    </Grid>
                                    <Grid size={12}>
                                        <Divider />
                                    </Grid>
                                    {
                                        severity === SeverityEnum.Warning ? (
                                        <Grid container spacing={1} flexGrow={1}>
                                            <Grid size={1}>
                                                <Skull />
                                            </Grid>
                                            <Grid size={11} className='warning'>
                                                The chosen tent location is not recommended
                                            </Grid>
                                        </Grid>
                                        ) : severity === SeverityEnum.Normal ? (
                                        <Grid container spacing={1} flexGrow={1}>
                                            <Grid size={1}>
                                                <Check />
                                            </Grid>
                                            <Grid size={11} className='normal'>
                                                The chosen tent location is recommended
                                            </Grid>
                                        </Grid>
                                        ) : null
                                    }
                                    <Grid size={12} className='button'>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            className='button'
                                            style={{
                                                width: '150px',
                                            }}
                                            onClick={() => {
                                                uiStore.setSuccess(true);
                                                uiStore.setSuccessText('Tent Setup completed successfully!');
                                                uiStore.setTentReady(true);
                                                navigate('/menu');
                                            }}
                                        >
                                            Complete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(TentStats);
