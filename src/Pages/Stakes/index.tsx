import React, { useEffect, useRef } from 'react';
import { dataStore, uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import { Tab } from './Tabs/Tab';
import { Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import ShieldTick from '../../assets/ShieldTick.svg';
import { useNavigate } from 'react-router-dom';
import { TentTypeEnum } from '../../stores/types';
import Loader from '../../assets/Loader.svg';

function Stakes() {
    const [currentTab, setCurrentTab] = React.useState(uiStore.CurrentTab);
    const navigate = useNavigate();
    const [loadingProgress, setLoadingProgress] = React.useState(0); // 0..4
    const timerRef = useRef<number | null>(null);

    const tabContent = [
        {
            id: 0,
            title: '0. Tent Checks:',
            instructions:
                <Grid container spacing={1}>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Your tent type is a {dataStore.getTent()?.type === TentTypeEnum.Dome ? 'Dome Tent' : 'Cabin Tent'} with {dataStore.getTent()?.stakes} stakes
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Make sure you have all the parts needed to set up your tent
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        The next slides are a guide to help you set up your tent's stakes correctly.
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        At the end there will be a quick check to make sure everything is set up correctly!
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(1)
        },
        {
            id: 1,
            title: '1. Before placing your stakes:',
            instructions:
                <Grid container spacing={1}>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Put your ground tarp on the
                        floor
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Place the body of your tent on
                        top of the ground tarp (make
                        sure the entrance of your tent
                        is in the correct direction!)
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Assemble your tent poles and
                        attach the poles to the body of
                        the tent.
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Start placing your stakes as
                        instructed on the next page!
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(2)
        },
        {
            id: 2,
            title: '2. Placing the stakes:',
            instructions:
                <Grid container spacing={1}>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Prepare the ground on the spots
                        you want to put your stakes so
                        they’re on solid ground, make
                        sure you check for leaves or
                        anything that can be considered
                        unsafe
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Make sure your stakes are in
                        good condition!
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Let’s start correctly placing
                        the stakes!
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        We will place 4 stakes
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(3)
        },
        {
            id: 3,
            title: '3. Correct Placement:',
            instructions:
                <Grid container spacing={1}>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Each stake must be inserted into
                        the ground vertically for utmost
                        efficiency
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        After lightly placing the stake
                        on the ground use a rock or
                        another hard solid object to
                        push the stake into the ground
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        Make sure it’s almost completely
                        under ground for max safety!
                    </Grid>
                    <Grid xs={1}>
                        <Check />
                    </Grid>
                    <Grid xs={11}>
                        In the next step we’re going to
                        make sure you placed each stake
                        correctly!
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(4)
        },
        {
            id: 4,
            title: '4. Checking:',
            instructions:
                <Grid container spacing={1}>
                    {[
                        'Making sure the stakes are correctly placed and are completely under the ground',
                        'Checking if the stakes are in good condition',
                        'Making sure the stakes are vertical',
                        'Final verification'
                    ].map((text, idx) => (
                        <React.Fragment key={idx}>
                            <Grid xs={1}>
                                <ShieldTick />
                            </Grid>
                            <Grid xs={10}>
                                {text}
                            </Grid>
                            <Grid xs={1} className='number'>
                                {loadingProgress > idx ? <Check /> : <Loader />}
                            </Grid>
                        </React.Fragment>
                    ))}
                    {loadingProgress == 4 && (
                        <Grid xs={12} sx={
                            {
                                fontWeight: 'bold',
                                color: 'green'
                            }
                        }>
                            Check complete! Your stakes are all correctly placed!
                        </Grid>
                    )}
                </Grid>,
            onClick: () => {
                uiStore.setSuccess(true);
                uiStore.setSuccessText('Tent Stakes set successfully!');
                uiStore.setStakeReady(true);
                navigate('/menu');
            }
        }
    ]

    useEffect(() => {
        setCurrentTab(uiStore.CurrentTab);
    }, [uiStore.CurrentTab]);

    // pseudo-loading for tab id 4
    useEffect(() => {
        // clear previous timers
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        // start only when tab 4 is active
        if (currentTab === 4) {
            setLoadingProgress(0);
            const runStep = (step: number) => {
                const delay = 300 + Math.random() * 900; // random 300-1200ms
                timerRef.current = window.setTimeout(() => {
                    setLoadingProgress(prev => {
                        const next = prev + 1;

                        if (next < 4) {
                            // continue to next step
                            runStep(next);
                        }
                        return next;
                    });
                }, delay);
            };
            // kick off first step
            runStep(0);
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [currentTab, navigate]);

    return (
        <div className='Setup'>
            <Tab id={currentTab} title={tabContent[currentTab].title} instructions={tabContent[currentTab].instructions} onClick={tabContent[currentTab].onClick} loadingProgress={loadingProgress} />
        </div>
    );
}

export default observer(Stakes);
