import { Box, Button, Divider, Modal } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import './TipModal.less';
import { Check } from "@mui/icons-material";

function TipModal({
    isVisible,
    closeModal
}: {
    isVisible: boolean;
    closeModal: () => void;
}) {
    return (
        <Modal
            open={isVisible}
            onClose={closeModal}
        >
            <Box className="TipModal">
                <div className="title">Quick Tips</div>
                <div className="description">Here are some quick tips to get you started:</div>
                <Divider sx={{width: '100%'}}/>
                <div className="content">
                    <div className="secondary-title">
                        - If the cover is over the tent:
                    </div>
                    <div className="tip">
                        <Check /> Slide the cover over your tent
                    </div>
                    <div className="tip">
                        <Check /> Connect the ropes in place using the tent’s pegs using as much tension as needed.
                    </div>
                    <div className="secondary-title">
                        - Otherwise:
                    </div>
                    <div className="tip">
                        <Check /> Assemble the protective covers with the help of the cover’s poles
                    </div>
                    <div className="tip">
                        <Check /> Secure the covers in place using the supportive pegs
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={closeModal}
                >
                    Got it!
                </Button>
            </Box>
        </Modal>
    );
}

export default observer(TipModal);