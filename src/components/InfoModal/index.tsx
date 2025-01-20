import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { uiStore } from "../../stores";
import { observer } from "mobx-react-lite";

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
    };

    return (
        <Modal open={uiStore.InfoModal} onClose={() => uiStore.setInfoModal(false)}>
            <Box sx={modalStyle}>
                <div className='title'>
                    <Typography
                        variant='h4'
                        component='div'
                        fontWeight={'bold'}
                        textAlign={'center'}
                        gutterBottom
                    >
                        Info
                    </Typography>
                </div>
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
                        <Typography>
                            In the context of the course, we were asked to
                            create an app that would help the user to set up a
                            tent.
                        </Typography>
                        <Typography>
                            The given app is currently not at it's completed
                            version but will be updated in the future.
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            Computer Science, University of Piraeus 2024-2025.
                        </Typography>
                    </Typography>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(InfoModal);
