import React from 'react';
import './TentStats.less';
import {
    Box,
    Button,
    colors,
    Container,
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
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';

function TentStats() {
    const navigate = useNavigate();
    return (
        <div className='TentStats'>
            <Header
                title='Tent Location Details'
                onClickBack={() => uiStore.setCurrentTab(1)}
                color='black'
            />
            <div className='content'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='banner'>
                            <Container className='container'>
                                <Grid container spacing={1} className='stats'>
                                    <Grid xs={12}>
                                        Average stats of the chosen location:
                                    </Grid>
                                    <Grid xs={1}>
                                        <Droplet />
                                    </Grid>
                                    <Grid xs={7}>Average Humidity</Grid>
                                    <Grid xs={2}>60%</Grid>
                                    <Grid xs={2} className='normal'>
                                        (Normal!)
                                    </Grid>
                                    <Grid xs={1}>
                                        <Sun />
                                    </Grid>
                                    <Grid xs={7}>Average Sunshine</Grid>
                                    <Grid xs={2}>80%</Grid>
                                    <Grid xs={2} className='perfect'>
                                        (Perfect!)
                                    </Grid>
                                    <Grid xs={1}>
                                        <Ground />
                                    </Grid>
                                    <Grid xs={7}>Average Ground Stability</Grid>
                                    <Grid xs={2}>45%</Grid>
                                    <Grid xs={2} className='danger'>
                                        (Danger!)
                                    </Grid>
                                    <Grid xs={12} />
                                    <div className='warnings'>
                                        <Grid container>
                                            <Grid xs={1}>
                                                <Skull />
                                            </Grid>
                                            <Grid xs={11}>
                                                The chosen tent location is not
                                                recommended
                                            </Grid>
                                            <Grid xs={1}>
                                                <Skull />
                                            </Grid>
                                            <Grid xs={11}>
                                                The chosen tent location is not
                                                safe
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <Grid xs={12} className='button'>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            className='button'
                                            style={{
                                                backgroundColor: 'black',
                                                width: '150px',
                                            }}
                                            onClick={() => {
                                                uiStore.setTentSuccess(true);
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
