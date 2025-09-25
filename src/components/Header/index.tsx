import { Box, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../assets/Home.svg';
import Back from '../../assets/Back.svg';
import './Header.less';
import SoundButton from '../SoundButton';

interface HeaderProps {
    onClickBack: () => void;
    title: string;
    color: string;
}

const Header: React.FC<HeaderProps> = ({ onClickBack, title, color }) => {
    const navigate = useNavigate();
    return (
        <div className='Header'>
            <Grid flexGrow={1} container>
                <Grid size={2} >
                    <Box display='flex' justifyContent='flex-start'>
                        <SoundButton
                            aria-label='left-button'
                            color='primary'
                            onClick={onClickBack}
                            sound='Back'
                        >
                            <Back />
                        </SoundButton>
                    </Box>
                </Grid>
                <Grid size={8} className='title' color={color}>
                    <div>{title}</div>
                </Grid>
                <Grid size={2}>
                    <Box display='flex' justifyContent='flex-end'>
                        <SoundButton
                            aria-label='right-button'
                            color='secondary'
                            onClick={() => {
                                navigate('/menu');
                            }}
                            sound='Click'
                        >
                            <Home />
                        </SoundButton>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
