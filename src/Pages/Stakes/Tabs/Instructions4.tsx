import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import './Instructions.less';
import ShieldTick from '../../../assets/ShieldTick.svg';
import Loader from '../../../assets/Loader.svg';
import Check from '../../../assets/Check.svg';

//Tab no1
function Instructions4() {
    const navigate = useNavigate();

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={() => uiStore.setCurrentTab(3)}
                color='white'
            />{' '}
            <div className='main'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='content'>
                                <Grid container>
                                    <Grid xs={12} className='step'>
                                        4. Checking:
                                    </Grid>
                                    <Grid xs={6} className='instructions'>
                                        <Grid container spacing={1}>
                                            <Grid xs={1}>
                                                <ShieldTick />
                                            </Grid>
                                            <Grid xs={10}>
                                                Making sure the stakes are
                                                correctly placed and are
                                                completely under the ground
                                            </Grid>
                                            <Grid xs={1} className='number'>
                                                4/4 <Check />
                                            </Grid>
                                            <Grid xs={1}>
                                                <ShieldTick />
                                            </Grid>
                                            <Grid xs={10}>
                                                Checking if the stakes are in
                                                good condition
                                            </Grid>
                                            <Grid xs={1} className='number'>
                                                4/4 <Check />
                                            </Grid>
                                            <Grid xs={1}>
                                                <ShieldTick />
                                            </Grid>
                                            <Grid xs={10}>
                                                Making sure the stakes are
                                                vertical
                                            </Grid>
                                            <Grid xs={1} className='number'>
                                                4/4 <Check />
                                            </Grid>
                                            <Grid xs={1}>
                                                <ShieldTick />
                                            </Grid>
                                            <Grid xs={10}>
                                                Checking if the stakes are
                                                correctly placed
                                            </Grid>
                                            <Grid xs={1} className='number'>
                                                4/4 <Check />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className='image4'></Grid>
                                    <Grid xs={12} className='complete'>
                                        Congrats! Your stakes are all correctly
                                        placed!
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='footer'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{
                                        backgroundColor: 'black',
                                        width: '150px',
                                    }}
                                    onClick={() => {
                                        uiStore.setStakeSuccess(true);
                                        navigate('/menu');
                                    }}
                                >
                                    Complete!
                                </Button>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Instructions4;
