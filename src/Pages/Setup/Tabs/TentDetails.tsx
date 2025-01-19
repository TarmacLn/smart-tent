import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TentTypeEnum } from '../../../stores/types';
import Home from '../../../assets/Home.svg';
import Back from '../../../assets/Back.svg';
import './TentDetails.less';
import { uiStore } from '../../../stores';

//Tab no1
function TentDetails() {
    const navigate = useNavigate();
    const [type, setType] = React.useState(TentTypeEnum.AFrame);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newType: TentTypeEnum
    ) => {
        if (newType !== null) {
            setType(newType);
        }
    };
    return (
        <div className='TentDetails'>
            <div className='header'>
                <Grid container>
                    <Grid xs={8} item>
                        <Box display='flex' justifyContent='flex-start'>
                            <IconButton
                                aria-label='left-button'
                                color='primary'
                                onClick={() => navigate('/menu')}
                            >
                                <Back />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box display='flex' justifyContent='flex-end'>
                            <IconButton
                                aria-label='right-button'
                                color='secondary'
                                onClick={() => navigate('/menu')}
                            >
                                <Home />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} item>
                        <Container className='container' color='primary'>
                            <div className='title'>
                                <Home /> Tent Details
                            </div>
                            <Divider />
                            <div className='content'>
                                <Grid container>
                                    <Grid xs={12} item>
                                        <Box className='box'>
                                            <br />
                                            Choose the size of your tent:
                                            <br />
                                            <br />
                                            <Grid
                                                container
                                                spacing={2}
                                                sx={{
                                                    justifyContent:
                                                        'flex-start',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Grid xs={4} item>
                                                    <div>Length:</div>
                                                </Grid>
                                                <Grid xs={2} item>
                                                    <TextField
                                                        id='length'
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                                <Grid xs={6} item>
                                                    <div>cm</div>
                                                </Grid>
                                                <Grid xs={4} item>
                                                    <div>Width:</div>
                                                </Grid>
                                                <Grid xs={2} item>
                                                    <TextField
                                                        id='width'
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                                <Grid xs={6} item>
                                                    <div>cm</div>
                                                </Grid>
                                                <Grid xs={4} item>
                                                    <div>Height:</div>
                                                </Grid>
                                                <Grid xs={2} item>
                                                    <TextField
                                                        id='height'
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                                <Grid xs={6} item>
                                                    <div>cm</div>
                                                </Grid>
                                                <Grid xs={4} item>
                                                    <div>Number of stakes:</div>
                                                </Grid>
                                                <Grid xs={2} item>
                                                    <TextField
                                                        id='stakes'
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Divider orientation='vertical' flexItem />
                                <Grid container>
                                    <Grid xs={12} item>
                                        <Box className='box'>
                                            <br />
                                            Choose your tent's type:
                                            <ToggleButtonGroup
                                                value={type}
                                                exclusive
                                                aria-label='text alignment'
                                                onChange={handleChange}
                                                defaultValue={0}
                                            >
                                                <ToggleButton
                                                    value={TentTypeEnum.AFrame}
                                                >
                                                    A-Frame
                                                </ToggleButton>
                                                <ToggleButton
                                                    value={TentTypeEnum.Dome}
                                                >
                                                    Dome
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                            <div
                                                className={
                                                    type === TentTypeEnum.AFrame
                                                        ? 'AFrame'
                                                        : 'Dome'
                                                }
                                            ></div>
                                            <br />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='footer'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{ backgroundColor: 'black' , width: '150px'}}
                                    onClick={() => uiStore.setCurrentTab(1)}
                                >
                                    Continue
                                </Button>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default TentDetails;
