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
import './Intro.less';

//Tab no1
function Intro() {
    const navigate = useNavigate();

    return (
        <div className='Intro'>
            <Header title='Stake Instructions' onClickBack={() => navigate('/menu')} color='white'/>{' '}
            <div className='main'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='title'>
                                <Stake /> Tent Placement Check
                            </div>
                            <Divider />
                            <div className='content'></div>
                            <div className='footer'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{
                                        backgroundColor: 'black',
                                        width: '150px',
                                    }}
                                    onClick={() => uiStore.setCurrentTab(1)}
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

export default Intro;
