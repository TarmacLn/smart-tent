import React, { useEffect, useRef, useState } from 'react';
import { dataStore, uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import { Tab } from './Tabs/Tab';
import { Button, Grid, Slider } from '@mui/material';
import { Check } from '@mui/icons-material';
import ShieldTick from '../../assets/ShieldTick.svg';
import { useNavigate } from 'react-router-dom';
import { TentTypeEnum } from '../../stores/types';
import Loader from '../../assets/Loader.svg';

function Stakes() {
    const [currentTab, setCurrentTab] = useState(uiStore.CurrentTab);
    const navigate = useNavigate();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const timerRef = useRef<number | null>(null);

    const [depth, setDepth] = useState<number>(50);
    const [angle, setAngle] = useState<number>(90);

    const stakes : number = dataStore.getTent()?.stakes || 4;
    const stakesArray = Array.from({ length: stakes }, (_, i) => i + 1);
    const [selectedStake, setSelectedStake] = useState<number>(1);
    const [stakeSaved, setStakeSaved] = useState<boolean>(false);

    useEffect(() => {
        const initialConfigs = Array.from({ length: stakes }, (_, i) => ({
            id: i + 1,
            depth: 50,
            angle: 90
        }));
        dataStore.setStakeConfigurations(initialConfigs);
    }, [stakes]);

    useEffect(() => {
        setStakeSaved(false);
    }, [selectedStake]);

    useEffect(() => {
        const configs = dataStore.getStakeConfigurations();
        const config = configs.find(c => c.id === selectedStake);
        if (config) {
            setDepth(config.depth);
            setAngle(config.angle);
        }
    }, [selectedStake]);

    const handleSaveConfiguration = (id: number) => {
        const currentConfigs = dataStore.getStakeConfigurations();
        const updatedConfigs = currentConfigs.map(config =>
            config.id === id ? { ...config, depth, angle } : config
        );
        dataStore.setStakeConfigurations(updatedConfigs);
        setStakeSaved(true);
    }

    const tabContent = [
        {
            id: 0,
            title: '0. Tent Checks:',
            instructions:
                <Grid container flexGrow={1} spacing={1}>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Your tent type is a {dataStore.getTent()?.type === TentTypeEnum.Dome ? 'Dome Tent' : 'Cabin Tent'} with {dataStore.getTent()?.stakes} stakes
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Make sure you have all the parts needed to set up your tent
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        The next slides are a guide to help you set up your tent's stakes correctly.
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        At the end there will be a quick check to make sure everything is set up correctly!
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(1)
        },
        {
            id: 1,
            title: '1. Before placing your stakes:',
            instructions:
                <Grid container flexGrow={1} spacing={1}>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Put your ground tarp on the
                        floor
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Place the body of your tent on
                        top of the ground tarp (make
                        sure the entrance of your tent
                        is in the correct direction!)
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Assemble your tent poles and
                        attach the poles to the body of
                        the tent.
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
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
                <Grid container spacing={1} flexGrow={1}>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Prepare the ground on the spots
                        you want to put your stakes so
                        they’re on solid ground, make
                        sure you check for leaves or
                        anything that can be considered
                        unsafe
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Make sure your stakes are in
                        good condition!
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Let’s start correctly placing
                        the stakes!
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        We will place 4 stakes
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(3)
        },
        {
            id: 3,
            title: '3. Correct Placement:',
            instructions:
                <Grid container flexGrow={1} spacing={1}>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Each stake must be inserted into
                        the ground vertically for utmost
                        efficiency
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        After lightly placing the stake
                        on the ground use a rock or
                        another hard solid object to
                        push the stake into the ground
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Make sure it’s almost completely
                        under ground for max safety!
                    </Grid>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        In the next step we’re going to
                        make sure you placed each stake
                        correctly!
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(4)
        },
        {
            id: 4,
            title: '4. Stake configuration:',
            instructions:
                <Grid container flexGrow={1} spacing={1}>
                    <Grid size={1}>
                        <Check />
                    </Grid>
                    <Grid size={11}>
                        Configure your stakes:
                    </Grid>
                    <Grid size={12}>
                        <div className='stake-list'>
                            {stakesArray.map((stakeNum) => (
                                <div
                                    key={stakeNum}
                                    className={`stake-item ${selectedStake === stakeNum ? 'selected' : ''}`}
                                    onClick={() => setSelectedStake(stakeNum)}
                                >
                                    <div className='stake-number'>Stake {stakeNum}</div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid size={12}>
                        Depth:
                        <Slider
                            value={depth}
                            onChange={(_, v) => setDepth(v as number)}
                            min={0}
                            max={100}
                            aria-label="Stake depth"
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                    <Grid size={12}>
                        Angle:
                        <Slider
                            value={angle}
                            onChange={(_, v) => setAngle(v as number)}
                            min={60}
                            max={120}
                            aria-label="Stake angle"
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                    <Grid size={12} className='save-button'>
                        <Button
                            variant='outlined'
                            color={stakeSaved ? 'success' : 'primary'}
                            onClick={() => {
                                setStakeSaved(true);
                                handleSaveConfiguration(selectedStake);
                            }}
                        >
                            {stakeSaved ? 'Saved' : 'Save Configuration'}
                        </Button>
                    </Grid>
                </Grid>,
            onClick: () => uiStore.setCurrentTab(5)
        },
        {
            id: 5,
            title: '5. Checking:',
            instructions:
                <Grid container flexGrow={1} spacing={1}>
                    {[
                        'Making sure the stakes are correctly placed and are completely under the ground',
                        'Checking if the stakes are in good condition',
                        'Making sure the stakes are vertical',
                        'Final verification'
                    ].map((text, idx) => (
                        <React.Fragment key={idx}>
                            <Grid size={1}>
                                <ShieldTick />
                            </Grid>
                            <Grid size={10}>
                                {text}
                            </Grid>
                            <Grid size={1} className='number'>
                                {loadingProgress > idx ? <Check /> : <Loader />}
                            </Grid>
                        </React.Fragment>
                    ))}
                    {loadingProgress == 4 && (
                        <Grid size={12} sx={
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
        // start only when tab 5 is active
        if (currentTab === 5) {
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
            <Tab
                id={currentTab}
                title={tabContent[currentTab].title}
                instructions={tabContent[currentTab].instructions}
                onClick={tabContent[currentTab].onClick}
                loadingProgress={loadingProgress}
                depth={depth}
                angle={angle}
            />
        </div>
    );
}

export default observer(Stakes);
