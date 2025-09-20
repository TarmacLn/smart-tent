import { Box, Button, ButtonGroup, Divider, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Modal, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import './ReceiptModal.less';
import { useNavigate } from "react-router-dom";
import { dataStore } from "../../stores";

function ReceiptModal({
    isVisible,
    closeModal,
    total
}: {
    isVisible: boolean;
    closeModal: () => void;
    total: number;
}) {
    const [confirmed, setConfirmed] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<string>('card');
    const navigate = useNavigate();

    const handleOrder = () => {
        const newOrder = {
            items: dataStore.getBasket(),
            total: total,
            paymentMethod: paymentMethod,
            deliveryTime: new Date(Date.now() + 25 * 60 * 1000) // 25 minutes from now
        };
        dataStore.addOrder(newOrder);
        dataStore.clearBasket();
        closeModal();
        navigate('/menu');
    };

    return (
        <Modal
            open={isVisible}
            onClose={closeModal}
        >
            <Box className="ReceiptModal">
                <div className="wrapper">
                    <div className="content">
                        {!confirmed &&
                            <>
                                <div className="title">Payment Method</div>
                                <RadioGroup
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <FormControlLabel value="Card" control={<Radio />} label="Card" />
                                    <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                                    <FormControlLabel value="Apple Pay" control={<Radio />} label="Apple Pay" />
                                </RadioGroup>
                                <div className="total">Pay total of {total.toFixed(2)}€ with {paymentMethod}</div>
                                <div className="button">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={() => {
                                            setConfirmed(true);
                                        }}
                                    >
                                        Confirm Payment
                                    </Button>
                                </div>
                            </>
                        }
                        {confirmed &&
                            <>
                                <div className="title">Payment Successful!</div>
                                <div className="image" />
                                <div className="message">Your food will be delivered to you at approximately:</div>
                                <div className="time">25'-30'</div>
                                <div className="button">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleOrder}
                                    >
                                        Back to Menu
                                    </Button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default observer(ReceiptModal);