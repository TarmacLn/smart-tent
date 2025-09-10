import React, { useEffect } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Droplet from '../../../assets/Droplet.svg';
import Air from '../../../assets/Air.svg';
import Sun from '../../../assets/Sun.svg';
import Skull from '../../../assets/Skull.svg'
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import './Complete.less';
import { CoverTypeEnum } from '../../../stores/types';

function Complete() {
    const navigate = useNavigate();
    const humidity = dataStore.getTentStats()?.humidity ?? 0;
    const sunshine = dataStore.getTentStats()?.sunshine ?? 0;
    const wind = dataStore.getWind() ?? 0;
    const onTopCovers = dataStore.getCovers().filter(c => c.type === CoverTypeEnum.OnTop);
    const aroundCovers = dataStore.getCovers().filter(c => c.type === CoverTypeEnum.Around);
    const [recommendation, setRecommendation] = React.useState<string[]>([]);

    useEffect(() => {
        if (humidity >= 80 && recommendation.length < 2) {
            setRecommendation(prev => [...prev, 'High humidity detected. Consider using waterproof covers to prevent condensation inside the tent.']);
        }
        if (sunshine >= 70 && recommendation.length < 2) {
            setRecommendation(prev => [...prev, 'Strong sunshine detected. Using UV-protective covers can help keep the tent cooler and protect against sun damage.']);
        }
        if (wind >= 60 && recommendation.length < 2) {
            setRecommendation(prev => [...prev, 'High wind speeds detected. Ensure all covers are securely fastened to prevent them from being blown away.']);
        }

        if (humidity <= 80 && sunshine <= 70 && wind <= 60) {
            setRecommendation(prev => [...prev, 'Weather conditions are optimal. No additional covers are necessary at this time.']);
        }
    }, [humidity, sunshine, wind]);

    return (
        <div className='Complete'>
            <Header
                title='Tent Covers'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <Grid container>
                    <Grid xs={12} item className='wrapper'>
                        <Container className='banner'>
                            <Container className='container'>
                                <Grid container spacing={1} className='stats'>
                                    <Grid xs={6} className='box'>
                                        <Grid container className='stats-grid' spacing={1}>
                                            <Grid xs={12} className='title'>
                                                Weather Conditions:
                                            </Grid>
                                            <Grid xs={2}>
                                                <Droplet />
                                            </Grid>
                                            <Grid xs={7} className='humidity'>Humidity</Grid>
                                            <Grid xs={3}>{humidity}%</Grid>
                                            <Grid xs={2}>
                                                <Sun />
                                            </Grid>
                                            <Grid xs={7} className='sunshine'>Sunshine</Grid>
                                            <Grid xs={3}>{sunshine}%</Grid>
                                            <Grid xs={2}>
                                                <Air />
                                            </Grid>
                                            <Grid xs={7} className='wind'>Wind</Grid>
                                            <Grid xs={3}>{wind}%</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className='box'>
                                        <Grid container className='stats-grid' spacing={1}>
                                            <Grid xs={12} className='title'>
                                                Covers Used:
                                            </Grid>
                                            <Grid xs={10}>Total Covers:</Grid>
                                            <Grid xs={2}>{onTopCovers.length + aroundCovers.length}</Grid>
                                            <Grid xs={10}> - Covers Above The Tent:</Grid>
                                            <Grid xs={2}>{onTopCovers.length}</Grid>
                                            <Grid xs={10}> - Covers Around The Tent:</Grid>
                                            <Grid xs={2}>{aroundCovers.length}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid xs={12} className='title'>
                                                Recommendations:
                                            </Grid>
                                            {recommendation.map((rec, index) => (
                                                <React.Fragment key={index}>
                                                    <Grid xs={1}>
                                                        <Skull />
                                                    </Grid>
                                                    <Grid xs={11}>
                                                        {rec}
                                                    </Grid>
                                                </React.Fragment>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} className='button'>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            // className='button'
                                            style={{
                                                width: '150px',
                                            }}
                                            onClick={() => {
                                                uiStore.setSuccess(true);
                                                uiStore.setSuccessText('Tent Covers updated successfully!');
                                                navigate('/menu');
                                            }}
                                        >
                                            Complete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(Complete);
