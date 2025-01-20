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
function Instructions3() {
    const navigate = useNavigate();

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={() => uiStore.setCurrentTab(2)}
                color='white'
            />{' '}
            <div className='main'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='content'>
                                <Grid container>
                                    <Grid xs={12} className='step'>
                                        3. Correct Placement:
                                    </Grid>
                                    <Grid xs={6} className='instructions'>
                                        <Grid container spacing={1}>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                Each stake must be inserted into
                                                the ground vertically for utmost
                                                efficiency
                                            </Grid>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                After lightly placing the stake
                                                on the ground use a rock or
                                                another hard solid object to
                                                push the stake into the ground
                                            </Grid>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                Make sure it’s almost completely
                                                under ground for max safety!
                                            </Grid>
                                            <Grid xs={1}>
                                                <Check />
                                            </Grid>
                                            <Grid xs={11}>
                                                In the next step we’re going to
                                                make sure you placed each stake
                                                correctly!
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className='image3'></Grid>
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
                                    onClick={() => uiStore.setCurrentTab(4)}
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

export default Instructions3;
