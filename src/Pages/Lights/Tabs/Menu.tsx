import React from "react";
import { useNavigate } from "react-router-dom";
import { uiStore } from "../../../stores";
import Header from "../../../components/Header";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BasicLight from '../../../assets/BasicLight.svg';
import Colour from '../../../assets/Colour.svg';
import Special from '../../../assets/Special.svg';
import './Menu.less';

function Menu() {

    const navigate = useNavigate();

    return (
        <div className='Page lights'>
            <Header
                title='Tent Lights'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className="menu-container">
                <div className="menu-box" onClick={() => uiStore.setCurrentTab(1)}>
                    <div className="icon"><BasicLight /></div>
                    <div className="label">Basic Lights</div>
                    <div className="arrow"><ArrowForwardIosIcon /></div>
                </div>

                <div className="menu-box" onClick={() => uiStore.setCurrentTab(2)}>
                    <div className="icon"><Colour /></div>
                    <div className="label">Color Lights</div>
                    <div className="arrow"><ArrowForwardIosIcon /></div>
                </div>

                <div className="menu-box" onClick={() => uiStore.setCurrentTab(3)}>
                    <div className="icon"><Special /></div>
                    <div className="label">Special Lights</div>
                    <div className="arrow"><ArrowForwardIosIcon /></div>
                </div>
            </div>
        </div>
    );
}

export default Menu;