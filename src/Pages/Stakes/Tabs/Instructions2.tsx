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
import { TentTypeEnum } from '../../../stores/types';
import Stake from '../../../assets/Stake.svg';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import './Instructions.less';
import Check from '../../../assets/Check.svg';


//Tab no1
function Instructions2() {
    const navigate = useNavigate();

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={() => uiStore.setCurrentTab(1)}
                color='white'
            />{' '}
            <div className='main'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='content'>
                                <Grid container>
                                    <Grid xs={12} className='step'>
                                        2. Placing the stakes:
                                    </Grid>
                                    <Grid xs={6} className='instructions'>
                                        <Grid container spacing={1}>
                                            <Grid xs={1}><Check /></Grid>
                                            <Grid xs={11}>
                                                Prepare the ground on the spots
                                                you want to put your stakes so
                                                they’re on solid ground, make
                                                sure you check for leaves or
                                                anything that can be considered
                                                unsafe
                                            </Grid>
                                            <Grid xs={1}><Check /></Grid>
                                            <Grid xs={11}>
                                                Make sure your stakes are in
                                                good condition!
                                            </Grid>
                                            <Grid xs={1}><Check /></Grid>
                                            <Grid xs={11}>
                                                Let’s start correctly placing
                                                the stakes!
                                            </Grid>
                                            <Grid xs={1}><Check /></Grid>
                                            <Grid xs={11}>
                                                We will place 4 stakes
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className='image2'></Grid>
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
                                    onClick={() => uiStore.setCurrentTab(3)}
                                >
                                    Continue
                                </Button>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Instructions2;
