import React from "react";
import './Panels.less';
import Header from "../../../components/Header";
import { uiStore } from "../../../stores";
import { Divider, Grid }from "@mui/material";
import Air from '../../../assets/Air.svg';

export default function Panels() {

    return (
        <div className="AC">
            <Header
                title='Energy Management'
                onClickBack={() => uiStore.setCurrentTab(0)}
                color='black'
            />
            <div className="content" >
                <div className="banner">
                    <Grid container spacing={2}>
                        <Grid size={1}>
                            <Air />
                        </Grid>
                        <Grid size={11} className="banner-title">
                            <div className="title">Air Conditioning</div>
                            <div className="description">Manage and monitor your air conditioning system to optimize energy generation and storage.</div>
                        </Grid>
                        <Divider flexItem sx={{ width: '100%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                    </Grid>
                </div>
            </div>
        </div>
    );
}