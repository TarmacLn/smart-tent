import React, { useEffect, useState } from 'react';
import './Menu.less';
import {
    Alert,
    Badge,
    badgeClasses,
    Box,
    Container,
    Grid,
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
import Food from '../../assets/Food.svg';
import Energy from '../../assets/Energy.svg';
import Weather from '../../assets/Weather.svg';
import Map from '../../assets/Map.svg';
import Moon from '../../assets/Moon.svg';
import Sun from '../../assets/Sun.svg';

import Lock from '../../assets/Lock.svg';
import { dataStore, uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import InfoModal from '../../components/InfoModal';
import RefreshModal from '../../components/RefreshModal';
import SoundButton from '../../components/SoundButton';

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
                            <SoundButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => uiStore.setInfoModal(true)}
                                sound='Click'
                            >
                                <Info />
                            </SoundButton>
                            <SoundButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => uiStore.setSound(!uiStore.Sound)}
                                sound='Click'
                            >
                                {uiStore.Sound ? <Speaker /> : <SpeakerMute />}
                            </SoundButton>
                            <SoundButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => uiStore.setRefreshModal(true)}
                                sound='Click'
                            >
                                <Refresh />
                            </SoundButton>
                            <SoundButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => { uiStore.setDarkMode(!uiStore.DarkMode); }}
                                sound='Click'
                            >
                                {uiStore.DarkMode ? <Sun /> : <Moon />}
                            </SoundButton>
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box display='flex' justifyContent='flex-end'>
                            <SoundButton
                                aria-label='right-button'
                                color='secondary'
                                sound='Back'
                            >
                                <Exit />
                            </SoundButton>
                        </Box>
                    </Grid>
                    <Grid container flexGrow={1}>
                        <Grid size={12}>
                            <Box
                                display='flex'
                                justifyContent='center'
                                className='title'
                            >
                                <div className='logo' />
                            </Box>
                        </Grid>
                        <Grid size={12} >
                            <Container className='container' color='primary'>
                                <div className='menu'>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/setup')}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Tent />
                                        <div className='imageLA' />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/stakes')}
                                        // disabled={!uiStore.TentReady}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Stake />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={uiStore.TentReady}
                                        />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/covers')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Covers />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/lights')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Light />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/food')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Food />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/energy')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Energy />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/weather')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Weather />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </SoundButton>
                                    <br />
                                    <SoundButton
                                        aria-label='delete'
                                        color='success'
                                        onClick={() => navigate('/map')}
                                        // disabled={disableMenu}
                                        className='menu-item'
                                        sound='Click'
                                    >
                                        <Map />
                                        <BadgeStyled
                                            badgeContent={<Lock />}
                                            invisible={!disableMenu}
                                        />
                                    </SoundButton>
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
