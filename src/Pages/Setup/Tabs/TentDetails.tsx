import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    InputAdornment,
    Radio,
    RadioGroup,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TentTypeEnum } from '../../../stores/types';
import Home from '../../../assets/Home.svg';
import './TentDetails.less';
import { uiStore } from '../../../stores';
import Header from '../../../components/Header';

//Tab no1
function TentDetails() {
    const navigate = useNavigate();
    const [type, setType] = React.useState(TentTypeEnum.AFrame);
    const [stakes, setStakes] = React.useState<number | ''>(4);
    const stakesError = stakes !== '' && (stakes < 4 || stakes > 40);

    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        newType: TentTypeEnum
    ) => {
        if (newType !== null) {
            setType(newType);
        }
    };

    const handleStakesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (v === '') return setStakes('');
        const n = Math.floor(Number(v));
        setStakes(Number.isNaN(n) ? '' : n);
    };

    const clampStakes = () => {
        if (stakes === '' || Number.isNaN(Number(stakes))) return setStakes(4);
        setStakes(Math.max(4, Math.min(40, Number(stakes))));
    };

    return (
        <div className='TentDetails'>
            <Header
                title=''
                onClickBack={() => navigate('/menu')}
                color='white'
            />{' '}
            <div className='header'>
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
                                        <Box className='box tent'>
                                            <br />
                                            Tent type:
                                            <Box className='image'>
                                                <div
                                                    className={
                                                        type === TentTypeEnum.AFrame
                                                            ? 'AFrame'
                                                            : 'Dome'
                                                    }
                                                />
                                            </Box>
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
                                            <br />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid xs={12} item>
                                        <Box className='box'>
                                            <br />
                                            Tent Size:
                                            <FormControl>
                                                <RadioGroup
                                                    defaultValue="small"
                                                    name="tentSize"
                                                    row
                                                >
                                                    <FormControlLabel value="small" control={<Radio />} label="Small (1 person)" />
                                                    <FormControlLabel value="medium" control={<Radio />} label="Medium (2-3 persons)" />
                                                    <FormControlLabel value="large" control={<Radio />} label="Large (4-5 persons)" />
                                                    <FormControlLabel value="xlarge" control={<Radio />} label="X-Large (6+ persons)" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        <Box className='box'>
                                            <br />
                                            Amount of stakes:
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                size="small"
                                                defaultValue={4}
                                                slotProps={{
                                                    input: {
                                                        startAdornment: <InputAdornment position="start">#</InputAdornment>,
                                                        endAdornment: <InputAdornment position="end">stakes</InputAdornment>,
                                                        inputProps: { min: 4, max: 40 }
                                                    },
                                                }}
                                                onChange={handleStakesChange}
                                                onBlur={clampStakes}
                                                error={stakesError}
                                                helperText={stakesError ? 'Enter between 4 and 40 stakes' : ''}
                                                required
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='footer'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{
                                        width: '150px',
                                    }}
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
