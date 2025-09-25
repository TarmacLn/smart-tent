import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
} from '@mui/material';
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';
import './Instructions.less';
import Stake from '../../../assets/Stake.svg';
import SoundButton from '../../../components/SoundButton';

//Tab base
export function Tab(
    {
        id,
        title,
        instructions,
        onClick,
        loadingProgress,
        depth,
        angle
    }: {

        id: number;
        title: string;
        instructions: React.ReactNode;
        onClick: () => void;
        loadingProgress?: number;
        depth?: number;
        angle?: number;
    }
) {
    const MAX_SINK_PX = 120;
    const sink = Math.round(((depth ?? 50) / 100) * MAX_SINK_PX);
    const stakeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = stakeRef.current;
        if (!el) return;
        let raf = 0;
        const deg = (angle ?? 90) - 90;
        raf = requestAnimationFrame(() => {
            // translate then rotate; transform-origin is set in CSS to bottom center
            el.style.transform = `translate3d(0, ${sink}px, 0) rotate(${deg}deg)`;
        });
        return () => cancelAnimationFrame(raf);
    }, [sink, angle]);

    const finishEnabled = id === 5 && loadingProgress === 4;
    const navigate = useNavigate();
    const onClickBack = () => {
        if (id === 0) {
            navigate('/menu');
        } else {
            uiStore.setCurrentTab(id - 1);
        }
    };

    return (
        <div className='Instructions'>
            <Header
                title='Stake Instructions'
                onClickBack={onClickBack}
                color='black'
            />
            <div className='main'>
                <Grid container flexGrow={1}>
                    <Grid size={12} >
                        <Container className='container' color='primary'>
                            <div className='title'>
                                <Stake /> Tent Stakes
                            </div>
                            <Divider />
                            <div className='content'>
                                <div className='step'>
                                    {title}
                                </div>
                                <Grid container flexGrow={1} spacing={4}>
                                    <Grid size={6} className='instructions'>
                                        {instructions}
                                    </Grid>
                                    <Grid size={6}>
                                        <div className={`image${id}`}>
                                            {id === 4 && (
                                                <div className="stake-overlay" aria-hidden>
                                                    <div className='stake' ref={stakeRef} />
                                                </div>
                                            )}
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='footer'>
                                <SoundButton
                                    variant='contained'
                                    color='primary'
                                    style={{
                                        width: '150px',
                                    }}
                                    onClick={() => onClick()}
                                    disabled={finishEnabled === false && id === 5}
                                    sound='Click'
                                    volume={0.3}
                                >
                                    {id === 5 ? 'Finish' : 'Next'}
                                </SoundButton>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}