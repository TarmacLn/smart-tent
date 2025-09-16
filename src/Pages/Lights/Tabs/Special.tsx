import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Grid, Tab, Tabs } from '@mui/material';
import './Special.less';
import Header from '../../../components/Header';
import { dataStore, uiStore } from '../../../stores';
import SpecialIcon from '../../../assets/Special.svg';
import RustlingLeaves from '../../../assets/RustlingLeaves.svg';
import Lightning from '../../../assets/Lightning.svg';
import Forest from '../../../assets/Forest.svg';
import Party from '../../../assets/Party.svg';
import Birthday from '../../../assets/Birthday.svg';
import Disco from '../../../assets/Disco.svg';
import Sunrise from '../../../assets/Sunrise.svg';
import Sunset from '../../../assets/Sunset.svg';
import Dreamland from '../../../assets/Dreamland.svg';
import { SpecialThemeEnum } from '../../../stores/types';
import ThemePreview from '../../../components/ThemePreview';
import { useNavigate } from 'react-router-dom';

export default function Special() {
    const [value, setValue] = useState(0);
    const [selectedTheme, setSelectedTheme] = useState<SpecialThemeEnum | undefined>(undefined);

    useEffect(() => {
        const themeEnum = dataStore.getSpecialTheme();
        const theme = dataStore.getTheme(themeEnum);

        setSelectedTheme(themeEnum);
        if (theme) setValue(theme.tab);
    }, []);

    const imageMap = {
        [SpecialThemeEnum.RustlingLeaves]: <RustlingLeaves />,
        [SpecialThemeEnum.Lightning]: <Lightning />,
        [SpecialThemeEnum.Forest]: <Forest />,
        [SpecialThemeEnum.Party]: <Party />,
        [SpecialThemeEnum.Birthday]: <Birthday />,
        [SpecialThemeEnum.Disco]: <Disco />,
        [SpecialThemeEnum.Sunrise]: <Sunrise />,
        [SpecialThemeEnum.Sunset]: <Sunset />,
        [SpecialThemeEnum.Dreamland]: <Dreamland />,
    };
    const image = imageMap[selectedTheme as SpecialThemeEnum] ?? <div>No Theme Selected</div>;

    const navigate = useNavigate();

    const handleSave = () => {
        if (selectedTheme) {
            dataStore.setSpecialTheme(selectedTheme);
            dataStore.setLightingMode('special');
            uiStore.setCurrentTab(0);
            navigate('/menu');
        }
    };

    return (
        <div className='Special'>
            <Header
                title='Special Lighting Setup'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='main'>
                <Grid container flexGrow={1}>
                    <Container className='container' color='primary'>
                        <div className='title'>
                            <SpecialIcon /> Special Lighting
                        </div>
                        <Divider sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.45)' }} />
                        <div className='content'>
                            <Grid container flexGrow={1}>

                                <Grid size={6}>
                                    <Grid container flexGrow={1} sx={{ marginTop: '20px' }}>
                                        <Grid size={12}>
                                            <div className='label'>
                                                Themes
                                            </div>
                                        </Grid>
                                        <Grid size={12}>
                                            <div className='description'>
                                                Choose a pre-made lighting mode based on a theme!
                                            </div>
                                        </Grid>

                                        <Grid size={12}>
                                            <div className='tabs'>
                                                <Box>
                                                    <Tabs
                                                        value={value}
                                                        onChange={(_, newValue) => {
                                                            setValue(newValue);
                                                            setSelectedTheme(undefined);
                                                        }}
                                                        variant="fullWidth"
                                                    >
                                                        <Tab
                                                            value={0}
                                                            label="Nature"
                                                        />
                                                        <Tab value={1} label="Party" />
                                                        <Tab value={2} label="Serene" />
                                                    </Tabs>
                                                    {value === 0 && (
                                                        <div className='theme-list'>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.RustlingLeaves)}>
                                                                <RustlingLeaves />
                                                            </div>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Lightning)}>
                                                                <Lightning />
                                                            </div>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Forest)}>
                                                                <Forest />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {value === 1 && (
                                                        <div className='theme-list'>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Party)}>
                                                                <Party />
                                                            </div>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Birthday)}>
                                                                <Birthday />
                                                            </div>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Disco)}>
                                                                <Disco />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {value === 2 && (
                                                        <div className='theme-list'>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Sunrise)}>
                                                                <Sunrise />
                                                            </div>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Sunset)}>
                                                                <Sunset />
                                                            </div>
                                                            <div className='theme-item' onClick={() => setSelectedTheme(SpecialThemeEnum.Dreamland)}>
                                                                <Dreamland />
                                                            </div>
                                                        </div>
                                                    )}
                                                </Box>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid size={6}>
                                    <ThemePreview themeEnum={selectedTheme} image={image} />
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
                                disabled={!selectedTheme}
                            >
                                Save
                            </Button>
                        </div>
                    </Container>
                </Grid >
            </div>
        </div >
    );
}