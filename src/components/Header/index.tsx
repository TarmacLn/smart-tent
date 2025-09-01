import { Box, Grid, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../assets/Home.svg';
import Back from '../../assets/Back.svg';
import './Header.less';
import { uiStore } from '../../stores';

interface HeaderProps {
    onClickBack: () => void;
    title: string;
    color: string;
}

const Header: React.FC<HeaderProps> = ({ onClickBack, title , color}) => {
    const navigate = useNavigate();
    return (
        <div className='Header'>
            <Grid container>
                <Grid xs={2} item>
                    <Box display='flex' justifyContent='flex-start'>
                        <IconButton
                            aria-label='left-button'
                            color='primary'
                            onClick={onClickBack}
                        >
                            <Back />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid xs={8} item className='title' color={color}>
                    <div>{title}</div>
                </Grid>
                <Grid xs={2}>
                    <Box display='flex' justifyContent='flex-end'>
                        <IconButton
                            aria-label='right-button'
                            color='secondary'
                            onClick={() => {
                                navigate('/menu');
                            }}
                        >
                            <Home />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
