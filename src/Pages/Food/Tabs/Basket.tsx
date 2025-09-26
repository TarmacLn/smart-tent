import React, { useState } from "react";
import Header from "../../../components/Header";
import { dataStore, uiStore } from "../../../stores";
import { Button, Divider, Grid } from "@mui/material";
import './Basket.less';
import { observer } from "mobx-react-lite";
import ReceiptModal from "../../../components/ReceiptModal";
import SoundButton from "../../../components/SoundButton";
import FoodImage from "../../../components/FoodImage";

function Basket() {

    const [isVisible, setIsVisible] = useState(false);
    const basketItems = dataStore.getBasket();
    const total = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const removeFood = (id: number) => {
        dataStore.removeFromBasket(id);
    };

    return (
        <div className="Basket">
            <ReceiptModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
                total={total}
            />
            <Header
                title='Your Basket'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className="content" >
                <Grid container spacing={2}>
                    <Grid size={5} className="left">
                        <div className="book" >
                            <div className="book-content">
                                <div className="book-list">
                                    {basketItems.map((item, index) => (
                                        <div key={index} className="book-item">
                                            <Grid container spacing={2}>
                                                <Grid size={5}>
                                                    <FoodImage type="small" name={item.name} />
                                                </Grid>
                                                <Grid size={7} className="item-content">
                                                    <div className="item-name">{item.name} x{item.quantity}</div>
                                                    <div className="item-notes">{item.notes}</div>
                                                    <div className="item-actions">
                                                        <div className="item-remove" onClick={() => removeFood(item.id)}>Remove</div>
                                                        <div className="item-price">{item.price}€</div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{ margin: '20px 0' }} />
                                        </div>
                                    ))}
                                    {basketItems.length === 0 && <div className="empty">Your basket is empty :/</div>}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={7} className="right">
                        <div className="receipt">
                            <div className="receipt-content">
                                <div className="receipt-title">Receipt</div>
                                <Divider sx={{ margin: '10px 0', width: '100%' }} />
                                <div className="receipt-items">
                                    {basketItems.map((item, index) => (
                                        <div key={index} className="receipt-item">
                                            <div className="item-name">{item.name} x{item.quantity}</div>
                                            <div className="item-price">{(item.price * item.quantity).toFixed(2)}€</div>
                                        </div>
                                    ))}
                                    {basketItems.length === 0 && <div className="empty">Your basket is empty :/</div>}
                                </div>
                                <Divider sx={{ margin: '10px 0', width: '100%' }} />
                                <div className="receipt-total">
                                    <div className="total-label">Total: </div>
                                    <div className="total-amount">{total.toFixed(2)}€</div>
                                </div>
                                <div className="receipt-info">
                                    <div className="receipt-notes">
                                        <div className="info-restaurant">Freaky Campsite Delivery Service</div>
                                        <div className="info-contact">Tel: 00000088899</div>
                                    </div>
                                    <div className="receipt-button">
                                        <SoundButton
                                            variant="contained"
                                            color="primary"
                                            disabled={basketItems.length === 0}
                                            onClick={() => setIsVisible(true)}
                                            sound="Click"
                                        >
                                            Proceed to payment
                                        </SoundButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default observer(Basket);