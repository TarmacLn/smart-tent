import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { dataStore, uiStore } from '../../../stores';
import { Box, Button, Container, Divider, Slider, Switch, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';
import Light from '../../../assets/BasicLight.svg';
import './Basic.less';

export default function Basic() {
    const [light, setLight] = useState<'on' | 'off'>('off');
    const [tempMode, setTempMode] = useState<'cold' | 'warm'>('cold');
    const [brightness, setBrightness] = useState<number | number[]>(100);
    const [autoMode, setAutoMode] = useState(false);
    const [nightMode, setNightMode] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (dataStore.getLightingMode() !== 'basic') {
            dataStore.setLightingMode('basic');
            dataStore.setLight('off');
            dataStore.setTempMode('cold');
            dataStore.setBrightness(100);
            dataStore.setAutoMode(false);
            dataStore.setNightMode(false);
        }
        setLight(dataStore.getLight());
        setTempMode(dataStore.getTempMode());
        setBrightness(dataStore.getBrightness());
        setAutoMode(dataStore.getAutoMode());
        setNightMode(dataStore.getNightMode());
        setDisabled(dataStore.getAutoMode() || dataStore.getNightMode());
        dataStore.setLightingMode('basic');
    }, []);

    useEffect(() => {
        if (autoMode || nightMode) {
            setLight('on');
            setDisabled(true);

            if (nightMode) {
                setTempMode('warm');
                setBrightness(30);
            } else {
                setTempMode('cold');
                setBrightness(70);
            }
        } else {
            setDisabled(false);
        }
    }, [autoMode, nightMode]);

    const handleSave = () => {
        dataStore.setLight(light);
        dataStore.setTempMode(tempMode);
        dataStore.setBrightness(brightness as number);
        dataStore.setAutoMode(autoMode);
        dataStore.setNightMode(nightMode);
        uiStore.setCurrentTab(0);
    };

    return (
        <div className='Basic'>
            <Header
                title='Basic Lighting Setup'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='main'>
                <Grid container flexGrow={1}>
                    <Container className='container' color='primary'>
                        <div className='title'>
                            <Light /> Basic Lighting
                        </div>
                        <Divider sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.45)' }} />
                        <div className='content'>
                            <Grid container spacing={2} alignItems="stretch" flexGrow={1}>
                                <Grid size={5}>
                                    <Box className='left'>
                                        <Grid container spacing={2} alignItems="center">

                                            <Grid size={12}>
                                                <Grid container alignItems="center" flexGrow={1}>
                                                    <Grid size={6} className="label">Light</Grid>
                                                    <Grid size={6} className="control">
                                                        <ToggleButtonGroup
                                                            value={light}
                                                            exclusive
                                                            onChange={(_, value) => {
                                                                value && setLight(value);
                                                            }}
                                                            size="small"
                                                            className='toggle'
                                                            disabled={disabled}
                                                        >
                                                            <ToggleButton className='toggle-button' value="on" aria-label="on">On</ToggleButton>
                                                            <ToggleButton className='toggle-button' value="off" aria-label="off">Off</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid size={12}>
                                                <Grid container alignItems="center" flexGrow={1}>
                                                    <Grid size={6} className="label">Temperature</Grid>
                                                    <Grid size={6} className="control">
                                                        <ToggleButtonGroup
                                                            value={tempMode}
                                                            exclusive
                                                            onChange={(_, value) => {
                                                                value && setTempMode(value);
                                                            }}
                                                            size="small"
                                                            className='toggle'
                                                            disabled={light === 'off' || disabled}
                                                        >
                                                            <ToggleButton className='toggle-button' value="cold" aria-label="cold">Cold</ToggleButton>
                                                            <ToggleButton className='toggle-button' value="warm" aria-label="warm">Warm</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid size={12} flexGrow={1}>
                                                <Grid container alignItems="center">
                                                    <Grid size={6} className="label">Brightness</Grid>
                                                    <Grid size={6} className="control">
                                                        <Slider
                                                            value={brightness}
                                                            onChange={(_, newValue) => setBrightness(newValue)}
                                                            min={0}
                                                            max={100}
                                                            step={1}
                                                            valueLabelDisplay='auto'
                                                            className='slider'
                                                            disabled={light === 'off' || disabled}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid size={12}>
                                                <Grid container alignItems="center">
                                                    <Grid size={6} className='label'>Light Preview</Grid>
                                                    <Grid size={6} className='control'>
                                                        <div className={`light-preview ${light} ${tempMode}`} style={{ opacity: (brightness as number) / 100 }} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>

                                <Grid size={2} container className='Divider' flexGrow={1}>
                                    <Divider orientation='vertical' flexItem />
                                </Grid>

                                <Grid size={5} >
                                    <Box className='right'>
                                        <div className='switch'>
                                            <div className='label'>
                                                Auto Mode
                                                <Switch
                                                    checked={autoMode}
                                                    onChange={(event) => {
                                                        setAutoMode(event.target.checked);
                                                        if (event.target.checked) {
                                                            setNightMode(false);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className='info'>
                                                In Auto Mode, the tent lights will automatically adjust based on the time of day and ambient light conditions.
                                            </div>
                                        </div>
                                        <Divider sx={{ marginY: 2 }} />
                                        <div className='switch'>
                                            <div className='label'>
                                                Night Mode
                                                <Switch
                                                    checked={nightMode}
                                                    onChange={(event) => {
                                                        setNightMode(event.target.checked);
                                                        if (event.target.checked) {
                                                            setAutoMode(false);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className='info'>
                                                In Night Mode, the tent lights will dim to create a cozy atmosphere.
                                            </div>
                                        </div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                        <div className='footer'>
                            <Button
                                variant='contained'
                                color='secondary'
                                style={{
                                    width: '150px',
                                    marginRight: '20px',
                                }}
                                onClick={() => uiStore.setCurrentTab(0)}
                            >
                                Back
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                style={{
                                    width: '150px',
                                }}
                                onClick={() => handleSave()}
                            >
                                Save
                            </Button>
                        </div>
                    </Container>
                </Grid>
            </div>
        </div>
    )
}