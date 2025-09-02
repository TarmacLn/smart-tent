import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import './CoverModal.less';
import Shield from '../../assets/Covers.svg';

function CoverModal({
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
            <Box className="CoverModal">
                <div className="wrapper">
                    <div className="title"><Shield /> Add Cover</div>
                    <Divider sx={{ width: '100%' }} />
                    <div className="content">
                        <div className="text">
                            Cover Name:
                            <TextField sx={{ marginLeft: '8px' }} variant="standard" />
                        </div>
                        <div className="text">
                            Choose your cover's type:
                            <RadioGroup
                                defaultValue="top"
                                row
                                sx={{ marginLeft: '8px' }}
                            >
                                <FormControlLabel value="top" control={<Radio />} label="On top of the tent" />
                                <FormControlLabel value="other" control={<Radio />} label="Around the tent" />
                            </RadioGroup>
                        </div>
                        <div className="text">
                            Choose the size of your cover:
                            <FormControl variant="standard" sx={{ marginLeft: '8px', width: '120px' }}>
                                <Select
                                    label="Size"
                                    sx={{ width: '120px' }}
                                >
                                    <MenuItem value={10}>Small</MenuItem>
                                    <MenuItem value={20}>Medium</MenuItem>
                                    <MenuItem value={30}>Large</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="button">
                        <Button
                            variant="contained"
                            onClick={closeModal}
                        >
                            Add cover
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(CoverModal);