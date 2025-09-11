import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BasicLight from '../../assets/BasicLight.svg';
import Colour from '../../assets/Colour.svg';
import Special from '../../assets/Special.svg';
import './Lights.less';

function Lights() {

    const navigate = useNavigate();

    return (
        <div className='Page lights'>
            <Header
                title='Tent Lights'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className="menu-container">
                <div className="menu-box" onClick={() => navigate('/lights/basic')}>
                    <div className="icon"><BasicLight /></div>
                    <div className="label">Basic Lighting</div>
                    <div className="arrow"><ArrowForwardIosIcon /></div>
                </div>

                <div className="menu-box" onClick={() => navigate('/lights/colour')}>
                    <div className="icon"><Colour /></div>
                    <div className="label">Color Lab</div>
                    <div className="arrow"><ArrowForwardIosIcon /></div>
                </div>

                <div className="menu-box" onClick={() => navigate('/lights/special')}>
                    <div className="icon"><Special /></div>
                    <div className="label">Special Effects</div>
                    <div className="arrow"><ArrowForwardIosIcon /></div>
                </div>
            </div>
        </div>
    );
}

export default Lights;
