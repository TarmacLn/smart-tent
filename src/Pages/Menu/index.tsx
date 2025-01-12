import React from 'react';
import './Menu.less';
import { Box, Container, Divider, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();
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
                                INFO
                            </IconButton>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                // onClick={() => navigate('/left')}
                            >
                                SOUND
                            </IconButton>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                // onClick={() => navigate('/left')}
                            >
                                REFRESH
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
                                EXIT
                            </IconButton>
                        </Box>
                    </Grid>
                <Grid container>
                    <Grid xs={12}>
                        <Box display='flex' justifyContent='center'>
                                <h1>Smart Tent</h1>
                        </Box>
                    </Grid>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='menu'>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/setup')}
                                >
                                    Tent Setup
                                    <div className='imageLA' />
                                </IconButton>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/stakes')}
                                >
                                    Tent Stakes
                                </IconButton>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/covers')}
                                >
                                    Tent Covers
                                </IconButton>
                                <br />
                                <IconButton
                                    aria-label='delete'
                                    color='success'
                                    onClick={() => navigate('/lights')}
                                >
                                    Tent Lights
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
