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
import Check from '../../../assets/Check.svg';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import './Instructions.less';

//Tab no1
function Instructions1() {
    const navigate = useNavigate();

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='white'
            />{' '}
            <div className='main'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='content'>
                                <Grid container>
                                    <Grid xs={12} className='step'>
                                        1. Before placing your stakes:
                                    </Grid>
                                    <Grid xs={6} className='instructions'>
                                        <Grid container spacing={1}>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                Put your ground tarp on the
                                                floor
                                            </Grid>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                Place the body of your tent on
                                                top of the ground tarp (make
                                                sure the entrance of your tent
                                                is in the correct direction!)
                                            </Grid>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                Assemble your tent poles and
                                                attach the poles to the body of
                                                the tent.
                                            </Grid>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                Start placing your stakes as
                                                instructed on the next page!
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className='image1'></Grid>
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
                                    onClick={() => uiStore.setCurrentTab(2)}
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

export default Instructions1;
