import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Droplet from '../../../assets/Droplet.svg';
import Air from '../../../assets/Air.svg';
import Sun from '../../../assets/Sun.svg';
import Skull from '../../../assets/Skull.svg'
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import './Complete.less';

function Complete() {
    const navigate = useNavigate();
    const humidity = dataStore.getTentStats()?.humidity ?? 0;
    const sunshine = dataStore.getTentStats()?.sunshine ?? 0;
    const wind = dataStore.getWind() ?? 0;

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
                                    <Grid xs={6} className='box'>
                                        <Grid container className='stats-grid' spacing={1}>
                                            <Grid xs={12} className='title'>
                                                Weather Conditions:
                                            </Grid>
                                            <Grid xs={2}>
                                                <Droplet />
                                            </Grid>
                                            <Grid xs={7} className='humidity'>Humidity</Grid>
                                            <Grid xs={3}>{humidity}%</Grid>
                                            <Grid xs={2}>
                                                <Sun />
                                            </Grid>
                                            <Grid xs={7} className='sunshine'>Sunshine</Grid>
                                            <Grid xs={3}>{sunshine}%</Grid>
                                            <Grid xs={2}>
                                                <Air />
                                            </Grid>
                                            <Grid xs={7} className='wind'>Wind</Grid>
                                            <Grid xs={3}>{wind}%</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className='box'>
                                        <Grid container className='stats-grid' spacing={1}>
                                            <Grid xs={12} className='title'>
                                                Covers Used:
                                            </Grid>
                                            <Grid xs={10}>Total Covers:</Grid>
                                            <Grid xs={2}>4</Grid>
                                            <Grid xs={10}> - Covers Above The Tent:</Grid>
                                            <Grid xs={2}>3</Grid>
                                            <Grid xs={10}> - Covers Around The Tent:</Grid>
                                            <Grid xs={2}>1</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid xs={12} className='title'>
                                                Recommendations:
                                            </Grid>
                                            <Grid xs={1}>
                                                <Skull />
                                            </Grid>
                                            <Grid xs={11}>
                                                Very important recommendation
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} className='button'>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            // className='button'
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
