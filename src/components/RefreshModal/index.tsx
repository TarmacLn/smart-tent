import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import { dataStore, uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';

function InfoModal() {
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: '#FEE1B8',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '20px',
    };

    return (
        <Modal
            open={uiStore.RefreshModal}
            onClose={() => uiStore.setRefreshModal(false)}
        >
            <Box sx={modalStyle}>
                <div className='title'>
                    <Typography
                        variant='h4'
                        component='div'
                        fontWeight={'bold'}
                        textAlign={'center'}
                        gutterBottom
                        fontFamily={"'Gaiatype', sans-serif"}
                    >
                        Refresh
                    </Typography>
                </div>
                <div className='content'>
                    <Typography textAlign={'center'} fontWeight={'bold'}>
                        Are you sure you want to refresh the app?
                    </Typography>
                    <Typography textAlign={'center'}>
                        This will delete all the data you have saved.
                    </Typography>
                    <br />
                    <div
                        className='buttons'
                        style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                    >
                        <Button
                            variant='contained'
                            color='error'
                            onClick={() => uiStore.setRefreshModal(false)}
                        >
                            No
                        </Button>
                        <Button
                            variant='contained'
                            onClick={() => {
                                dataStore.refreshData()
                                uiStore.setRefreshModal(false)
                            }}
                            color='primary'
                        >
                            Yes
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(InfoModal);
