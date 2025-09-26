import { Box, Divider, Modal, Typography } from '@mui/material';
import React from 'react';
import { uiStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import { BorderAll } from '@mui/icons-material';

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
            open={uiStore.InfoModal}
            onClose={() => uiStore.setInfoModal(false)}
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
                        Info
                    </Typography>
                </div>
                <Divider sx={{ width: '100%', marginBottom: '20px' }} />
                <div className='content'>
                    <Typography textAlign={'center'}>
                        This is an app created for the university course
                        <Typography fontWeight={'bold'}>
                            'Human and Computer Interaction'
                        </Typography>
                        from the students:
                        <br />
                        <Typography fontWeight={'bold'}>
                            Andrianou Ioanna and Danai Charzaka.
                        </Typography>
                        <Typography marginTop={'10px'}>
                            In the context of the course, we were asked to
                            create an app that would help the user to set up a
                            tent in a hypothetical smart tent scenario.
                        </Typography>
                        <Typography marginTop={'10px'}>
                            For more info read the README file in the GitHub
                            repository.
                        </Typography>
                        <a href='https://github.com/TarmacLn/smart-tent' target='_blank' rel='noopener noreferrer'>
                            Smart Tent Repository
                        </a>
                        <Typography fontWeight={'bold'} marginTop={'20px'}>
                            Computer Science, University of Piraeus 2024-2025.
                        </Typography>
                    </Typography>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(InfoModal);
