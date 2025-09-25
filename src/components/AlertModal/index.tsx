import { observer } from "mobx-react-lite";
import React from "react";
import './AlertModal.less';
import { Box, Divider, Modal } from "@mui/material";
import Warning from '../../assets/Warning.svg';
import SoundButton from "../SoundButton";

function AlertModal({
    isVisible,
    closeModal,
}: {
    isVisible: boolean;
    closeModal: () => void;
}) {
    return (
        <Modal
            open={isVisible}
            onClose={closeModal}
        >
            <Box className="AlertModal">
                <div className="wrapper">
                    <div className="content">
                        <div className="title"><Warning /> Weather Alert</div>
                        <Divider sx={{ width: '100%', marginBottom: '20px' }} />
                        <div className="description">Winds are expected to reach speeds of 60 km/h by 2:00 PM on Wednesday 30 September. Please take necessary precautions to secure loose objects and avoid outdoor activities.</div>
                        <div className="description">Recommended: Stay indoors, secure loose objects, and avoid outdoor activities during peak wind hours. Go to any of the available shelters if you feel unsafe.</div>
                        <div className="description">Click "View Shelters" in the main map to see nearby shelters.</div>
                        <div className="description">The peak wind period is expected to last for approximately 3 hours. Please stay safe and take care of yourself and others around you.</div>
                    </div>
                    <div className="button">
                        <SoundButton
                            variant="contained"
                            color="error"
                            onClick={closeModal}
                            sound='Back'
                        >
                            Close
                        </SoundButton>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(AlertModal);