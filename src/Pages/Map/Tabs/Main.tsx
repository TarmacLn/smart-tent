import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './Main.less';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Home from '../../../assets/Home.svg';
import Music from '../../../assets/Music.svg';
import Warning from '../../../assets/Warning.svg';
import Car from '../../../assets/Car.svg';
import Flower from '../../../assets/Flower.svg';

import { uiStore } from '../../../stores';

function Main() {
    const navigate = useNavigate();

    return (
        <div className='MapMain'>
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
                    <div className='menu-item' onClick={() => uiStore.setCurrentTab(3)}>
                        <div className='menu-item-icon'><Warning /></div>
                        <div className='menu-item-label'>Weather Alert</div>
                        <div className='menu-item-arrow'><ArrowForwardIosIcon fontSize='large' /> </div>
                    </div>
                    <div className='menu-item' onClick={() => uiStore.setCurrentTab(4)}>
                        <div className='menu-item-icon'><Car /></div>
                        <div className='menu-item-label'>View Shelters</div>
                        <div className='menu-item-arrow'><ArrowForwardIosIcon fontSize='large' /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Main);

