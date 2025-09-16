import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { dataStore, uiStore } from '../../../stores';
import { Box, Button, Container, Divider, Grid, Popover, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ColourIcon from '../../../assets/Colour.svg';
import './Colour.less';
import { LightModeEnum } from '../../../stores/types';
import { data, useNavigate } from 'react-router-dom';

export default function Colour() {
    const [colorMode, setColorMode] = useState<'single' | 'multiple'>('single');
    const [lightMode, setLightMode] = useState<LightModeEnum>(LightModeEnum.Static);
    const [colors, setColors] = useState<string[]>(
        Array(5).fill('#d0d0d0')
    );

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const popOpen = Boolean(anchorEl);

    const openPicker = (e: React.MouseEvent<HTMLElement>, idx: number) => {
        setSelectedIndex(idx);
        setAnchorEl(e.currentTarget);
    };

    const closePicker = () => {
        setAnchorEl(null);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = [...colors];
        next[selectedIndex] = e.target.value;
        setColors(next);
    };

    const previewColors = colorMode === 'single' ? [colors[0]] : colors;

    useEffect(() => {
        if (dataStore.getLightingMode() === 'colour') {
            setColorMode(dataStore.getColourMode());
            setLightMode(dataStore.getLightMode());
            const storedColors = dataStore.getColours();
            if (storedColors.length > 0) {
                const next = [...colors];
                for (let i = 0; i < Math.min(storedColors.length, next.length); i++) {
                    next[i] = storedColors[i];
                }
                setColors(next);
            }
        }
    }, []);

    const navigate = useNavigate();
    const handleSave = () => {
        dataStore.setColourMode(colorMode);
        dataStore.setLightMode(lightMode);
        dataStore.setColours(previewColors);
        dataStore.setLightingMode('colour');
        uiStore.setCurrentTab(0);
        navigate('/menu');
    };

    return (
        <div className='Colour'>
            <Header
                title='Colour Lighting Setup'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <Popover
                open={popOpen}
                anchorEl={anchorEl}
                onClose={closePicker}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Box sx={{ p: 1 }}>
                    <input
                        type="color"
                        value={colors[selectedIndex]}
                        onChange={handleColorChange}
                        aria-label="Choose color"
                        style={{ width: 48, height: 36, border: 'none', padding: 0, background: 'transparent' }}
                    />
                </Box>
            </Popover>
            <div className='main'>
                <Grid container flexGrow={1}>
                    <Container className='container' color='primary'>
                        <div className='title'>
                            <ColourIcon /> Color Lighting
                        </div>
                        <Divider sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.45)' }} />
                        <div className='content'>
                            <Grid container spacing={2} alignItems="stretch" flexGrow={1}>
                                <Grid size={5}>
                                    <Box className='left'>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid size={6} className="label">Color Mode:</Grid>
                                            <Grid size={6} className="control">
                                                <ToggleButtonGroup
                                                    value={colorMode}
                                                    exclusive
                                                    onChange={(_, value) => {
                                                        value && setColorMode(value);
                                                    }}
                                                    size="small"
                                                    className='toggle'
                                                >
                                                    <ToggleButton className='toggle-button' value="single" aria-label="single">Single</ToggleButton>
                                                    <ToggleButton className='toggle-button' value="multiple" aria-label="multiple">Multiple</ToggleButton>
                                                </ToggleButtonGroup>
                                            </Grid>
                                            <Grid size={6} className="label">Colors:</Grid>
                                            <Grid size={6} className="info">
                                                {colorMode === 'single' ? (
                                                    <div
                                                        role="button"
                                                        tabIndex={0}
                                                        className='colour-box'
                                                        onClick={(e) => openPicker(e, 0)}
                                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openPicker(e as any, 0); }}
                                                        style={{ backgroundColor: colors[0] }}
                                                    />
                                                ) : (
                                                    <>
                                                        {colors.slice(0, 5).map((c, idx) => (
                                                            <div
                                                                key={idx}
                                                                role="button"
                                                                tabIndex={0}
                                                                className='colour-box'
                                                                onClick={(e) => openPicker(e, idx)}
                                                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openPicker(e as any, idx); }}
                                                                style={{ backgroundColor: c }}
                                                            />
                                                        ))}
                                                    </>
                                                )}
                                            </Grid>
                                            <Grid size={12} sx={{ height: '100%', marginTop: '20px' }} >
                                                <Divider flexItem />
                                            </Grid>

                                            <Grid size={6} className="label">
                                                Lighting Modes:
                                            </Grid>
                                            <Grid size={6} className="control">
                                                <ToggleButtonGroup
                                                    value={lightMode}
                                                    exclusive
                                                    onChange={(_, value) => {
                                                        value && setLightMode(value);
                                                    }}
                                                    size="small"
                                                    className='toggle full-width'
                                                >
                                                    <ToggleButton className='toggle-button' value={LightModeEnum.Static} aria-label="static">Static</ToggleButton>
                                                    <ToggleButton className='toggle-button' value={LightModeEnum.Twinkle} aria-label="twinkle">Twinkle</ToggleButton>
                                                    <ToggleButton className='toggle-button' value={LightModeEnum.Flashing} aria-label="flashing">Flashing</ToggleButton>
                                                </ToggleButtonGroup>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>

                                <Grid size={2} container className='Divider'>
                                    <Divider orientation='vertical' flexItem />
                                </Grid>

                                <Grid size={5}>
                                    <Box className='right'>
                                        <div className='label'>Preview:</div>
                                        <div className='preview'>
                                            <div
                                                className={`big-preview ${lightMode} ${colorMode}`}
                                                role="presentation"
                                            >
                                                {previewColors.map((c, i) => (
                                                    <div
                                                        key={i}
                                                        className="preview-layer"
                                                        style={{
                                                            backgroundColor: c,
                                                            animationDelay: `${i * 0.25}s`,
                                                        }}
                                                    />
                                                ))}
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
                </Grid >
            </div >
        </div >
    )
}