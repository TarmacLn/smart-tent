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
    const finishEnabled = id === 4 && loadingProgress === 4;
    const navigate = useNavigate();
    const onClickBack = () => {
        if (id === 0) {
            navigate('/menu');
        } else {
            uiStore.setCurrentTab(id - 1);
        }
    };

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={onClickBack}
                color='black'
            />
            <div className='main'>
                <Grid container flexGrow={1}>
                    <Grid size={12} >
                        <Container className='container' color='primary'>
                            <div className='title'>
                                <Stake /> Tent Stakes
                            </div>
                            <Divider />
                            <div className='content'>
                                <Grid container flexGrow={1}>
                                    <Grid size={12} className='step'>
                                        {title}
                                    </Grid>
                                    <Grid size={6} className='instructions'>
                                        {instructions}
                                    </Grid>
                                    <Grid size={6} className={`image${id}`}></Grid>
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