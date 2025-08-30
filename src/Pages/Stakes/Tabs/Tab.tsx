import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import './Instructions.less';
import Stake from '../../../assets/Stake.svg';

//Tab base
export function Tab(
    {
        id,
        title,
        instructions,
        onClick,
        loadingProgress
    }: {

        id: number;
        title: string;
        instructions: React.ReactNode;
        onClick: () => void;
        loadingProgress?: number;
    }
) {
    const navigate = useNavigate();
    const finishEnabled = id === 4 && loadingProgress === 4;

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='white'
            />
            <div className='main'>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='title'>
                                <Stake /> Tent Stakes
                            </div>
                            <Divider />
                            <div className='content'>
                                <Grid container>
                                    <Grid xs={12} className='step'>
                                        {title}
                                    </Grid>
                                    <Grid xs={6} className='instructions'>
                                        {instructions}
                                    </Grid>
                                    <Grid xs={6} className={`image${id}`}></Grid>
                                </Grid>
                            </div>
                            <div className='footer'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{
                                        width: '150px',
                                    }}
                                    onClick={() => onClick()}
                                    disabled={finishEnabled === false && id === 4}
                                >
                                    {id === 4 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}