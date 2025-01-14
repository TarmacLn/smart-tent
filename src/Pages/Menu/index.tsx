import React, { useEffect } from 'react';
import './Menu.less';
import { Box, Container, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Info from '../../assets/Info.svg';
import Speaker from '../../assets/Speaker.svg';
import Refresh from '../../assets/Refresh.svg';
import Exit from '../../assets/Exit.svg';
import Tent from '../../assets/Tent.svg';
import Stake from '../../assets/Stake.svg';
import Covers from '../../assets/Covers.svg';
import Light from '../../assets/Light.svg';
import { uiStore } from '../../stores';

function Menu() {
    const navigate = useNavigate();

    useEffect(() => {
        uiStore.setCurrentTab(0);
    }, []);
    
    return (
        <div className='Menu'>
            <div className='menu-items'>
                <Grid container >
                    <Grid xs={8} item>
                        <Box display='flex' justifyContent='flex-start'>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                // onClick={() => navigate('/left')}
                            >
                                <Info />                            
                            </IconButton>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                // onClick={() => navigate('/left')}
                            >
                                <Speaker />                            
                            </IconButton>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                // onClick={() => navigate('/left')}
                            >
                                <Refresh />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box display='flex' justifyContent='flex-end'>
                            <IconButton
                                aria-label='right-button'
                                color='secondary'
                                // onClick={() => navigate('/right')}
                            >
                                <Exit />
                            </IconButton>
                        </Box>
                    </Grid>
                <Grid container>
                    <Grid xs={12}>
                        <Box display='flex' justifyContent='center' className='title'>
                                Smart Tent
                        </Box>
                    </Grid>
                    <Grid xs={12} item>
                        <Container className='container' color='primary' >
                            <div className='menu'>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/setup')}
                                >
                                    <Tent />
                                    <div className='imageLA' />
                                </IconButton>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/stakes')}
                                >
                                    <Stake />
                                </IconButton>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/covers')}
                                >
                                    <Covers />
                                </IconButton>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/lights')}
                                >
                                    <Light />
                                </IconButton>
                                <br />
                            </div>
                        </Container>
                    </Grid>
                </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Menu;
