import React, { useEffect, useState } from 'react';
import './Menu.less';
import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Modal,
    Snackbar,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Info from '../../assets/Info.svg';
import Speaker from '../../assets/Speaker.svg';
import SpeakerMute from '../../assets/SpeakerMute.svg';
import Refresh from '../../assets/Refresh.svg';
import Exit from '../../assets/Exit.svg';
import Tent from '../../assets/Tent.svg';
import Stake from '../../assets/Stake.svg';
import Covers from '../../assets/Covers.svg';
import Light from '../../assets/Light.svg';
import { uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import InfoModal from '../../components/InfoModal';
import RefreshModal from '../../components/RefreshModal';

function Menu() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        uiStore.setCurrentTab(0);
        if (uiStore.TentSuccess === true) {
            setText('Tent Location set successfully!');
            setOpen(true);
        } else if (uiStore.StakeSuccess === true) {
            setText('Tent Stakes set successfully!');
            setOpen(true);
        }
    }, []);

    return (
        <div className='Menu'>
            <noscript>
                <div className='noscript-error'>
                    <p>
                        JavaScript is disabled in your browser. Please enable
                        JavaScript to use this application.
                    </p>
                </div>
            </noscript>
            <InfoModal />
            <RefreshModal />
            <div className='menu-items'>
                <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={() => {
                        uiStore.setTentSuccess(false);
                        uiStore.setStakeSuccess(false);
                        setOpen(false);
                    }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => {
                            uiStore.setTentSuccess(false);
                            uiStore.setStakeSuccess(false);
                            setOpen(false);
                        }}
                        severity='success'
                        sx={{ width: '100%' }}
                    >
                        {text}
                    </Alert>
                </Snackbar>
                <Grid container>
                    <Grid xs={8} item>
                        <Box display='flex' justifyContent='flex-start'>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => uiStore.setInfoModal(true)}
                            >
                                <Info />
                            </IconButton>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => uiStore.setSound(!uiStore.Sound)}
                            >
                                {uiStore.Sound ? <Speaker /> : <SpeakerMute />}
                            </IconButton>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => uiStore.setRefreshModal(true)}
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
                            <Box
                                display='flex'
                                justifyContent='center'
                                className='title'
                            >
                                Smart Tent
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

export default observer(Menu);
