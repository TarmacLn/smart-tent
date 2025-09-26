import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import './Main.less';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Music from '../../../assets/Music.svg';
import Warning from '../../../assets/Warning.svg';
import Flower from '../../../assets/Flower.svg';

import { uiStore } from '../../../stores';
import { Button } from '@mui/material';
import AlertModal from '../../../components/AlertModal';
import SoundButton from '../../../components/SoundButton';

function Main() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className='MapMain'>
            <AlertModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
            />
            <Header
                title='Campsite Map'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className='content'>
                <div className='map-main' >
                    <div className='map-banner'>
                        <div className='map-campsite' />
                    </div>
                </div>
                <div className='menu'>
                    <div className='menu-item' onClick={() => uiStore.setCurrentTab(1)}>
                        <div className='menu-item-icon'><Flower /></div>
                        <div className='menu-item-label'>Campsite Sights</div>
                        <div className='menu-item-arrow'><ArrowForwardIosIcon fontSize='large' /> </div>
                    </div>
                    <div className='menu-item' onClick={() => uiStore.setCurrentTab(2)}>
                        <div className='menu-item-icon'><Music /></div>
                        <div className='menu-item-label'>Campsite Events</div>
                        <div className='menu-item-arrow'><ArrowForwardIosIcon fontSize='large' /> </div>
                    </div>
                    <div className='warning'>
                        <div className='warning-title'><Warning /> Weather Alert</div>
                        <div className='warning-description'>Winds are expected to reach speeds of 60 km/h by 2:00 PM on Wednesday 30 September. Please take necessary precautions to secure loose objects and avoid outdoor activities.</div>
                        <div className="warning-description" >Recommended: Stay indoors, secure loose objects, and avoid outdoor activities during peak wind hours. Go to any of the available shelters if you feel unsafe.</div>
                        <div className='buttons'>
                            <Button 
                            variant='outlined' 
                            color='primary' 
                            size='small'
                            onClick={() => setIsVisible(true)}
                            >
                                More info
                            </Button>
                            <SoundButton 
                            variant='contained' 
                            color='primary' 
                            size='small'
                            onClick={() => uiStore.setCurrentTab(3)}
                            sound='Click'
                            >
                                View Shelters
                            </SoundButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Main);

