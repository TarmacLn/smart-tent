import React from 'react';
import Header from '../../../components/Header';
import { uiStore } from '../../../stores';
import { Button, Divider } from '@mui/material';
import './Sights.less';
import Flower from '../../../assets/Flower.svg';
import { Sight } from '../../../stores/types';
import SoundButton from '../../../components/SoundButton';

export default function Sights() {

    const sights: Sight[] = [
        {
            id: 1,
            name: "Sunset",
            description: "A beautiful spot to watch the sunset over the hills.",
            image: "../../../assets/banner.png",
            location: "Northwest of the campsite",
            distance: "1.2 km"
        },
        {
            id: 2,
            name: "River Walk",
            description: "A scenic walk along the river with opportunities to spot wildlife.",
            image: "../../../assets/banner.png",
            location: "East of the campsite",
            distance: "0.8 km"
        },
        {
            id: 3,
            name: "Old Tree",
            description: "A majestic old oak tree that is over 200 years old.",
            image: "../../../assets/banner.png",
            location: "South of the campsite",
            distance: "0.5 km"
        },
        {
            id: 4,
            name: "Hill View",
            description: "A short hike to a hilltop with panoramic views of the surrounding area.",
            image: "../../../assets/banner.png",
            location: "West of the campsite",
            distance: "1.5 km"
        }
    ];

    return (
        <div className='Sights'>
            <Header
                title='Campsite Sights'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <div className='box'>
                    <div className='title'><Flower /> Beautiful Sights</div>
                    <Divider sx={{ width: '100%' }} />
                    <div className='subtitle'>Explore the stunning sights around the campsite!</div>
                    <div className='sights-list'>
                        {sights.map(sight => (
                            <div className='sight-item' key={sight.id}>
                                <div className='sight-content'>
                                    <div className='sight-title'>
                                        <div className='sight-icon'>
                                            <Flower />
                                        </div>
                                        <div className='sight-category'>{sight.name}</div>
                                    </div>
                                    <div className='sight-details'>
                                        <div className='sight-text'>
                                            <div className='sight-description'>{sight.description}</div>
                                            <div className='sight-distance'>{sight.distance} away</div>
                                        </div>
                                        <div className='buttons'>
                                            <Button variant='outlined' color='primary' size='small'>
                                                More info
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        )}
                    </div>
                    <div className='footer'>
                        <SoundButton variant='contained' color='error' size='medium' onClick={() => uiStore.setCurrentTab(0)} sound='Back'>
                            Back to Map
                        </SoundButton>
                    </div>
                </div>
            </div>
        </div>
    )
}