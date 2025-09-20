import React, { useEffect, useState } from 'react';
import './Menu.less';
import {
    Alert,
    Badge,
    badgeClasses,
    Box,
    Container,
    Grid,
    IconButton,
    Snackbar,
    styled,
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
import Lock from '../../assets/Lock.svg';
import { dataStore, uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import InfoModal from '../../components/InfoModal';
import RefreshModal from '../../components/RefreshModal';

const BadgeStyled = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Menu() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const disableMenu = !uiStore.TentReady || !uiStore.StakeReady;

    useEffect(() => {
        uiStore.setCurrentTab(0);
        dataStore.clearBasket();
        if (uiStore.Success === true) {
            setText(uiStore.SuccessText);
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
                        uiStore.setSuccess(false);
                        uiStore.setSuccessText('');
                        setOpen(false);
                    }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => {
                            uiStore.setSuccess(false);
                            uiStore.setSuccessText('');
                            setOpen(false);
                        }}
                        severity='success'
                        sx={{ width: '100%' }}
                    >
                        {text}
                    </Alert>
                </Snackbar>
                <Grid container flexGrow={1}>
                    <Grid size={8} >
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
                    <Grid size={4}>
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
                    <Grid container flexGrow={1}>
                        <Grid size={12}>
                            <Box
                                display='flex'
                                justifyContent='center'
                                className='title'
                            >
                                Smart Tent
                            </Box>
                        </Grid>
                        <Grid size={12} >
                            <Container className='container' color='primary'>
                                <div className='menu'>
                                    <br />
                                    <IconButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/setup')}
                                        className='menu-item'
                                    >
                                        <Tent />
                                        <div className='imageLA' />
                                    </IconButton>
                                    <br />
                                    <IconButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/stakes')}
                                        disabled={!uiStore.TentReady}
                                        className='menu-item'
                                    >
                                        <Stake />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={uiStore.TentReady}
                                        />
                                    </IconButton>
                                    <br />
                                    <IconButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/covers')}
                                        disabled={disableMenu}
                                        className='menu-item'
                                    >
                                        <Covers />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </IconButton>
                                    <br />
                                    <IconButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/lights')}
                                        disabled={disableMenu}
                                        className='menu-item'
                                    >
                                        <Light />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </IconButton>
                                    <br />
                                    <IconButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/food')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                    >
                                        <img src="https://img.icons8.com/ios-filled/50/000000/meal.png" alt="Food" />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
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
