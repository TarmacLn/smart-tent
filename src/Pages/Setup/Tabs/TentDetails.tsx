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
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TentTypeEnum } from '../../../stores/types';
import Tent from '../../../assets/Tent.svg';
import './TentDetails.less';
import { dataStore, uiStore } from '../../../stores';
import Header from '../../../components/Header';

//Tab no1
function TentDetails() {
    const navigate = useNavigate();
    const [type, setType] = React.useState<TentTypeEnum>(TentTypeEnum.AFrame);
    const [stakes, setStakes] = React.useState<number>(4);
    const [size, setSize] = React.useState<number>(2);
    const stakesError = typeof stakes === 'number' && (stakes < 4 || stakes > 40);

    useEffect(() => {
        const tent = dataStore.getTent();
        if (tent) {
            setType(tent.type);
            setStakes(tent.stakes);
            setSize(tent.size);
        }
    }, []);

    const handleTypeChange = (
        _: React.MouseEvent<HTMLElement>,
        newType: TentTypeEnum
    ) => {
        if (newType !== null) {
            setType(newType);
            dataStore.setTent({ ...(dataStore.getTent() as any), type: newType });
        }
    };

    const handleStakesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (v === '') return setStakes(4);
        const n = Math.floor(Number(v));
        setStakes(Number.isNaN(n) ? 4 : n);
        if (!Number.isNaN(n) && n >= 4 && n <= 40) {
            const tent = dataStore.getTent();
            if (tent) {
                dataStore.setTent({ ...tent, stakes: n });
            }
        }
    };

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (v === '') return setSize(2);
        const n = Math.floor(Number(v));
        setSize(Number.isNaN(n) ? 2 : n);
        if (!Number.isNaN(n) && n >= 2 && n <= 5) {
            const tent = dataStore.getTent();
            if (tent) {
                dataStore.setTent({ ...tent, size: n });
            }
        }
    };

    const clampStakes = () => {
        if (stakes === 4 || Number.isNaN(Number(stakes))) return setStakes(4);
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
                <Grid container flexGrow={1}>
                    <Grid size={12} >
                        <Container className='container' color='primary'>
                            <div className='title'>
                                <Tent /> Tent Details
                            </div>
                            <Divider />
                            <div className='content'>
                                <Grid container flexGrow={1}>
                                    <Grid size={12} >
                                        <Box className='box'>
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
                                                onChange={handleTypeChange}
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
                                <Divider orientation='vertical' flexItem />
                                <Grid container flexGrow={1}>
                                    <Grid size={12} >
                                        <Box className='box'>
                                            <br />
                                            Tent Size:
                                            <FormControl>
                                                <RadioGroup
                                                    value={size}
                                                    name="tentSize"
                                                    onChange={handleSizeChange}
                                                >
                                                    <FormControlLabel value={2} control={<Radio />} label="Small (1 person)" />
                                                    <FormControlLabel value={3} control={<Radio />} label="Medium (2-3 persons)" />
                                                    <FormControlLabel value={4} control={<Radio />} label="Large (4-5 persons)" />
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
                                                value={stakes}
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
                                    onClick={() => {
                                        uiStore.setCurrentTab(1);
                                    }}
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
