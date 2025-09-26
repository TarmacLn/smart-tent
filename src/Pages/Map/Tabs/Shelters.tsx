import React from 'react';
import Header from '../../../components/Header';
import './Shelters.less';
import { uiStore } from '../../../stores';
import { Button, Divider } from '@mui/material';
import Shelter from '../../../assets/Shelter.svg';
import SoundButton from '../../../components/SoundButton';

export default function Shelters() {

    return (
        <div className='Shelters'>
            <Header
                title='Shelters near you'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <div className='box'>
                    <div className='title'><Shelter /> Nearby Shelters</div>
                    <div className='subtitle'>Please evacuate to one of the nearest shelters immediately if you are in danger.</div>
                    <Divider sx={{ width: '100%' }} />
                    <div className='shelters-list'>
                        <div className='shelter-item'>
                            <div className='shelter-content'>
                                <div className='shelter-title'>
                                    <div className='shelter-name'>Community Center</div>
                                    <div className='shelter-quantity red'>Full</div>
                                </div>
                                <div className='shelter-description'>A safe place for community members during emergencies.</div>
                            </div>
                            <div className='shelter-button'>
                                <Button variant='contained' color='primary' size='small' disabled>
                                    Go
                                </Button>
                            </div>
                        </div>
                    <Divider sx={{ width: '100%' }} />
                        <div className='shelter-item'>
                            <div className='shelter-content'>
                                <div className='shelter-title'>
                                    <div className='shelter-name'>High School Gym</div>
                                    <div className='shelter-quantity yellow'>20 spots left</div>
                                </div>
                                <div className='shelter-description'>A large gymnasium equipped to handle many people.</div>
                            </div>
                            <div className='shelter-button'>
                                <Button variant='contained' color='primary' size='small'>
                                    Go
                                </Button>
                            </div>
                        </div>
                        <Divider sx={{ width: '100%' }} />
                        <div className='shelter-item'>
                            <div className='shelter-content'>
                                <div className='shelter-title'>
                                    <div className='shelter-name'>City Library</div>
                                    <div className='shelter-quantity green'>50 spots left</div>
                                </div>
                                <div className='shelter-description'>A quiet place with resources and shelter during emergencies.</div>
                            </div>
                            <div className='shelter-button'>
                                <Button variant='contained' color='primary' size='small'>
                                    Go
                                </Button>
                            </div>
                        </div>
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