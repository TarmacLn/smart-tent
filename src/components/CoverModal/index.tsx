import { Box, Button, ButtonGroup, Divider, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import './CoverModal.less';
import Shield from '../../assets/Covers.svg';
import { CoverSizeEnum, CoverTypeEnum } from "../../stores/types";
import { dataStore } from "../../stores";

function CoverModal({
    isVisible,
    closeModal,
    type,
    id
}: {
    isVisible: boolean;
    closeModal: () => void;
    type: string;
    id?: number;
}) {
    const [coverName, setCoverName] = React.useState('');
    const [coverType, setCoverType] = React.useState(CoverTypeEnum.OnTop);
    const [coverSize, setCoverSize] = React.useState(CoverSizeEnum.Small);

    useEffect(() => {
        if (type === 'edit' && id !== undefined) {
            const cover = dataStore.getCovers().find(c => c.id === id);
            if (cover) {
                setCoverName(cover.name);
                setCoverType(cover.type);
                setCoverSize(cover.size);
            }
        } else {
            setCoverName('');
            setCoverType(CoverTypeEnum.OnTop);
            setCoverSize(CoverSizeEnum.Small);
        }
    }, [isVisible, type, id]);

    const validateForm = () => {
        return coverName.length > 0;
    }

    const createCover = () => {
        if (!validateForm()) {
            return;
        }
        const newCover = {
            name: coverName,
            type: coverType,
            size: coverSize
        };
        dataStore.addCover(newCover);
        closeModal();
    }

    const updateCover = () => {
        if (!validateForm() || id === undefined) {
            return;
        }
        const updatedCover = {
            id,
            name: coverName,
            type: coverType,
            size: coverSize
        };
        dataStore.updateCover(updatedCover);
        closeModal();
    }

    const deleteCover = () => {
        if (id === undefined) {
            return;
        }
        dataStore.removeCover(id);
        closeModal();
    }

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
                            <TextField
                                sx={{ marginLeft: '8px' }}
                                variant="standard"
                                error={coverName.length === 0}
                                value={coverName}
                                onChange={(e) => setCoverName(e.target.value)}
                                placeholder="Enter cover name"
                            />
                        </div>
                        <div className="text">
                            Choose your cover's type:
                            <RadioGroup
                                defaultValue="top"
                                row
                                sx={{ marginLeft: '8px' }}
                                value={coverType}
                                onChange={(e) => setCoverType(e.target.value as CoverTypeEnum)}
                            >
                                <FormControlLabel value={CoverTypeEnum.OnTop} control={<Radio />} label="On top of the tent" />
                                <FormControlLabel value={CoverTypeEnum.Around} control={<Radio />} label="Around the tent" />
                            </RadioGroup>
                        </div>
                        <div className="text">
                            Choose the size of your cover:
                            <FormControl variant="standard" sx={{ marginLeft: '8px', width: '120px' }}>
                                <Select
                                    label="Size"
                                    sx={{ width: '120px' }}
                                    value={coverSize}
                                    onChange={(e) => setCoverSize(e.target.value as CoverSizeEnum)}
                                >
                                    <MenuItem value={CoverSizeEnum.Small}>Small</MenuItem>
                                    <MenuItem value={CoverSizeEnum.Medium}>Medium</MenuItem>
                                    <MenuItem value={CoverSizeEnum.Large}>Large</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {type === 'edit' ? (
                        <div className="buttons">
                            <Button
                                variant="contained"
                                color="error"
                                onClick={deleteCover}
                            >
                                Delete cover
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={closeModal}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={updateCover}
                            >
                                Save changes
                            </Button>
                        </div>
                    ) :
                        (
                            <div className="buttons">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={createCover}
                                >
                                    Add cover
                                </Button>
                            </div>
                        )
                    }
                </div>
            </Box>
        </Modal>
    );
}

export default observer(CoverModal);