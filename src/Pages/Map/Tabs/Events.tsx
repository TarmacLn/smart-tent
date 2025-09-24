import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { dataStore, uiStore } from '../../../stores';
import { Button, Divider } from '@mui/material';
import './Events.less';
import Music from '../../../assets/Music.svg';
import { Event } from '../../../stores/types';
import { Brush, Hiking, Restaurant, Spa, Star } from '@mui/icons-material';
import MusicNote from '@mui/icons-material/MusicNote';

export default function Events() {
    const [selectedEvents, setSelectedEvents] = useState<number[]>([]);

    const events: Event[] = [
        {
            id: 1,
            name: "Live Music",
            date: "July 15, 2024",
            time: "18:00 - 20:00",
            location: "Main Stage",
            category: "Music",
            description: "Enjoy live performances from local bands and artists.",
            price: 10.00
        },
        {
            id: 2,
            name: "Art Workshop",
            date: "July 16, 2024",
            time: "10:00 - 12:00",
            location: "Art Tent",
            category: "Art",
            description: "Join us for a fun and creative art workshop suitable for all ages."
        },
        {
            id: 3,
            name: "Yoga Session",
            date: "July 17, 2024",
            time: "08:00 - 09:00",
            location: "Lakeside",
            category: "Wellness",
            description: "Start your day with a refreshing yoga session by the lake."
        },
        {
            id: 4,
            name: "Cooking Class",
            date: "July 18, 2024",
            time: "14:00 - 16:00",
            location: "Community Kitchen",
            category: "Culinary",
            description: "Learn to cook delicious meals using fresh, local ingredients.",
            price: 25.00
        },
        {
            id: 5,
            name: "Stargazing Night",
            date: "July 19, 2024",
            time: "21:00 - 23:00",
            location: "Hilltop",
            category: "Astronomy",
            description: "Explore the night sky with telescopes and expert guides."
        },
        {
            id: 6,
            name: "Nature Hike",
            date: "July 20, 2024",
            time: "09:00 - 11:00",
            location: "Forest Trail",
            category: "Outdoor",
            description: "Join a guided hike through scenic trails and learn about local flora and fauna."
        },
    ];

    const handleSelectEvent = (eventId: number) => {
        if (selectedEvents.includes(eventId)) {
            setSelectedEvents(selectedEvents.filter(id => id !== eventId));
        } else {
            setSelectedEvents([...selectedEvents, eventId]);
            dataStore.addEvent(eventId);
        }
    };

    useEffect(() => {
        dataStore.getEvents().forEach(eventId => {
            if (!selectedEvents.includes(eventId)) {
                setSelectedEvents(prev => [...prev, eventId]);
            }
        });
    }, [selectedEvents]);

    return (
        <div className='Events'>
            <Header
                title='Campsite Events'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className='content'>
                <div className='box'>
                    <div className='title'><Music /> Upcoming Events</div>
                    <Divider sx={{ width: '100%' }} />
                    <div className='subtitle'>Don't miss out on these exciting events happening near the campsite!</div>
                    <div className='events-list'>
                        {events.map(event => (
                            <div className='event-item' key={event.id}>
                                <div className='event-content'>
                                    <div className='event-title'>
                                        <div className='event-icon'>
                                            {event.category === "Music" && <MusicNote fontSize='large' />}
                                            {event.category === "Art" && <Brush fontSize='large' />}
                                            {event.category === "Wellness" && <Spa fontSize='large' />}
                                            {event.category === "Culinary" && <Restaurant fontSize='large' />}
                                            {event.category === "Astronomy" && <Star fontSize='large' />}
                                            {event.category === "Outdoor" && <Hiking fontSize='large' />}
                                        </div>
                                        <div className='event-category'>{event.category}</div>
                                    </div>
                                    <div className='event-details'>
                                        <div className='event-text'>
                                            <div className='event-name'>{event.name}</div>
                                            <div className='event-date'>{event.date}</div>
                                            <div className='event-time'>{event.time}</div>
                                            <div className='event-location'>{event.location}</div>
                                            <div className='event-price'>{event.price ? `${event.price.toFixed(2)}€` : 'Free'}</div>
                                        </div>
                                        <div className='buttons'>
                                            <Button variant='outlined' color='primary' size='small'>
                                                More info
                                            </Button>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                size='small'
                                                onClick={() => handleSelectEvent(event.id)}
                                                disabled={selectedEvents.includes(event.id)}
                                            >
                                                {selectedEvents.includes(event.id) ? 'Joined' : 'Join'}
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        )}
                    </div>
                    <div className='footer'>
                        <Button variant='contained' color='error' size='medium' onClick={() => uiStore.setCurrentTab(0)}>
                            Back to Map
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}