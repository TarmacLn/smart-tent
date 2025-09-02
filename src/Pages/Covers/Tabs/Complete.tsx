import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Droplet from '../../../assets/Droplet.svg';
import Ground from '../../../assets/Ground.svg';
import Sun from '../../../assets/Sun.svg';
import Skull from '../../../assets/Skull.svg';
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import { SeverityEnum } from '../../../stores/types';
import { Check } from '@mui/icons-material';
import './Complete.less';

function Complete() {
    const navigate = useNavigate();
    const humidity = dataStore.getTentStats()?.humidity ?? 0;
    const sunshine = dataStore.getTentStats()?.sunshine ?? 0;
    const groundStability = dataStore.getTentStats()?.groundStability ?? 0;
    const severity = dataStore.getSeverity();

    return (
        <div className='Complete'>
            <Header
                title='Tent Covers'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <Grid container>
                    <Grid xs={12} item className='wrapper'>
                        <Container className='banner'>
                            <Container className='container'>
                                <Grid container spacing={1} className='stats'>
                                    <Grid xs={12}>
                                        Average stats of the chosen location:
                                    </Grid>
                                    <Grid xs={1}>
                                        <Droplet />
                                    </Grid>
                                    <Grid xs={7} className='humidity'>Average Humidity</Grid>
                                    <Grid xs={2}>{humidity}%</Grid>
                                    <Grid xs={2} className='humidity'>
                                        Ideal: 60%
                                    </Grid>
                                    <Grid xs={1}>
                                        <Sun />
                                    </Grid>
                                    <Grid xs={7} className='sunshine'>Average Sunshine</Grid>
                                    <Grid xs={2}>{sunshine}%</Grid>
                                    <Grid xs={2} className='sunshine'>
                                        Ideal: 75%
                                    </Grid>
                                    <Grid xs={1}>
                                        <Ground />
                                    </Grid>
                                    <Grid xs={7} className='groundStability'>Average Ground Stability</Grid>
                                    <Grid xs={2}>{groundStability}%</Grid>
                                    <Grid xs={2} className='groundStability'>
                                        Ideal: 95%
                                    </Grid>
                                    <Grid xs={12}>
                                        <Divider />
                                    </Grid>
                                    {
                                        severity === SeverityEnum.Warning ? (
                                        <Grid container spacing={1}>
                                            <Grid xs={1}>
                                                <Skull />
                                            </Grid>
                                            <Grid xs={11} className='warning'>
                                                The chosen tent location is not recommended
                                            </Grid>
                                        </Grid>
                                        ) : severity === SeverityEnum.Normal ? (
                                        <Grid container spacing={1}>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11} className='normal'>
                                                The chosen tent location is recommended
                                            </Grid>
                                        </Grid>
                                        ) : null
                                    }
                                    <Grid xs={12} className='button'>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            className='button'
                                            style={{
                                                width: '150px',
                                            }}
                                            onClick={() => {
                                                uiStore.setSuccess(true);
                                                uiStore.setSuccessText('Tent Covers updated successfully!');
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

export default observer(Complete);
