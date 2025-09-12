import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import { dataStore, uiStore } from '../../../stores';
import { Box, Button, Container, Divider, Grid } from '@mui/material';
import ColourIcon from '../../../assets/Colour.svg';
import './Colour.less';

export default function Colour() {
  
  useEffect(() => {
    dataStore.setLightingMode('colour');
  }, []);

  return (
    <div className='Colour'>
      <Header
        title='Colour Lighting Setup'
        onClickBack={() => uiStore.setCurrentTab(0)}
        color='black'
      />
      <div className='main'>
        <Grid container>
          <Grid item xs={12}>
            <Container className='container' color='primary'>
              <div className='title'>
                <ColourIcon /> Colour Lighting
              </div>
              <Divider sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.45)' }} />
              <div className='content'>
                <Grid container spacing={2} alignItems="stretch">
                  <Grid item xs={12} md={5}>
                    <Box className='left'>
                      <Grid container spacing={2} alignItems="center">
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={1} container className='Divider'>
                    <Divider orientation='vertical' flexItem />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box className='right'>
                      
                    </Box>
                  </Grid>
                </Grid>
              </div>
              <div className='footer'>
                <Button
                  variant='contained'
                  color='secondary'
                  style={{
                    width: '150px',
                    marginRight: '20px',
                  }}
                  onClick={() => uiStore.setCurrentTab(0)}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  style={{
                    width: '150px',
                  }}
                  onClick={() => {                    
                    uiStore.setCurrentTab(0);
                  }}
                >
                  Save
                </Button>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}