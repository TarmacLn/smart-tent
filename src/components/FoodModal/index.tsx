import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import './FoodModal.less';
import { Food } from "../../stores/types";
import Basket from '../../assets/Basket.svg';
import { dataStore } from "../../stores";
import SoundButton from "../SoundButton";
import FoodImage from "../FoodImage";

function FoodModal({
    isVisible,
    closeModal,
    food,
}: {
    isVisible: boolean;
    closeModal: () => void;
    food: Food;
}) {

    const [notes, setNotes] = useState<string>('');

    const addFood = () => {
        dataStore.addToBasket(food, notes);
        closeModal();
    }

    return (
        <Modal
            open={isVisible}
            onClose={closeModal}
        >
            <Box className="FoodModal">
                <div className="wrapper">
                    <div className="content">
                        <div className="food-item">
                            <Grid container spacing={5} sx={{ height: '100%' }}>
                                <Grid size={5}>
                                    <FoodImage type="big" name={food.name} />
                                </Grid>
                                <Grid size={7} className="item-content">
                                    <div className="item">
                                        <div className="item-info">
                                            <div className="item-name">{food.name}</div>
                                            <div className="item-price">{food.price}€</div>
                                        </div>
                                        <div className="item-description">{food.description}</div>
                                    </div>
                                    <div className="item-label">Add a note:</div>
                                    <div className="item-input">
                                        <TextField
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            fullWidth
                                            placeholder="E.g. No onions, extra spicy, etc."
                                            onChange={(e) => setNotes(e.target.value)}
                                        />
                                    </div>
                                    <div className='item-button'>
                                        <SoundButton
                                            variant="contained"
                                            color="error"
                                            onClick={addFood}
                                            sound='Click'
                                        >
                                            Add to Basket <Basket />
                                        </SoundButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(FoodModal);